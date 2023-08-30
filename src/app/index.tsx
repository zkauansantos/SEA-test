import CommentBlock from "./components/CommentBlock";
import Sidebar from "./components/Sidebar";

import "../styles/styles.css";
import EmployeesList from "./components/EmployeesList";
import MultiStep from "./components/MultiStep";

export default function App() {
  return (
    <div className='pr-[34px] pl-[92px] flex flex-col items-center justify-center h-full gap-8'>
      <Sidebar />

      <div className='h-full max-h-[158px] mt-[33px] grid place-items-center w-full bg-white rounded-[20px] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]'>
        <MultiStep />
      </div>

      <div className='max-h-[484px] h-full w-full flex items-center gap-[34px] mb-[59px]'>
        <CommentBlock />
        <EmployeesList />
      </div>
    </div>
  );
}
