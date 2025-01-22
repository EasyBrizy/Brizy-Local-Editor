import { KTSwitch } from "@/components/Metronic/helpers/components/KTSwitch";
import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Description, UpdateButton } from "../commons";
import { ProjectSettingsContext } from "../core/Context";

export const Seo: FC = () => {
  const { data, updateSettings, isLoading } = useContext(ProjectSettingsContext);
  const { seo } = data || {};

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(true);

  useEffect(() => {
    if (seo) {
      const { title, description, searchVisibility } = seo;

      if (title) {
        setTitle(title);
      }

      if (description) {
        setDescription(description);
      }

      if (searchVisibility !== undefined) {
        setSearchVisibility(searchVisibility);
      }
    }
  }, [seo]);

  const needDisableButton = useMemo(() => {
    const areValuesEqual =
      title === seo?.title && description === seo?.description && searchVisibility === seo?.searchVisibility;
    return !title || isLoading || areValuesEqual;
  }, [seo, title, description, searchVisibility, isLoading]);

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
    () => updateSettings({ seo: { title: title.trim(), description: description.trim(), searchVisibility } }),
    [title, description, searchVisibility, updateSettings],
  );

  return (
    <div className="d-flex flex-column gap-10">
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Site Title</label>
        <input
          value={title}
          onChange={handleChangeTitle}
          className="form-control h-16 px-6 py-3 fs-6 fw-bold w-75"
          placeholder="Enter the site title"
        />
        <Description>The site title is adding SEO benefits (recommended length 50-70 characters)</Description>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Site Description</label>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          placeholder="Enter the site description"
          className="form-control resize-none h-40 px-6 py-6 fs-6 fw-bold w-75"
        />
        <Description>
          The description is used as metadata for SEO (recommended length is 150-160 characters)
        </Description>
      </div>
      <div className="d-flex flex-column gap-3">
        <label className="fw-bold">Search Engine Visibility</label>
        <KTSwitch value={searchVisibility} onChange={handleChangeSearchVisibility} />
        <Description>
          If set to ON, your site will show up in search results. Turn OFF to discourage search engines from indexing
          the site.
        </Description>
      </div>
      <UpdateButton isFetching={isLoading} disabled={needDisableButton} onClick={handleSaveChanges} />
    </div>
  );
};
