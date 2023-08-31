import { XIcon } from "lucide-react";

interface ErrorFeedbackProps {
  message: string;
}

export default function ErrorFeedback({ message }: ErrorFeedbackProps) {
  return (
    <div className='flex items-center gap-1 mt-2 text-red-900'>
      <XIcon className='h-[12px] w-[12px]' />
      <span className='text-xs'>{message}</span>
    </div>
  );
}
