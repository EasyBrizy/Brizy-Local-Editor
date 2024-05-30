import { Action, State } from "./types";

const noop = () => {};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "update": {
      return {
        ...state,
        loading: false,
        output: action.data,
      };
    }
    case "modal": {
      if (state.modal.opened) {
        return state;
      }
      return {
        ...state,
        loading: false,
        modal: {
          opened: true,
          resolve: action.res,
          reject: action.rej,
        },
      };
    }
    case "resolvePlaceholder": {
      state.modal.resolve({
        label: action.data,
        placeholder: "{{test_placeholder}}",
      });

      return {
        ...state,
        loading: false,
        modal: {
          opened: false,
          resolve: noop,
          reject: noop,
        },
      };
    }
    case "rejectPlaceholder": {
      state.modal.reject(action.data);

      return {
        ...state,
        loading: false,
        modal: {
          opened: false,
          resolve: noop,
          reject: noop,
        },
      };
    }
    case "loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "error": {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
  }
}
