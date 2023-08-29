import CommentBlock from "./components/CommentBlock";
import Sidebar from "./components/Sidebar";

import "../styles/styles.css";
import EmployeesList from "./components/EmployeesList";

export default function App() {
  return (
    <div className='pr-[34px] pl-[92px] py-8 pb-[60px] flex flex-col items-center justify-end h-full gap-8'>
      <Sidebar />

      <div className='max-h-[580px] h-full w-full flex items-center gap-[34px]'>
        <CommentBlock />
        <EmployeesList />
      </div>
    </div>
  );
}
