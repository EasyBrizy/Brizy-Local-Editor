import React, { ChangeEvent, FC, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ProjectSettingsContext } from "../../Context";
import { Description } from "../description";
import { UpdateButton } from "../updateButton";
import { sanitizeCSS, sanitizeHTML } from "./utils";

export const Code: FC = () => {
  const { data, isFetching, updateSettings } = useContext(ProjectSettingsContext);
  const [customCss, setCustomCss] = useState("");
  const [codeInjectionFooter, setCodeInjectionFooter] = useState("");
  const [codeInjectionHeader, setCodeInjectionHeader] = useState("");

  const { code } = data || {};

  useEffect(() => {
    if (code) {
      const { customCss, codeInjectionFooter, codeInjectionHeader } = code;

      setCustomCss(customCss);
      setCodeInjectionFooter(codeInjectionFooter);
      setCodeInjectionHeader(codeInjectionHeader);
    }
  }, [code]);

  const needDisableButton = useMemo(() => {
    const areValuesEqual =
      customCss === code?.customCss &&
      codeInjectionFooter === code?.codeInjectionFooter &&
      codeInjectionHeader === code?.codeInjectionHeader;
    return isFetching || areValuesEqual;
  }, [customCss, codeInjectionFooter, isFetching, codeInjectionHeader, code]);

  const handleChangeCustomCss = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setCustomCss(sanitizeCSS(e.target.value)),
    [],
  );

  const handleChangeCodeInjectionHeader = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setCodeInjectionHeader(sanitizeHTML(e.target.value)),
    [],
  );

  const handleChangeCodeInjectionFooter = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setCodeInjectionFooter(sanitizeHTML(e.target.value)),
    [],
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
        <Description>The CSS code entered above will affect the styling of the entire site.</Description>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Code injection &gt; Header</label>
        <textarea
          value={codeInjectionHeader}
          onChange={handleChangeCodeInjectionHeader}
          className="form-control resize-none h-60 px-6 py-6 fs-6 fw-bold"
        />
        <Description>
          Enter code that will be injected into the &apos;head&apos; tag on every page of your site.
        </Description>
      </div>
      <div className="d-flex flex-column gap-2">
        <label className="fw-bold">Code injection &gt; Footer</label>
        <textarea
          value={codeInjectionFooter}
          onChange={handleChangeCodeInjectionFooter}
          className="form-control resize-none h-60 px-6 py-6 fs-6 fw-bold"
        />
        <Description>
          Enter code that will be injected into the &apos;footer&apos; tag on every page of your site.
        </Description>
      </div>
      <UpdateButton isFetching={isFetching} disabled={needDisableButton} onClick={handleUpdateSettings} />
    </div>
  );
};
