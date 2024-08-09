import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Description } from "../decsription";
import { UpdateButton } from "@/app/admin/(cms)/system/components/updateButton";
import { ProjectSettingsContext } from "../../Context";

export const Code: FC = () => {
  const { data, isFetching, updateSettings } = useContext(ProjectSettingsContext);
  const [customCss, setCustomCss] = useState("");
  const [codeInjectionFooter, setCodeInjectionFooter] = useState("");
  const [codeInjectionHeader, setCodeInjectionHeader] = useState("");

  const { code } = data || {};

  useEffect(() => {
    if (code) {
      setCustomCss(code.customCss);
      setCodeInjectionFooter(code.codeInjectionFooter);
      setCodeInjectionHeader(code.codeInjectionHeader);
    }
  }, [code]);



  const needDisableButton = useMemo(() => {
    const areValuesEqual = customCss === code?.customCss && codeInjectionFooter === code?.codeInjectionFooter && codeInjectionHeader === code?.codeInjectionHeader;
    return isFetching || areValuesEqual;
  }, [customCss, codeInjectionFooter, isFetching, codeInjectionHeader, code]);

  const handleChangeCustomCss = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setCustomCss(e.target.value),
    []
  );

  const handleChangeCodeInjectionFooter = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      setCodeInjectionFooter(e.target.value),
    []
  );

  const handleChangeCodeInjectionHeader = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      setCodeInjectionHeader(e.target.value),
    []
  );

  const handleUpdateSettings = useCallback(
    () => updateSettings({ code: { customCss, codeInjectionFooter, codeInjectionHeader } }),
    [customCss, codeInjectionFooter, codeInjectionHeader, updateSettings],
  );

  return (
    <div className="d-flex flex-column gap-10">
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Custom CSS</label>
        <textarea
          value={customCss}
          onChange={handleChangeCustomCss}
          className="form-control resize-none h-60 px-6 py-6 fs-6 fw-bold"
        />
        <Description title="The CSS code entered above will affect the styling of the entire site." />
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Code injection > Header</label>
        <textarea
          value={codeInjectionHeader}
          onChange={handleChangeCodeInjectionHeader}
          className="form-control resize-none h-60 px-6 py-6 fs-6 fw-bold"
        />
        <Description title="Enter code that will be injected into the 'head' tag on every page of your site." />
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Code injection > Footer</label>
        <textarea
          value={codeInjectionFooter}
          onChange={handleChangeCodeInjectionFooter}
          className="form-control resize-none h-60 px-6 py-6 fs-6 fw-bold"
        />
        <Description title="Enter code that will be injected into the 'footer' tag on every page of your site." />
      </div>
      <UpdateButton isFetching={isFetching} disabled={needDisableButton} onClick={handleUpdateSettings} />
    </div>
  );
};
