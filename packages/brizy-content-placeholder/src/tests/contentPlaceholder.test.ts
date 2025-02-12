import { ContentPlaceholder } from "../modules/ContentPlaceholder.js"

describe("Content Placeholder", () => {
  const attributes = { id: "123", typeId: "456" }
  const createContentPlaceholder = () => {
    return new ContentPlaceholder("name", "placeholder", attributes, "content")
  }

  test("Should create the placeholder ", () => {
    const placeholder = createContentPlaceholder()

    expect(placeholder).toBeInstanceOf(ContentPlaceholder)
  })

  test("should get the ID attribute", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getId()).toBe("123")
  })

  test("should get the Entity ID attribute", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getEntityId()).toBe("123")
  })

  test("should get the Entity Type attribute", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getEntityType()).toBe("456")
  })

  test("should get the UID", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getUid()).toBeDefined()
  })

  test("should set the UID", () => {
    const contentPlaceholder = createContentPlaceholder()
    const newUid = "new-uid"

    contentPlaceholder.setUid(newUid)

    expect(contentPlaceholder.getUid()).toBe(newUid)
  })

  test("should get the placeholder", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getPlaceholder()).toBe("placeholder")
  })

  test("should set the placeholder", () => {
    const contentPlaceholder = createContentPlaceholder()
    const newPlaceholder = "newPlaceholder"

    contentPlaceholder.setPlaceholder(newPlaceholder)

    expect(contentPlaceholder.getPlaceholder()).toBe(newPlaceholder)
  })

  test("should get the name", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getName()).toBe("name")
  })

  test("should set the name", () => {
    const contentPlaceholder = createContentPlaceholder()
    const newName = "newName"

    contentPlaceholder.setName(newName)

    expect(contentPlaceholder.getName()).toBe(newName)
  })

  test("should get the attributes", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getAttributes()).toEqual(attributes)
  })

  test("should set the attributes", () => {
    const contentPlaceholder = createContentPlaceholder()
    const newAttributes = { foo: "bar", author: "jedi" }

    contentPlaceholder.setAttributes(newAttributes)

    expect(contentPlaceholder.getAttributes()).toBe(newAttributes)
  })

  test("should get the content", () => {
    const contentPlaceholder = createContentPlaceholder()

    expect(contentPlaceholder.getContent()).toBe("content")
  })

  test("should set the content", () => {
    const contentPlaceholder = createContentPlaceholder()
    const newContent = "newContent"

    contentPlaceholder.setContent(newContent)

    expect(contentPlaceholder.getContent()).toBe(newContent)
  })

  test("should get an attribute", () => {
    const contentPlaceholder = createContentPlaceholder()

    const idAttribute = contentPlaceholder.getAttribute("id")
    const missingAttribute = contentPlaceholder.getAttribute("missingAttribute")

    expect(idAttribute).toBe("123")
    expect(missingAttribute).toBe(null)
  })

  test("should build a placeholder with content", () => {
    const contentPlaceholder = createContentPlaceholder()

    const placeholder = contentPlaceholder.buildPlaceholder()

    expect(placeholder).toBe(
      '{{name id="123" typeId="456"}}content{{end_name}}'
    )
  })

  test("should build a placeholder without content", () => {
    const contentPlaceholder = new ContentPlaceholder(
      "name",
      "placeholder",
      attributes
    )

    const placeholder = contentPlaceholder.buildPlaceholder()

    expect(placeholder).toBe('{{name id="123" typeId="456"}}')
  })

  test("should build an attribute string", () => {
    const contentPlaceholder = createContentPlaceholder()

    const attributeString = contentPlaceholder.buildAttributeString()

    expect(attributeString).toBe('id="123" typeId="456"')
  })
})
