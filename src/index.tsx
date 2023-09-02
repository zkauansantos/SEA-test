import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { queryClient } from "./app/lib/queryClient";
import { persistor, store } from "./app/redux/dashboard/store";

import Dashboard from "./app/view/Dashboard";

import "./styles/styles.css";

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
