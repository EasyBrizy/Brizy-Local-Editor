"use client";

import { getProjectSettings, updateProjectSettings } from "@/app/admin/(cms)/system/core/requests";
import { KTTabs } from "@/components/Metronic/helpers/components/KTTabs";
import { Content } from "@/components/Metronic/layout/components/content";
import { ProjectSettings } from "@/lib/db/types";
import { projectId } from "@/utils/mock";
import React, { FC, useCallback, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Header, ProjectCardBody, TabContent } from "../layout";
import { ProjectSettingsContext } from "./Context";
import { ContextDataItem } from "./types";
import { componentsTabs, tabs } from "./utils";

const System: FC = () => {
  const queryClient = useQueryClient();

  const { data = null, isFetching } = useQuery<ProjectSettings>(["projectSettings", projectId], () =>
    getProjectSettings(projectId),
  );

  const mutation = useMutation(
    async (settings: ContextDataItem) => updateProjectSettings(projectId, { ...data, ...settings }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["projectSettings", projectId]);
      },
      onError: (error: Error) => {
        alert(error.message);
      },
    },
  );

  const handleUpdateSettings = useCallback(
    (settings: ContextDataItem) => {
      mutation.mutate(settings);
    },
    [mutation],
  );

  const contextValue = useMemo(
    () => ({
      data,
      updateSettings: handleUpdateSettings,
      isLoading: mutation.isLoading,
    }),
    [data, handleUpdateSettings, mutation.isLoading],
  );

  return (
    <ProjectSettingsContext.Provider value={contextValue}>
      <Header />
      <Content>
        <ProjectCardBody>
          <KTTabs tabs={tabs} className="nav-line-tabs-2x border-0 fs-4 fw-semibold" />
          <TabContent isFetching={isFetching} data={data} componentsTabs={componentsTabs} />
        </ProjectCardBody>
      </Content>
    </ProjectSettingsContext.Provider>
  );
};

export default System;
