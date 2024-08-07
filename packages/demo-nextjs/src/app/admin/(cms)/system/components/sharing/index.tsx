import React, { ChangeEvent, useCallback, useState } from "react";
import { KTSwitch } from "@/components/Metronic/helpers/components/KTSwitch";
import { KTCard } from "@/components/Metronic/helpers";

export const Sharing = () => {
  const [title, setTitle] = useState("");
  const [seoTitleVisibility, setSeoTitleVisibility] = useState(false);
  const [seoDescriptionVisibility, setSeoDescriptionVisibility] = useState(false);
  const [description, setDescription] = useState("");

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeTitleVisibility = useCallback(() => {
    setSeoTitleVisibility((prev) => !prev);
  }, []);

  const handleChangeDescriptionVisibility = useCallback(() => {
    setSeoDescriptionVisibility((prev) => !prev);
  }, []);

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value),
    [],
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
          className={`form-control h-16 px-6 py-3 fs-6 fw-bold ${seoTitleVisibility ? "opacity-50 cursor-not-allowed" : ""}`}
          placeholder="Enter the Social Sharing Title"
        />
        <div className="d-flex align-items-center">
          <KTSwitch value={seoTitleVisibility} onChange={handleChangeTitleVisibility} />
          <span>Set the same as SEO Title</span>
        </div>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Social Sharing Description</label>
        <textarea
          value={description}
          onChange={handleChangeDescription}
          placeholder="Enter the Social Sharing Description"
          className={`form-control resize-none h-40 px-6 py-6 fs-6 fw-bold ${seoDescriptionVisibility ? "opacity-50 cursor-not-allowed" : ""}`}
        />
        <div className="d-flex align-items-center">
          <KTSwitch value={seoDescriptionVisibility} onChange={handleChangeDescriptionVisibility} />
          <span>Set the same as SEO Title</span>
        </div>
      </div>
      <KTCard className="d-flex w-100 flex-column gap-10 align-self-center px-5 py-5">
        <a href="https://blueberry20992034.temporary-demo.site">https://blueberry20992034.temporary-demo.site</a>
        <h1>Social Sharing Title</h1>
        <span>Social Sharing Description</span>
        </KTCard>
    </div>
  );
};
