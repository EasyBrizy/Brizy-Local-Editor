import { NotFound as NotFoundComponent } from "@/components/Preview/NotFound";
import { CollectionTypes, getItem, getProject } from "@/lib/preview";
import { projectId } from "@/utils/mock";

export default async function NotFound() {
  const project = await getProject(projectId);
  const pageData = await getItem({ collection: CollectionTypes.System, item: "404" }).then(
    (document) => document.data.compiled,
  );

  return <NotFoundComponent project={project} pageData={pageData} />;
}
