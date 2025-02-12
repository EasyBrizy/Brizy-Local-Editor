import type { PlaceholderInterface } from "../modules/PlaceholderInterface"
import { Registry } from "../modules/Registry.js"
import { jest } from "@jest/globals"

describe("Registry class", () => {
  let registry: Registry

  const commonValues = {
    getValue: jest.fn(),
    shouldFallbackValue: jest.fn(),
    getFallbackValue: jest.fn(),
    getConfigStructure: jest.fn(),
    getUid: jest.fn(),
    getLabel: jest.fn(),
    setLabel: jest.fn(),
    getPlaceholder: jest.fn(),
    setPlaceholder: jest.fn(),
    getAttributes: jest.fn(),
    getVaryAttributes: jest.fn(),
  }

  const placeholder1 = {
    support: (placeholderName: string): boolean => placeholderName === "test",
    ...commonValues,
  } as PlaceholderInterface

  const placeholder2 = {
    support: (placeholderName: string): boolean => placeholderName === "foo",
    ...commonValues,
  } as PlaceholderInterface

  beforeEach(() => {
    registry = new Registry()
  })

  test("should return array", () => {
    expect(registry.getPlaceholders()).toStrictEqual([])
  })

  test("should register a placeholder", () => {
    const placeholder = {
      support: jest.fn(),
      ...commonValues,
    } as PlaceholderInterface

    registry.registerPlaceholder(placeholder)

    expect(registry.getPlaceholders()).toContain(placeholder)
  })

  test("Should return the correct placeholder instance", () => {
    registry.registerPlaceholder(placeholder1)
    registry.registerPlaceholder(placeholder2)

    expect(registry.getPlaceholderSupportingName("test")).toBe(placeholder1)
    expect(registry.getPlaceholderSupportingName("foo")).toBe(placeholder2)
  })

  test("Should return all placeholders", () => {
    registry.registerPlaceholder(placeholder1)
    registry.registerPlaceholder(placeholder2)

    expect(registry.getPlaceholders()).toHaveLength(2)
    expect(registry.getPlaceholders()).toContain(placeholder1)
    expect(registry.getPlaceholders()).toContain(placeholder2)
  })
})
