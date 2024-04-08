'use client';
import { useState } from 'react';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    ///for adding top margin and screen
    <div className="flex min-h-screen mt-15">
      {/* for adding border */}

      <div className="overflow-y-auto pt-24 border-r-1">
        <SideNav isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      </div>
      <div className={'flex-1 overflow-y-auto'}>{children}</div>
    </div>
  );
};

export default Layout;
