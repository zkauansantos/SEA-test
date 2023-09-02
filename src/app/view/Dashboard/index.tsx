import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import CommentBlock from "../../components/CommentBlock";
import EmployeesList from "../../components/EmployeesList";
import Form from "../../components/Form";
import MultiStep from "../../components/MultiStep";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "../../hooks/useSelector";
import { setCurrentStage } from "../../redux/dashboard/actions";
import cn from "../../../utils/cn";
import ComingSoon from "../../components/ComingSoon";

export default function Dashboard() {
  const { formVisible, completedStage, currentStage } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  return (
    <div className='pr-[34px] pl-[92px] flex flex-col items-start justify-start h-full'>
      <Sidebar />

      <div className='h-full max-h-[158px] py-6 mt-[33px] grid place-items-center w-full bg-white rounded-[20px] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] relative'>
        <MultiStep />
      </div>

      <div className='mt-8 flex-1 flex-col xl:flex-row w-full flex items-start gap-[34px]'>
        <CommentBlock />
        <EmployeesList />
        <Form />
        <ComingSoon />
      </div>

      {!formVisible && currentStage === 1 && (
        <div className='w-full flex justify-end pb-2 mt-1'>
          <Button
            disabled={!completedStage}
            onClick={() => dispatch(setCurrentStage(2))}
            className={cn(
              "max-w-[194px] bg-blue-theme text-white text-xs font-bold",
              "hover:bg-blue-theme/80 disabled:cursor-not-allowed disabled:bg-gray-400"
            )}
          >
            Próximo passo
          </Button>
        </div>
      )}
    </div>
  );
}
