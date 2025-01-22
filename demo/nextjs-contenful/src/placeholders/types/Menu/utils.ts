import { Obj, Str } from "@brizy/readers";
import { mPipe } from "fp-utilities";

export const readMenuItemId = mPipe(Obj.read, Obj.readKey("id"), Str.read);
