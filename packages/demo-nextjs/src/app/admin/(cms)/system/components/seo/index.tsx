import { UpdateButton } from "@/app/admin/(cms)/system/components/updateButton";
import { KTSwitch } from "@/components/Metronic/helpers/components/KTSwitch";
import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ProjectSettingsContext } from "../../Context";
import { Description } from "../decsription";

export const Seo: FC = () => {
  const { data, updateSettings, isFetching } = useContext(ProjectSettingsContext);
  const { seo } = data || {};

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(true);

  useEffect(() => {
    if (seo) {
      setTitle(seo.title);
      setDescription(seo.description);
      setSearchVisibility(seo.searchVisibility);
    }
  }, [seo]);

  const needDisableButton = useMemo(() => {
    const areValuesEqual =
      title === seo?.title && description === seo?.description && searchVisibility === seo?.searchVisibility;
    return isFetching || areValuesEqual;
  }, [seo, title, description, searchVisibility, isFetching]);

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value),
    [],
  );

  const handleChangeSearchVisibility = useCallback(() => {
    setSearchVisibility((prev) => !prev);
  }, []);

  const handleSaveChanges = useCallback(
    () => updateSettings({ seo: { title, description, searchVisibility } }),
    [title, description, searchVisibility, updateSettings],
  );

  return (
    <div className="d-flex flex-column gap-10">
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Site Title</label>
        <input
          value={title}
          onChange={handleChangeTitle}
          className="form-control h-16 px-6 py-3 fs-6 fw-bold"
          placeholder="Enter the site title"
        />
        <Description title="The site title is adding SEO benefits (recommended length 50-70 characters)"/>
        {!title.length && <span className="fs-7 fw-bold text-red-500">Title is required</span>}
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Site Description</label>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          placeholder="Enter the site description"
          className="form-control resize-none h-40 px-6 py-6 fs-6 fw-bold"
        />
        <Description title="The description is used as metadata for SEO (recommended length is 150-160 characters)" />
      </div>
      <div className="d-flex flex-column gap-3">
        <label className="fw-bold">Search Engine Visibility</label>
        <KTSwitch value={searchVisibility} onChange={handleChangeSearchVisibility} />
        <Description title="If set to ON, your site will show up in search results. Turn OFF to discourage search engines from indexing
          the site." />
      </div>
      <UpdateButton isFetching={isFetching} disabled={needDisableButton} onClick={handleSaveChanges} />
    </div>
  );
};
