import { mySimpleClass } from "../examples/mySimpleClass.js"
import { AbstractPlaceholder } from "../modules/AbstractPlaceholder.js"
import { ContentPlaceholder } from "../modules/ContentPlaceholder.js"
import { Extractor } from "../modules/Extractor.js"
import { Registry } from "../modules/Registry.js"
import { Attr } from "../modules/types.js"
import { expect } from "@jest/globals"

describe("Extractors", () => {
  const tests: {
    placeholder: string
    name: string
    attr?: Attr
  }[] = [
    { placeholder: '{{placeholder attr="val1"val2"}}', name: "placeholder" },
    { placeholder: "{{placeholder}}", name: "placeholder" },
    { placeholder: "{{place_holder}}", name: "place_holder" },
    {
      placeholder: '{{place_holder attr="1"}}',
      name: "place_holder",
      attr: { attr: "1" },
    },
    {
      placeholder: '{{place_holder attr="1" attr2="2"}}',
      name: "place_holder",
      attr: { attr: "1", attr2: "2" },
    },
    {
      placeholder: '{{place_holder   attr="1"   attr2="2"   }}',
      name: "place_holder",
      attr: { attr: "1", attr2: "2" },
    },
    {
      placeholder: '{{  place_holder   attr="1"   attr2="2"}}',
      name: "place_holder",
      attr: { attr: "1", attr2: "2" },
    },
    { placeholder: "{{placeholder-part}}", name: "placeholder-part" },
    { placeholder: "{{placeholder_test-test}}", name: "placeholder_test-test" },
  ]

  test("Empty placeholder should return empty", () => {
    const emptyPlaceholder = new mySimpleClass("", "", "")

    const registrator = new Registry()
    const extr = new Extractor(registrator)

    registrator.registerPlaceholder(emptyPlaceholder)

    const res = extr.extract("")

    expect(res).toStrictEqual([[], [], ""])
  })

  test.each(tests)("should return instance", ({ placeholder, name, attr }) => {
    const myPlaceholder = new mySimpleClass("some label", name, "some value")

    const registration = new Registry()
    const extractor = new Extractor(registration)

    registration.registerPlaceholder(myPlaceholder)

    const res = extractor.extract(placeholder)

    if (attr) {
      expect(res[0][0].getAttributes()).toStrictEqual(attr)
    }

    expect(res[0][0]).toBeInstanceOf(ContentPlaceholder)
    expect(res[1][0]).toBeInstanceOf(AbstractPlaceholder)
  })

  test.each(tests)(
    "should return instance of placeholder without register it",
    ({ placeholder, attr }) => {
      const extractor = new Extractor()

      const res = extractor.extractIgnoringRegistry(placeholder)

      if (attr) {
        expect(res[0][0].getAttributes()).toStrictEqual(attr)
      }

      expect(res[0][0]).toBeInstanceOf(ContentPlaceholder)
    },
  )
})
