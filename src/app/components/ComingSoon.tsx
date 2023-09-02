import { useDispatch } from "react-redux";
import comingImage from "../../assets/icons/coming-soon.svg";

import { useSelector } from "../hooks/useSelector";
import { reset } from "../redux/dashboard/actions";

import Button from "./Button";

export default function ComingSoon() {
  const { currentStage, formVisible } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  if (currentStage === 1 || formVisible) return null;

  return (
    <div className='rounded-[20px]  gap-4 max-h-[484px] w-full h-full bg-white px-[14px] py-[26px] relative shadow-[0px_11px_20px_0px_rgba(0,0,0,0.2)]'>
      <div className='items-center justify-center flex flex-col'>
        <strong>Desculpe, esta etapa ainda está em desenvolvimento!</strong>
        <img
          src={comingImage}
          alt='coming-soon'
          className='w-full max-w-[350px] h-full max-h-[350px]'
        />
        <Button
          onClick={() => dispatch(reset())}
          className='max-w-[350px] bg-blue-theme text-white hover:bg-blue-theme/60'
        >
          Voltar do começo
        </Button>
      </div>
    </div>
  );
}
