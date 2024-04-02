'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SideNav from './SideNav';

const LeftContainer = () => {
  const pathname = usePathname();
  return (
    ///margin top for navbar
    <div className="mt-24">
      {/* <SideNav /> */}
    </div>
  );
};

export default LeftContainer;
