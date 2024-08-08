"use client";

import { KTCard } from "@/components/Metronic/helpers";
import { KTTabs } from "@/components/Metronic/helpers/components/KTTabs";
import { Loading } from "@/components/Metronic/helpers/components/Loading";
import Root from "@/components/Metronic/layout/Root";
import { projectId } from "@/utils/mock";
import clsx from "clsx";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ProjectSettingsContext } from "./Context";
import { ContextData, ContextDataItem } from "./types";
import { componentsTabs, tabs } from "./utils";

const System: FC = () => {
  const [data, setData] = useState<ContextData | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`/api/projectSettings?id=${projectId}`);
        const { data } = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdateSettings = useCallback(
    async (settings: ContextDataItem) => {
      try {
        const projectSettings = {
          ...data,
          ...settings,
        } as ContextData;

        setIsFetching(true);
        const response = await fetch("/api/projectSettings", {
          method: "PUT",
          body: JSON.stringify({
            projectSettings,
            id: projectId,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to update settings");
        }

        setData(projectSettings);
      } catch (e: unknown) {
        const message = e instanceof Error ? e.message : "Failed to update settings";
        alert(message);
      } finally {
        setIsFetching(false);
      }
    },
    [data],
  );

  const contextValue = useMemo(
    () => ({ data, updateSettings: handleUpdateSettings, isFetching }),
    [data, handleUpdateSettings, isFetching],
  );

  return (
    <Root>
      <ProjectSettingsContext.Provider value={contextValue}>
        <KTCard className="d-flex w-75 flex-column gap-10 align-self-center px-5 py-5">
          <KTTabs tabs={tabs} className="nav-line-tabs-2x border-0 fs-4 fw-semibold" />
          <div className="tab-content position-relative">
            {!data && isFetching ? (
              <Loading />
            ) : (
              componentsTabs.map(({ id, Component }, index) => (
                <div
                  key={id}
                  id={id}
                  className={clsx("tab-pane", {
                    active: index === 0,
                  })}
                >
                  <Component />
                </div>
              ))
            )}
          </div>
        </KTCard>
      </ProjectSettingsContext.Provider>
    </Root>
  );
};

export default System;
