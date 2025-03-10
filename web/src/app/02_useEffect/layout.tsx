import React, { ReactNode } from 'react';

interface SubLayoutProps {
  children: ReactNode;
}

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='m-1'>{children}</div>
    </>
  );
};

export default SubLayout;
