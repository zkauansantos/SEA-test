import CommentBlock from "./components/CommentBlock";
import Sidebar from "./components/Sidebar";

import "../styles/styles.css";
import EmployeesList from "./components/EmployeesList";
import MultiStep from "./components/MultiStep";
import Button from "./components/Button";
import { useState } from "react";
import Form from "./components/Form";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

export default function App() {
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='pr-[34px] pl-[92px] flex flex-col items-start justify-start h-full'>
        <Sidebar />

        <div className='h-full max-h-[158px] py-6 mt-[33px] grid place-items-center w-full bg-white rounded-[20px] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] relative'>
          <MultiStep />
        </div>

        <div className='mt-8 flex-1 w-full flex items-baseline gap-[34px]'>
          <CommentBlock />
          {!formIsVisible && (
            <EmployeesList onShowForm={() => setFormIsVisible(true)} />
          )}
          {formIsVisible && (
            <Form onBackDashBoard={() => setFormIsVisible(false)} />
          )}
        </div>

        {!formIsVisible && (
          <div className='w-full flex justify-end pb-2 mt-1'>
            <Button className='max-w-[194px] bg-blue-theme text-white text-xs font-bold hover:bg-blue-theme/80'>
              Próximo passo
            </Button>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
}
