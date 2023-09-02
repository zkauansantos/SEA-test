export const types = {
  SET_COMPLETED_STAGE: "SET_COMPLETED_STAGE",
  SET_FORM_VISIBLE: "SET_FORM_VISIBLE",
  SET_FORM_HIDE: "SET_FORM_HIDE",
  SET_CURRENT_STAGE: "SET_CURRENT_STAGE",
  RESET: "RESET",
};

export type Action = {
  type: keyof typeof types;
  payload: {
    completedStage: boolean;
    formVisible: boolean;
    currentStage: number;
  };
};
