import { steps } from "../../constants/steps";
import stepIcon from "../../assets/icons/step.svg";
import line from "../../assets/images/linesteps.png";

export default function MultiStep() {
  return (
    <>
      <img
        src={line}
        alt='line'
        className='absolute left-1/2 -translate-x-1/2 top-[38%]  w-full px-[32px] h-[5px] -z-1'
      />

      <div className=' flex items-center justify-between w-full px-[30px] z-10'>
        {steps.map((step) => (
          <div className='flex flex-col items-center justify-center gap-3'>
            <div
              key={step.id}
              className='grid place-items-center gap-4 h-[70px] w-[70px] rounded-[20px] bg-blue-theme shadow-[0px_4px_2px_0px_rgba(0,0,0,0.25)]'
            >
              <img src={stepIcon} alt='step-icon' />
            </div>
            <span className='text-gray-theme100'>{step.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
