import React, { ReactNode } from 'react';
import '../globals.css';

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
