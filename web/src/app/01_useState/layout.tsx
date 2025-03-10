import React, { ReactNode } from 'react';

interface SubLayoutProps {
  children: ReactNode;
}

const SubLayout: React.FC<SubLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default SubLayout;
