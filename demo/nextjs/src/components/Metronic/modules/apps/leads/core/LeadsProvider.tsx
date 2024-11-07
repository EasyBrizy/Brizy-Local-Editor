import { WithChildren, initialQueryState, stringifyRequestQuery } from "@/components/Metronic/helpers";
import { useQueryRequest } from "@/components/Metronic/modules/apps/collections/core/QueryRequestProvider";
import { projectId } from "@/utils/mock";
import { FC, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { LeadsContext } from "./LeadsContext";
import { getLeads } from "./_requests";
import { LeadsResponse } from "./types";

export const LeadsProvider: FC<WithChildren> = ({ children }) => {
  const [data, setData] = useState<LeadsResponse>({ leads: [], pagination: initialQueryState });
  const { state } = useQueryRequest();

  const getQuery = useCallback(() => stringifyRequestQuery({ ...state, project_id: `${projectId}` }), [state]);

  const [query, setQuery] = useState(getQuery);

  useEffect(() => {
    if (query !== getQuery()) {
      setQuery(getQuery());
    }
  }, [query, getQuery]);

  const { isLoading } = useQuery(["leads", query], () => getLeads(query), {
    onSuccess: (response) => {
      const { data, payload } = response;

      setData({ leads: data, pagination: payload.pagination });
    },
    cacheTime: 0,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const contextValue = {
    data,
    isLoading,
    query,
  };

  return <LeadsContext.Provider value={contextValue}>{children}</LeadsContext.Provider>;
};
