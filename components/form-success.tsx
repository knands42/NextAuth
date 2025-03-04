import { CheckCircleIcon } from 'lucide-react';

type FormProps = {
  message?: string;
};

export const FormSuccess = ({ message }: FormProps) => {
  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
      <CheckCircleIcon className='h-4 w-4' />
      <p>{message}</p>
    </div>
  );
};
