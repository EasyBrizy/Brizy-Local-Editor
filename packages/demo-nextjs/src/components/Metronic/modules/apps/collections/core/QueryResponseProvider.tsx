/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useContext, useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import {
  PaginationState,
  QUERIES,
  WithChildren,
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  stringifyRequestQuery,
} from "../../../../helpers";
import { useQueryRequest } from "./QueryRequestProvider";
import { Collection } from "./_models";
import { getCollections } from "./_requests";

const QueryResponseContext = createResponseContext<Collection>(initialQueryResponse);

interface Props extends WithChildren {
  collection: string;
}

const QueryResponseProvider: FC<Props> = (props) => {
  const { collection, children } = props;
  const { state } = useQueryRequest();
  const withFilter = { ...state, collection };
  const [query, setQuery] = useState<string>(stringifyRequestQuery(withFilter));
  const updatedQuery = useMemo(() => stringifyRequestQuery(withFilter), [withFilter]);

  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery);
    }
  }, [updatedQuery]);

  const {
    isFetching,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.COLLECTIONS_LIST}-${query}`,
    () => {
      return getCollections(query);
    },
    {
      cacheTime: 0,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <QueryResponseContext.Provider value={{ isLoading: isFetching, refetch, response, collection, query }}>
      {children}
    </QueryResponseContext.Provider>
  );
};

const useQueryResponse = () => useContext(QueryResponseContext);

const useCollectionQuery = () => {
  const { response } = useQueryResponse();
  if (!response) {
    return [];
  }

  return response?.data || [];
};

const useQueryResponsePagination = () => {
  const defaultPaginationState: PaginationState = {
    links: [],
    ...initialQueryState,
  };

  const { response } = useQueryResponse();
  if (!response || !response.payload || !response.payload.pagination) {
    return defaultPaginationState;
  }

  return response.payload.pagination;
};

const useQueryResponseLoading = (): boolean => {
  const { isLoading } = useQueryResponse();
  return isLoading;
};

export {
  QueryResponseProvider,
  useQueryResponse,
  useCollectionQuery,
  useQueryResponsePagination,
  useQueryResponseLoading,
};
