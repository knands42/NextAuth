'use client';

import { useRouter } from 'next/navigation';

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: 'model' | 'redirect';
  asChild?: boolean;
};

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClickEvent = () => {
    router.push('/auth/login');
  };

  if (mode === 'model') {
    return (
      // TODO: implement model
      <></>
    );
  }

  return (
    <span onClick={onClickEvent} className='cursor-pointer'>
      {children}
    </span>
  );
};
