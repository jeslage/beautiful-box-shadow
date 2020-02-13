import lzString from "lz-string";

export const encodeConfig = obj =>
  lzString.compressToEncodedURIComponent(JSON.stringify(obj));

export const decodeConfig = obj =>
  JSON.parse(lzString.decompressFromEncodedURIComponent(obj));
