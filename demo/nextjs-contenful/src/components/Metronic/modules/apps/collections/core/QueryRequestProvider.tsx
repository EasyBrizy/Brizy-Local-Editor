import { FC, createContext, useContext, useState } from "react";
import { QueryRequestContextProps, QueryState, WithChildren, initialQueryRequest } from "../../../../helpers";

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest);

const QueryRequestProvider: FC<WithChildren> = ({ children }) => {
  const [state, setState] = useState<QueryState>(initialQueryRequest.state);

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = { ...state, ...updates } as QueryState;
    setState(updatedState);
  };

  return <QueryRequestContext.Provider value={{ state, updateState }}>{children}</QueryRequestContext.Provider>;
};

const useQueryRequest = () => useContext(QueryRequestContext);
export { QueryRequestProvider, useQueryRequest };
