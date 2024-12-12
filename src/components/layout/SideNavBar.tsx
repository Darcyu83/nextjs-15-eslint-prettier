import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from 'lucide';

interface IProps {}

function SideNavBar(props: IProps) {
  const MenuOption = [
    { id: 1, name: 'Dashboard', path: '/dashboard', icon: PanelsTopLeft },
    {
      id: 2,
      name: 'Create New',
      path: '/dashboard/create-new',
      icon: FileVideo,
    },
    { id: 3, name: 'Upgrade', path: '/upgrade', icon: ShieldPlus },
    { id: 4, name: 'Account', path: '/account', icon: CircleUser },
  ] as const;
  return (
    <div className='bg-sky-200'>
      <h1>SideNavBar</h1>
    </div>
  );
}

export default SideNavBar;
