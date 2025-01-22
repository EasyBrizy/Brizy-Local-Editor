import { KTSwitch } from "@/components/Metronic/helpers/components/KTSwitch";
import React, { ChangeEvent, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Description, UpdateButton } from "../commons";
import { ProjectSettingsContext } from "../core/Context";

export const Sharing = () => {
  const { data, isLoading, updateSettings } = useContext(ProjectSettingsContext);
  const [title, setTitle] = useState("");
  const [preserveSeoTitle, setPreserveSeoTitle] = useState(false);
  const [preserveSeoDescription, setPreserveSeoDescription] = useState(false);
  const [description, setDescription] = useState("");

  const { sharing } = data || {};

  useEffect(() => {
    if (sharing) {
      const { title, description, preserveSeoTitle, preserveSeoDescription } = sharing;

      if (title) {
        setTitle(title);
      }

      if (description) {
        setDescription(description);
      }

      if (preserveSeoTitle !== undefined) {
        setPreserveSeoTitle(preserveSeoTitle);
      }

      if (preserveSeoDescription !== undefined) {
        setPreserveSeoDescription(preserveSeoDescription);
      }
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
    return !title || isLoading || areValuesEqual;
  }, [title, description, isLoading, sharing]);

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

  const handleUpdateSettings = useCallback(() => {
    const { seo } = data || {};

    const newTitle = preserveSeoTitle ? seo?.title ?? "" : title.trim();
    const newDescription = preserveSeoDescription ? seo?.description ?? "" : description.trim();

    updateSettings({
      sharing: { title: newTitle, description: newDescription, preserveSeoTitle, preserveSeoDescription },
    });
  }, [title, description, preserveSeoTitle, preserveSeoDescription, updateSettings, data]);

  return (
    <div className="d-flex flex-column gap-10">
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Information</label>
        <Description>
          When sharing your pages on social networks, we&apos;ll use this content to display in links.
        </Description>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Sharing Title</label>
        <input
          value={title}
          onChange={handleChangeTitle}
          className="form-control h-16 px-6 py-3 fs-6 fw-bold w-75"
          placeholder="Enter the Social Sharing Title"
          disabled={preserveSeoTitle}
        />
        <div className="d-flex align-items-center">
          <KTSwitch value={preserveSeoTitle} onChange={handleChangeTitleVisibility} />
          <Description>Set the same as SEO Title</Description>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Sharing Description</label>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          placeholder="Enter the Social Sharing Description"
          className="form-control resize-none h-40 px-6 py-6 fs-6 fw-bold w-75"
          disabled={preserveSeoDescription}
        />
        <div className="d-flex align-items-center">
          <KTSwitch value={preserveSeoDescription} onChange={handleChangeDescriptionVisibility} />
          <Description>Set the same as SEO Description</Description>
        </div>
      </div>

      <UpdateButton isFetching={isLoading} onClick={handleUpdateSettings} disabled={needDisableButton} />
    </div>
  );
};
