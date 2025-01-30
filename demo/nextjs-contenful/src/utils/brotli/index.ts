import zlib from "zlib";

// Used `brotliCompress` to address issues related to Contentful's maximum entry size limitation.

export function compressStringBrotli(input: string): string {
  const inputBuffer = Buffer.from(input);
  return zlib.brotliCompressSync(inputBuffer).toString("base64");
}

export function decompressStringBrotli(input: string): string {
  const inputBuffer = Buffer.from(input, "base64");
  const decompressedBuffer = zlib.brotliDecompressSync(inputBuffer);
  return decompressedBuffer.toString("utf8");
}
