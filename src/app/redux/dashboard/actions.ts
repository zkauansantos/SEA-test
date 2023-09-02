import { types } from "./types";

export function showForm() {
  return {
    type: types.SET_FORM_VISIBLE,
    payload: true,
  };
}

export function hideForm() {
  return {
    type: types.SET_FORM_HIDE,
    payload: false,
  };
}

export function setCompletedStage(value: boolean) {
  return {
    type: types.SET_COMPLETED_STAGE,
    payload: value,
  };
}
