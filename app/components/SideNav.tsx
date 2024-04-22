import { Nav } from '@/components/ui/nav';
import {
  File,
  HandCoins,
  Home,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  Scroll,
  User,
  UserCog,
} from 'lucide-react';

const commonLinks = [
  {
    title: 'Home',
    label: '',
    icon: Home,
    variant: 'default',
    href: '/',
  },
  {
    title: 'Notice',
    label: '',
    icon: Megaphone,
    variant: 'default',
    href: '/notice',
  },
  {
    title: 'Incentive',
    label: '',
    icon: Scroll,
    variant: 'default',
    href: '/incentive',
  },
  {
    title: 'Dashboard',
    label: '',
    icon: LayoutDashboard,
    variant: 'default',
    href: '/dashboard',
  },
];


const SideNav = ({ userId, userRole, isCollapsed, setCollapsed }) => {

  const adminLinks = [
    {
      title: 'Applications',
      label: '',
      icon: File,
      variant: 'default',
      href: '/applications',
    },
    {
      title: 'New Notice',
      label: '',
      icon: Newspaper,
      variant: 'ghost',
      href: '/new-notice',
    },
    {
      title: 'Track Funds',
      label: '',
      icon: HandCoins,
      variant: 'ghost',
      href: '/track-funds',
    },
    {
      title: 'Accounts',
      label: '',
      icon: User,
      variant: 'ghost',
      href: '/accounts',
    },
    {
      title: 'My Profile',
      label: '',
      icon: User,
      variant: 'ghost',
      href: `/profile/${userId}`,
    },
  ];
  
  const userLinks = [
    {
      title: 'My Applications',
      label: '',
      icon: File,
      variant: 'default',
      href: '/user-applications',
    },
    {
      title: 'My Incentives',
      label: '',
      icon: HandCoins,
      variant: 'ghost',
      href: '/user-funds',
    },
    {
      title: 'My Profile',
      label: '',
      icon: User,
      variant: 'ghost',
      href: `/profile/${userId}`,
    },
  ];
  
  const evaluatorLinks = [
    {
      title: 'My Applications',
      label: '',
      icon: File,
      variant: 'default',
      href: '/user-applications',
    },
    {
      title: 'Review Applications',
      label: '',
      icon: File,
      variant: 'default',
      href: '/review-applications',
    },
    {
      title: 'My Incentives',
      label: '',
      icon: HandCoins,
      variant: 'ghost',
      href: '/user-funds',
    },
    {
      title: 'My Profile',
      label: '',
      icon: User,
      variant: 'ghost',
      href: `/profile/${userId}`,
    },
  
  ];
  
  const coordinatorLinks = [
    {
      title: 'Applications',
      label: '',
      icon: File,
      variant: 'default',
      href: '/applications',
    },
    {
      title: 'New Notice',
      label: '',
      icon: Newspaper,
      variant: 'ghost',
      href: '/new-notice',
    },
    {
      title: 'Track Funds',
      label: '',
      icon: HandCoins,
      variant: 'ghost',
      href: '/track-funds',
    },
    {
      title: 'Accounts',
      label: '',
      icon: User,
      variant: 'ghost',
      href: '/accounts',
    },
    {
      title: 'My Profile',
      label: '',
      icon: User,
      variant: 'ghost',
      href: `/profile/${userId}`,
    },
  ];
  

  return (
    <div className={isCollapsed ? 'w-[80px]' : 'w-[260px]'}>
      <div className="flex justify-end">
        {/* <Button
            onClick={() => setCollapsed(!isCollapsed)}
            variant="secondary"
            size="icon"
            className="rounded-full p-2"
          >
            <ChevronsLeftRight />
          </Button> */}
      </div>
      {userRole === 'NONE' && (
        <Nav isCollapsed={isCollapsed} links={[]} commonLinks={commonLinks} />
      )}

      {userRole === 'APPLICANT' && (
        <Nav
          isCollapsed={isCollapsed}
          links={userLinks}
          commonLinks={commonLinks}
        />
      )}
      {userRole === 'ADMIN' && (
        <Nav
          isCollapsed={isCollapsed}
          links={adminLinks}
          commonLinks={commonLinks}
        />
      )}
      {userRole === 'EVALUATOR' && (
        <Nav
          isCollapsed={isCollapsed}
          links={evaluatorLinks}
          commonLinks={commonLinks}
        />
      )}
      {userRole === 'COORDINATOR' && (
        <Nav
          isCollapsed={isCollapsed}
          links={coordinatorLinks}
          commonLinks={commonLinks}
        />
      )}
    </div>
  );
};

export default SideNav;
