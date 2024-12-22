import {
  PanelsTopLeftIcon,
  CircleUser,
  FileVideo,
  ShieldPlus,
} from 'lucide-react';

export const MenuOption = [
  { id: 0, name: 'Home', path: '/', icon: PanelsTopLeftIcon },
  { id: 0, name: 'Tier', path: '/tier', icon: PanelsTopLeftIcon },
  { id: 1, name: 'Dashboard', path: '/dashboard', icon: PanelsTopLeftIcon },
  {
    id: 2,
    name: 'DnD',
    path: '/dnd',
    icon: FileVideo,
  },
  { id: 3, name: 'Schedule', path: '/schedule', icon: ShieldPlus },
  { id: 4, name: 'Parallel', path: '/parallel', icon: CircleUser },
  { id: 5, name: 'Intercept', path: '/intercept', icon: CircleUser },
  { id: 6, name: 'User', path: '/user', icon: CircleUser },
] as const;
