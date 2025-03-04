import { TriangleAlert } from 'lucide-react';

type FormProps = {
  message?: string;
};

export const FormError = ({ message }: FormProps) => {
  return (
    <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <TriangleAlert className='h-4 w-4' />
      <p>{message}</p>
    </div>
  );
};
