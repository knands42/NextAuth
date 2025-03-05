import React from 'react';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=''>
      <>{children}</>
    </div>
  );
};

export default DashboardLayout;
