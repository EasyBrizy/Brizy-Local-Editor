import { getAssets } from "@/utils";
import { ItemDataParsed } from "@/utils/converters/item";
import { ProjectDataParsed } from "@/utils/converters/project";
import { BaseAsset } from "@brizy/merge-page-assets";
import { isT } from "fp-utilities";
import React, { Fragment, useMemo } from "react";

type Props = {
  project: ProjectDataParsed["data"];
  item: ItemDataParsed["data"];
};

export function NotFound(props: Props) {
  const project = useMemo(() => props.project.compiled, [props.project]);
  const item = useMemo(() => props.item.compiled, [props.item]);
  const projectStyles = useMemo(() => project?.styles ?? [], [project]);
  const styles = useMemo(() => [item?.assets?.freeStyles, item?.assets?.proStyles].filter(isT), [item]);

  const projectStylesAssets = useMemo(() => projectStyles.map((asset) => new BaseAsset(asset)), [projectStyles]);

  const stylesElement = useMemo(
    () =>
      getAssets(styles, "css", projectStylesAssets).map((styleElement, i) => (
        <Fragment key={i}>{styleElement}</Fragment>
      )),
    [styles, projectStylesAssets],
  );

  return (
    <>
      {stylesElement}
      {item?.html ? <div dangerouslySetInnerHTML={{ __html: item.html }} /> : <h1>Not found</h1>}
    </>
  );
}
