export const types = {
  SET_COMPLETED_STAGE: "SET_COMPLETED_STAGE",
  SET_FORM_VISIBLE: "SET_FORM_VISIBLE",
  SET_FORM_HIDE: "SET_FORM_HIDE",
};

export type Action = {
  type: keyof typeof types;
  payload: {
    completedsStages: number[];
    formVisible: boolean;
  };
};
