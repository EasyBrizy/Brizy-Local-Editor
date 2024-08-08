import { UpdateButton } from "@/app/admin/(cms)/system/components/updateButton";
import { KTCard } from "@/components/Metronic/helpers";
import { KTSwitch } from "@/components/Metronic/helpers/components/KTSwitch";
import React, { ChangeEvent, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ProjectSettingsContext } from "../../Context";

export const Sharing = () => {
  const { data, isFetching, updateSettings } = useContext(ProjectSettingsContext);
  const [title, setTitle] = useState("");
  const [preserveSeoTitle, setPreserveSeoTitle] = useState(false);
  const [preserveSeoDescription, setPreserveSeoDescription] = useState(false);
  const [description, setDescription] = useState("");

  const { sharing } = data || {};

  useEffect(() => {
    if (sharing) {
      setTitle(sharing.title);
      setDescription(sharing.description);
      setPreserveSeoTitle(sharing.preserveSeoTitle);
      setPreserveSeoDescription(sharing.preserveSeoDescription);
    }
  }, [sharing]);

  useEffect(() => {
    if (preserveSeoTitle) {
      setTitle(data?.seo.title ?? "");
    }

    if (preserveSeoDescription) {
      setDescription(data?.seo.description ?? "");
    }
  }, [preserveSeoTitle, preserveSeoDescription, data]);

  const needDisableButton = useMemo(() => {
    const areValuesEqual = title === sharing?.title && description === sharing?.description;
    return !title || isFetching || areValuesEqual;
  }, [title, description, isFetching, sharing]);

  const { sharingTitle, sharingDescription } = useMemo(
    () => ({
      sharingTitle: title || "Social Sharing Title",
      sharingDescription: description || "Social Sharing Description",
    }),
    [title, description],
  );

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeTitleVisibility = useCallback(() => {
    const newValue = !preserveSeoTitle;

    if (!newValue) {
      // Reset title when the switch is turned off
      setTitle("");
    }

    setPreserveSeoTitle(newValue);
  }, [preserveSeoTitle]);

  const handleChangeDescriptionVisibility = useCallback(() => {
    const newValue = !preserveSeoDescription;

    if (!newValue) {
      // Reset description when the switch is turned off
      setDescription("");
    }

    setPreserveSeoDescription(newValue);
  }, [preserveSeoDescription]);

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value),
    [],
  );

  const handleUpdateSettings = useCallback(
    () => updateSettings({ sharing: { title, description, preserveSeoTitle, preserveSeoDescription } }),
    [title, description, preserveSeoTitle, preserveSeoDescription, updateSettings],
  );

  return (
    <div className="d-flex flex-column gap-10">
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Information</label>
        <span className="fs-7">
          When sharing your pages on social networks, we'll use this content to display in links.
        </span>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Sharing Title</label>
        <input
          value={title}
          onChange={handleChangeTitle}
          className={`form-control h-16 px-6 py-3 fs-6 fw-bold ${
            preserveSeoTitle ? "opacity-50 pointer-events-none" : ""
          }`}
          placeholder="Enter the Social Sharing Title"
        />
        <div className="d-flex align-items-center">
          <KTSwitch value={preserveSeoTitle} onChange={handleChangeTitleVisibility} />
          <span>Set the same as SEO Title</span>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Sharing Description</label>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          placeholder="Enter the Social Sharing Description"
          className={`form-control resize-none h-40 px-6 py-6 fs-6 fw-bold ${
            preserveSeoDescription ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <div className="d-flex align-items-center">
          <KTSwitch value={preserveSeoDescription} onChange={handleChangeDescriptionVisibility} />
          <span>Set the same as SEO Title</span>
        </div>
      </div>
      <KTCard className="d-flex w-100 flex-column gap-10 align-self-center px-5 py-5">
        <a href="https://blueberry20992034.temporary-demo.site">https://blueberry20992034.temporary-demo.site</a>
        <h1>{sharingTitle}</h1>
        <span>{sharingDescription}</span>
      </KTCard>
      <UpdateButton isFetching={isFetching} onClick={handleUpdateSettings} disabled={needDisableButton} />
    </div>
  );
};
