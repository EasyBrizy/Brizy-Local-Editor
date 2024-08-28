import { Project } from "@/lib/db/types";
import { RJSON } from "@/utils/rjson";

export const toProjectConvertor = (item: Project): Project => ({
  id: item.id,
  data: JSON.stringify(RJSON.unpack(JSON.parse(item.data))),
  settings: item.settings,
});

export const toCollectionConvertor = (data: Partial<Project>): Partial<Project> => ({
  ...(data.id && {
    id: data.id,
  }),
  ...(data.data && {
    data: JSON.stringify(RJSON.pack(JSON.parse(data.data))),
  }),
  ...(data.settings && {
    settings: data.settings,
  }),
});
