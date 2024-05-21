import Minimist from "minimist";

const argv_ = Minimist(process.argv.slice(2));
const SERVER = argv_["server"] ?? true;
const WATCH = argv_["watch"] ?? true;

export interface Args {
  server: boolean;
  watch: boolean;
}

export function getArgs(): Args {
  return {
    server: SERVER,
    watch: WATCH,
  };
}
