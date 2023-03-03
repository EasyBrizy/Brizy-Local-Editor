import { Action, State } from "./types";

const noop = () => {};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "update": {
      return {
        ...state,
        output: action.data,
      };
    }
    case "modal": {
      if (state.modal.opened) {
        return state;
      }
      return {
        ...state,
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
        modal: {
          opened: false,
          resolve: noop,
          reject: noop,
        },
      };
    }
  }
}
