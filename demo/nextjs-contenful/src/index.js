const fs = require("fs");
const zlib = require("zlib");
const test = require("./test.json");

function compressStringBrotli(inputString) {
  const inputBuffer = Buffer.from(inputString);
  return zlib.brotliCompressSync(inputBuffer);
}

function decompressStringBrotli(compressedBuffer) {
  const decompressedBuffer = zlib.brotliDecompressSync(compressedBuffer);
  return decompressedBuffer;
}

// // Example usage
const inputStr = JSON.stringify(test);
const compressedStr = compressStringBrotli(inputStr);

fs.writeFileSync("test.min.json", compressedStr.toString("base64"));
//
// const file = fs.readFileSync("test.min.json");
//
// const decompressedStr = decompressStringBrotli(Buffer.from(file));
// //
// fs.writeFileSync("test.original.json", decompressedStr);
