import { KTSwitch } from "@/components/Metronic/helpers/components/KTSwitch";
import React, { ChangeEvent, FC, useCallback, useContext, useMemo, useState } from "react";
import { ProjectSettingsContext } from "../../Context";

const SavingIndicator = () => (
  <>
    Saving...
    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
  </>
);

export const Seo: FC = () => {
  const { data, updateSettings } = useContext(ProjectSettingsContext);
  const { seo } = data || {};

  const [title, setTitle] = useState(seo?.title ?? "");
  const [description, setDescription] = useState(seo?.description ?? "");
  const [searchVisibility, setSearchVisibility] = useState(seo?.searchVisibility ?? true);
  const [isFetching, setIsFetching] = useState(false);

  const needDisableButton = useMemo(() => {
    const areValuesEqual =
      title === seo?.title && description === seo?.description && searchVisibility === seo?.searchVisibility;
    return !title || isFetching || areValuesEqual;
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

  const handleSaveChanges = useCallback(async () => {
    setIsFetching(true);

    await updateSettings({ seo: { title, description, searchVisibility } });

    setIsFetching(false);
  }, [title, description, searchVisibility, updateSettings]);

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
        <span className="fs-7 text-gray-600 fw-bold">
          The site title is adding SEO benefits (recommended length 50-70 characters)
        </span>
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
        <span className="fs-7 text-gray-600 fw-bold">
          The description is used as metadata for SEO (recommended length is 150-160 characters)
        </span>
      </div>
      <div className="d-flex flex-column gap-3">
        <label className="fw-bold">Search Engine Visibility</label>
        <KTSwitch value={searchVisibility} onChange={handleChangeSearchVisibility} />
        <span className="fs-7 text-gray-600 fw-bold">
          If set to ON, your site will show up in search results. Turn OFF to discourage search engines from indexing
          the site.
        </span>
      </div>
      <button className="btn btn-primary w-fit" onClick={handleSaveChanges} disabled={needDisableButton}>
        {isFetching ? <SavingIndicator /> : "Save Changes"}
      </button>
    </div>
  );
};
