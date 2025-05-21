import { BlockOutput, DraftBlock } from "../types/builderOutput";

export function isDraftBlock(b: BlockOutput): b is DraftBlock {
  return b.html !== "" && "assets" in b;
}
