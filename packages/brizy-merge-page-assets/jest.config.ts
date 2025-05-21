import type { Config } from "jest";

const config: Config = {
  testEnvironment: "node",
  transform: {
    "^.+.ts$": ["ts-jest", {}],
  },
};

export default config;
