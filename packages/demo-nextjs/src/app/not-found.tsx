import { NotFound as NotFoundComponent } from "@/components/Preview/NotFound";
import { getItem } from "@/lib/db/item/getItem";
import { getProject } from "@/lib/db/project/getProject";
import { CollectionTypes } from "@/lib/db/types";
import { convertItem } from "@/utils/converters/item";
import { convertProject } from "@/utils/converters/project";
import { projectId } from "@/utils/mock";

export default async function NotFound() {
  const project = await getProject(projectId);
  const item = await getItem({
    type: CollectionTypes.system,
    item: "404",
  });

  return <NotFoundComponent project={convertProject(project).data} item={convertItem(item).data} />;
}
