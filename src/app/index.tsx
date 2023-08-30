import CommentBlock from "./components/CommentBlock";
import Sidebar from "./components/Sidebar";

import "../styles/styles.css";
import EmployeesList from "./components/EmployeesList";
import MultiStep from "./components/MultiStep";
import Form from "./components/Form";

export default function App() {
  return (
    <div className='pr-[34px] pl-[92px] flex flex-col items-start justify-start h-full gap-8'>
      <Sidebar />

      <div className='h-full max-h-[158px] py-6 mt-[33px] grid place-items-center w-full bg-white rounded-[20px] hadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] relative'>
        <MultiStep />
      </div>

      <div className='h-full w-full flex items-baseline gap-[34px] mb-[59px]'>
        <CommentBlock />
        {/* <EmployeesList /> */}
        <Form/>
      </div>
    </div>
  );
}
