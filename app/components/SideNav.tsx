import { Button } from '@/components/ui/button';
import { Nav } from '@/components/ui/nav';
import {
  ChevronsLeftRight,
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
    title: 'Assign Roles',
    label: '',
    icon: UserCog,
    variant: 'ghost',
    href: '/assign-roles',
  },
];

const userLinks = [
  {
    ///pore use korbo
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
    title: 'Assign Roles',
    label: '',
    icon: UserCog,
    variant: 'ghost',
    href: '/assign-roles',
  },
];

const reviewerLinks = [
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
    title: 'Assign Roles',
    label: '',
    icon: UserCog,
    variant: 'ghost',
    href: '/assign-roles',
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
    title: 'Assign Roles',
    label: '',
    icon: UserCog,
    variant: 'ghost',
    href: '/assign-roles',
  },
];

const SideNav = ({ isCollapsed, setCollapsed }) => {
  return (
    
      <div className={isCollapsed ? 'w-[80px]' : 'w-[224px]'}>
        <div className="flex justify-end">
          <Button
            onClick={() => setCollapsed(!isCollapsed)}
            variant="secondary"
            size="icon"
            className="rounded-full p-2"
          >
            <ChevronsLeftRight />
          </Button>
        </div>
        <Nav
          isCollapsed={isCollapsed}
          links={adminLinks}
          commonLinks={commonLinks}
        />
      </div>
  );
};

export default SideNav;
