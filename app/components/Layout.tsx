'use client';
import { useState } from 'react';
import SideNav from './SideNav';

const Layout = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    ///for adding top margin and screen
    <div className="flex min-h-screen mt-15 pb-8">
      {/* Top and side Navbar
      <div className="flex-shrink-0 h-16 md:h-auto md:flex-1/7 fixed left-0 top-28 bg-white overflow-y-auto border border-black">
        <SideNav isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      </div>

      <div className="flex-6/7 bg-white border border-black">
        <div className="p-4 sm:p-8">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </div>
      </div> */}
      
      <div className="flex w-1/6 pl-2 pt-28">
        <SideNav isCollapsed={isCollapsed} setCollapsed={setCollapsed} />
      </div>
      <div className="flex w-5/6">
        <div className="max-w-screen-2xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
