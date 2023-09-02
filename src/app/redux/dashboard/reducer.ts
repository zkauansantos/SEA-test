import { Action, types } from "./types";

const INITIAL_STATE = {
  completedStage: false,
  formVisible: false,
  currentStage: 1,
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
    case types.SET_CURRENT_STAGE:
      return {
        ...state,
        currentStage: action.payload,
      };
    case types.RESET: 
      return INITIAL_STATE;
    default:
      return state;
  }
}
