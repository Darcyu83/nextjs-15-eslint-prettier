'use client';

import Image from 'next/image';
import { MenuOption } from './menuConfig';
import { usePathname } from 'next/navigation';
import UserLoginInfo from './UserLoginInfo';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { useUIStore } from '@/store';
import Link from 'next/link';

interface IProps {}

function Header(props: IProps) {
  const path = usePathname();
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();

  return (
    <div className='flex h-full w-full items-center justify-between gap-2 bg-white'>
      <ul className='flex w-full items-center gap-2'>
        <li className='min-w-24 cursor-pointer bg-white py-1'>
          <Link href={'/'}>
            <Image src={'/next.svg'} alt='Logo' width={96} height={20} />
          </Link>
        </li>

        {MenuOption.map((config, idx) => {
          return (
            <li className='group cursor-pointer py-1' key={config.name}>
              <Link href={config.path}>
                <h1
                  className={[
                    'whitespace-nowrap rounded-md bg-primary px-4 py-2 font-medium',
                    path === config.path ? 'text-[#44e3ee]' : 'text-slate-400',
                    path !== config.path
                      ? 'group-hover:scale-105 group-hover:text-[#44a4ee]'
                      : '',
                  ].join(' ')}
                >
                  {config.name}
                </h1>
              </Link>
            </li>
          );
        })}
      </ul>

      <>
        <UserLoginInfo />

        <Button
          onClick={(e) => {
            e.stopPropagation();
            console.log('Button click');
            toggleMenu();
          }}
        >
          <Menu />
        </Button>
      </>
    </div>
  );
}

export default Header;
