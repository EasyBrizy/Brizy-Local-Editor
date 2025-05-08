import mimes from "./mimes.json";
//#region exact like in builder

enum TypesOfExtensions {
  Image = "image",
  Video = "video",
  Audio = "audio",
}

const isTypeOfExtension = (type: string): type is TypesOfExtensions =>
  Object.values(TypesOfExtensions).includes(type as TypesOfExtensions);

const getAllMimesOfType = (type: TypesOfExtensions): string[] =>
  Object.values(mimes).reduce<string[]>((acc, value) => {
    const result = value.filter((i) => i.includes(type));
    return result.length ? [...acc, ...result] : acc;
  }, []);
const getAllMimes = (): string[] => Object.values(mimes).flat();

function isT(v: unknown): v is unknown {
  return typeof v !== "undefined" && v !== null;
}

const fromExtensionsToMimeTypes = (extensions: string[]): string[] =>
  extensions.length
    ? extensions
        .reduce<string[]>((acc, i) => {
          if (i.includes("*")) {
            const type = i.split("/")[0];
            return isTypeOfExtension(type) ? [...acc, ...getAllMimesOfType(type)] : acc;
          } else {
            const key = i.replace(/\./g, "") as keyof typeof mimes;
            return [...acc, ...mimes[key]];
          }
        }, [])
        .filter(isT)
    : getAllMimes();

//#endregion
export const getAcceptableTypes = (acceptedExtensions: string[]): string[] =>
  fromExtensionsToMimeTypes(acceptedExtensions).filter(isT);
