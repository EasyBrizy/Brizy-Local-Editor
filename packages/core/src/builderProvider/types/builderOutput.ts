import { BuilderModes } from "@/actions/init";
import { Asset, ScriptsFree, ScriptsPro, StylesFree, StylesPro } from "@/types/common";
import { Page } from "@/types/page";
import { Project } from "@/types/project";

export type Assets = {
  freeStyles: StylesFree;
  freeScripts: ScriptsFree;
  proStyles?: StylesPro;
  proScripts?: ScriptsPro;
};

type JsonOutput = {
  html: string;
  assets: Assets;
};

type Output = JsonOutput;

//#region Project

interface ProjectJsonOutput {
  styles: Array<Asset>;
}

type ProjectOutput = ProjectJsonOutput;

export interface PublishedProject extends Project {
  compiled?: ProjectOutput;
}

//#endregion

//#region Page

export type PublishedBlock = {
  id: string;
  html: "";
};

export type DraftBlock = Output & {
  id: string;
};

export type BlockOutput = PublishedBlock | DraftBlock;

export type PageCompiled = {
  rootClassNames?: Array<string>;
  rootAttributes?: Record<string, string | boolean>;
  blocks: Array<BlockOutput>;
};
export type PublishedPage = Page & {
  compiled?: PageCompiled;
};

//#endregion

export interface BuilderPublishedData {
  mode: BuilderModes;
  projectData?: PublishedProject;
  pageData?: PublishedPage;
  error?: string;
}

export interface BuilderCompiledData {
  mode: BuilderModes;
  projectData: PublishedProject;
  pageData: PublishedPage;
  error?: string;
}
