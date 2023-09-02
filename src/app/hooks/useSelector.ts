import {
  useSelector as useSelectorRedux,
  TypedUseSelectorHook,
} from "react-redux";

type RootState = {
  dashboard: {
    completedStage: boolean;
    formVisible: boolean;
  };
};

export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRedux;
