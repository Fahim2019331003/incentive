'use client';
import { User } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import UserMenu from './UserMenu';

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  // console.log({ currentUser });

  return (
    <div className="fixed w-full bg-white z-20 shadow-md">
      <div className="py-4 border-b-[1px] flex md:block ">
        <Container>
          <div className="flex flex-row items-center gap-3">
            <div className="basis-1/4 items-center pl-10">
              <Link href={'/'}>
                <Logo />
              </Link>
            </div>
            <div className="flex basis-1/2 justify-evenly">
              <Link href={'/'}>Home</Link>
              <Link href={'/notice'}>Notice</Link>
              <Link href={'/dashboard'}>Dashboard</Link>
              <Link href={'/incentive'}>Incentive</Link>
            </div>
            <div className="basis-1/4 flex flex-row-reverse pr-10">
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
