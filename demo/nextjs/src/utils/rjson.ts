// @ts-nocheck
// Copied from here: https://github.com/WebReflection/JSONH/blob/master/js/jsonh.js

export const RJSON = (function () {
  "use strict";

  const hasOwnProperty = Object.prototype.hasOwnProperty,
    toString = Object.prototype.toString,
    getKeys = Object.keys || _keys,
    isArray = Array.isArray || _isArray;

  /**
   * @param {*} Any valid for JSON javascript data.
   * @return {*} Packed javascript data, usually a dictionary.
   */
  function pack(data) {
    var schemas = {},
      maxSchemaIndex = 0;

    function encodeArray(value) {
      var len = value.length,
        encoded = [];
      if (len === 0) return [];
      if (typeof value[0] === "number") {
        encoded.push(0); // 0 is schema index for Array
      }
      for (var i = 0; i < len; i++) {
        var v = value[i],
          current = encode(v),
          last = encoded[encoded.length - 1];
        if (isEncodedObject(current) && isArray(last) && current[0] === last[0]) {
          // current and previous object have same schema,
          // so merge their values into one array
          encoded[encoded.length - 1] = last.concat(current.slice(1));
        } else {
          encoded.push(current);
        }
      }
      return encoded;
    }

    function encodeObject(value) {
      var schemaKeys = getKeys(value).sort();
      if (schemaKeys.length === 0) {
        return {};
      }
      var encoded,
        schema = schemaKeys.length + ":" + schemaKeys.join("|"),
        schemaIndex = schemas[schema];
      if (schemaIndex) {
        // known schema
        encoded = [schemaIndex];
        for (var i = 0, k; (k = schemaKeys[i++]); ) {
          encoded[i] = encode(value[k]);
        }
      } else {
        // new schema
        schemas[schema] = ++maxSchemaIndex;
        encoded = {};
        for (var i = 0, k; (k = schemaKeys[i++]); ) {
          encoded[k] = encode(value[k]);
        }
      }
      return encoded;
    }

    function encode(value) {
      if (typeof value !== "object" || !value) {
        // non-objects or null return as is
        return value;
      } else if (isArray(value)) {
        return encodeArray(value);
      } else {
        return encodeObject(value);
      }
    }

    return encode(data);
  }

  /**
   * @param {*} data Packed javascript data.
   * @return {*} Original data.
   */
  function unpack(data) {
    var schemas = {},
      maxSchemaIndex = 0;

    function parseArray(value) {
      if (value.length === 0) {
        return [];
      } else if (value[0] === 0 || typeof value[0] !== "number") {
        return decodeArray(value);
      } else {
        return decodeObject(value);
      }
    }

    function decodeArray(value) {
      var len = value.length,
        decoded = []; // decode array of something
      for (var i = value[0] === 0 ? 1 : 0; i < len; i++) {
        var v = value[i],
          obj = decode(v);
        if (isEncodedObject(v) && isArray(obj)) {
          // several objects was encoded into single array
          decoded = decoded.concat(obj);
        } else {
          decoded.push(obj);
        }
      }
      return decoded;
    }

    function decodeObject(value) {
      var schemaKeys = schemas[value[0]],
        schemaLen = schemaKeys.length,
        total = (value.length - 1) / schemaLen,
        decoded;
      if (total > 1) {
        decoded = []; // array of objects with same schema
        for (var i = 0; i < total; i++) {
          var obj = {};
          for (var j = 0, k; (k = schemaKeys[j++]); ) {
            obj[k] = decode(value[i * schemaLen + j]);
          }
          decoded.push(obj);
        }
      } else {
        decoded = {};
        for (var j = 0, k; (k = schemaKeys[j++]); ) {
          decoded[k] = decode(value[j]);
        }
      }
      return decoded;
    }

    function decodeNewObject(value) {
      var schemaKeys = getKeys(value).sort();
      if (schemaKeys.length === 0) {
        return {};
      }
      schemas[++maxSchemaIndex] = schemaKeys;
      var decoded = {};
      for (var i = 0, k; (k = schemaKeys[i++]); ) {
        decoded[k] = decode(value[k]);
      }
      return decoded;
    }

    function decode(value) {
      if (typeof value !== "object" || !value) {
        // non-objects or null return as is
        return value;
      } else if (isArray(value)) {
        return parseArray(value);
      } else {
        // object with new schema
        return decodeNewObject(value);
      }
    }

    return decode(data);
  }

  /**
   * Object is encoded as array and object schema index is stored as
   * first item of the array. Valid schema index should be greater than 0,
   * because 0 is reserved for Array schema.
   * Several objects with same schema can be stored in the one array.
   * @param {*} value encoded value to check.
   * @return {boolean} true if value contains an encoded object or several
   * objects with same schema.
   */
  function isEncodedObject(value) {
    return isArray(value) && typeof value[0] === "number" && value[0] !== 0;
  }

  function _keys(obj) {
    var keys = [],
      k;
    for (k in obj) {
      if (hasOwnProperty.call(obj, k)) {
        keys.push(k);
      }
    }
    return keys;
  }

  function _isArray(obj) {
    return toString.apply(obj) === "[object Array]";
  }

  return {
    pack: pack,
    unpack: unpack,
  };
})();
