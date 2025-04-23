export const capitalize = (s: string): string => s && s[0].toUpperCase() + s.slice(1);

/**
 * Capitalize word depending on prefix
 * - If prefix is empty, do not capitalize
 * - If prefix is not empty capitalize word
 *
 * @param {string} p
 * @param {string} s
 * @returns {string}
 */
export const capByPrefix = (p: string, s: string): string => (p === "" ? s : p + capitalize(s));

/**
 * Convert an array of strings in camelCase style string
 *
 * @param {string[]} strings
 * @returns {string}
 */
export const camelCase = (strings: Array<string>): string => strings.reduce(capByPrefix, "");
