import { ContextInterface } from "@brizy/content-placeholder";
import { CollectionContext } from "./CollectionContext";

export const isCollectionContext = (context: ContextInterface): context is CollectionContext =>
  context instanceof CollectionContext;
