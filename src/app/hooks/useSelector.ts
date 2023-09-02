import {
  useSelector as useSelectorRedux,
  TypedUseSelectorHook,
} from "react-redux";

type RootState = {
  dashboard: {
    completedStage: boolean;
    formVisible: boolean;
    currentStage: number;
  };
};

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
