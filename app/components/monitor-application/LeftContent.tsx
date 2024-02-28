'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import User from './User';

const options = [
  {
    url: '/monitor-application',
    urlName: 'Monitor Application',
    iconsUrl: '/images/leftcontent/monitor.png',
  },
  {
    url: '/assign-application',
    urlName: 'Assign Application',
    iconsUrl: '/images/leftcontent/assign.png',
  },
  {
    url: '/',
    urlName: 'Monitor Workflow',
    iconsUrl: '/images/leftcontent/workflow.png',
  },
  {
    url: '/',
    urlName: 'Track Funds',
    iconsUrl: '/images/leftcontent/glass.png',
  },
  {
    url: '/',
    urlName: 'Edit Accounts',
    iconsUrl: '/images/leftcontent/edit.png',
  },
];

const LeftContent = ({ name, role }) => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <div className="mt-10 pl-10">
      <User name={name} role={role} />
      <div className="mt-10">
        <ul>
          {options.map((item) => (
            <li className="mt-3">
              <div className="flex items-center">
                <Link href={item.url}>
                  <Image
                    src={item.iconsUrl}
                    width={20}
                    height={20}
                    alt="icon"
                    className="mr-2"
                  />
                </Link>
                {pathname === item.url ? (
                  <span className="font-bold">
                    <Link href={item.url}>{item.urlName}</Link>
                  </span>
                ) : (
                  <span>
                    <Link href={item.url}>{item.urlName}</Link>
                  </span>
                )}{' '}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftContent;
