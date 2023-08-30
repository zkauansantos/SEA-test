import { steps } from "../../constants/steps";
import stepIcon from "../../assets/icons/step.svg";

export default function MultiStep() {
  return (
    <div className='flex items-center justify-between w-full h-full px-[30px] '>
      {steps.map((step) => (
        <div className='flex flex-col items-center justify-center gap-3'>
          <div
            key={step.id}
            className='grid place-items-center gap-4 h-[70px] w-[70px] rounded-[20px] bg-blue-theme'
          >
            <img src={stepIcon} alt='step-icon' />
          </div>
          <span className='text-gray-theme100'>{step.label}</span>
        </div>
      ))}
    </div>
  );
}
