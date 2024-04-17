'use client';
import { useState } from 'react';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    <div className="flex w-full min-h-screen mt-15 pb-8">
      <div className="flex w-1/6 pl-2 pt-28">
        <SideNav isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      </div>
      <div className="flex w-5/6 overflow-auto">
        <div className="max-w-screen-2xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
