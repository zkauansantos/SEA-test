import { steps } from "../../constants/steps";
import stepIcon from "../../assets/icons/step.svg";
import line from "../../assets/images/linesteps.png";
import { useSelector } from "../hooks/useSelector";

export default function MultiStep() {
  const conclusedStep = useSelector((state) => state.dashboard.completedStage);

  return (
    <>
      <img
        src={line}
        alt='line'
        className='absolute left-1/2 -translate-x-1/2 top-[38%]  w-full px-[36px] h-[5px] -z-1'
      />

      <div className=' flex items-baseline justify-between w-full px-[30px] z-10'>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className='flex flex-col items-center justify-center gap-3'
          >
            <div className='grid place-items-center gap-4 h-[70px] w-[70px] rounded-[20px] bg-blue-theme shadow-[0px_4px_2px_0px_rgba(0,0,0,0.25)]'>
              <img src={stepIcon} alt='step-icon' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <span className='text-blue-theme uppercase'>{step.label}</span>
              {index === 0 && conclusedStep && (
                <span className='text-gray-theme100 text-sm uppercase'>
                  Concluído
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
