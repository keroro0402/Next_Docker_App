import React, { ReactNode } from 'react';
import '../globals.css';

interface SubLayoutProps {
  children: ReactNode;
}

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <>
      <div className='card'>{children}</div>
    </>
  );
};

export default SubLayout;
