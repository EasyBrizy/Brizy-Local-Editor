import type { Builder, Config as BuilderConfig } from "@builder/core/build/es/types/types";

export enum ActionKind {
  idle = "idle",
  init = "init",
  load = "load",
  ready = "ready",
  error = "error",
}

// An interface for our actions
export interface Action {
  type: ActionKind;
  error?: string;
}

// An interface for our state
export interface State {
  status: ActionKind;
  error?: string;
}

export interface _Config extends Omit<BuilderConfig, "container"> {}

export interface Config extends _Config {
  container: HTMLElement | null;
}

export type Instance = {
  save: VoidFunction;
};
