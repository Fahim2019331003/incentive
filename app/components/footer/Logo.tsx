'use client';

import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer bg-white rounded-lg"
      height="300"
      width="300"
      src="/images/logo.png"
    />
  );
};

export default Logo;
