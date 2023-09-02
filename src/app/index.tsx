import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { queryClient } from "./lib/queryClient";
import { persistor, store } from "./redux/dashboard/store";

import Dashboard from "./view/Dashboard";

import "../styles/styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <Dashboard />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
