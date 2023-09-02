import { Action, types } from "./types";

const INITIAL_STATE = {
  completedStage: false,
  formVisible: false,
};

export default function reducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case types.SET_COMPLETED_STAGE:
      return {
        ...state,
        completedStage: action.payload,
      };
    case types.SET_FORM_VISIBLE:
      return {
        ...state,
        formVisible: action.payload,
      };
    case types.SET_FORM_HIDE:
      return {
        ...state,
        formVisible: action.payload,
      };
    default:
      return state;
  }
}
