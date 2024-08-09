import DOMPurify from "dompurify";

export const sanitizeHTML = (html: string) => DOMPurify.sanitize(html);
export const sanitizeCSS = (css: string) => css.replace(/expression|javascript:|url\(/gi, "");
