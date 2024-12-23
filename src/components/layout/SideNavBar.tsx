'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuOption } from './menuConfig';
import { useUIStore } from '@/store';

interface IProps {}

function SideNavBar(props: IProps) {
  const path = usePathname();

  const { isMenuOpen, toggleMenu } = useUIStore();

  return (
    <div
      className='flex justify-end pt-[40px]'
      style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}
    >
      <ul className='flex w-[200px] -skew-y-12 flex-col shadow-[-100px_0px_20px_rgba(0,0,0,0.5)]'>
        {MenuOption.map((config, idx) => {
          return (
            <li key={'side_nav_' + idx}>
              <Link href={config.path} className='group'>
                <div
                  style={{ zIndex: MenuOption.length - idx + 1 }}
                  className={[
                    `relative box-border w-full cursor-pointer shadow-inner transition-transform duration-300`,
                    'group-hover:translate-x-[-40px] group-hover:bg-[#44a4ee] group-hover:text-slate-50 group-hover:before:bg-[#3989c7] group-hover:after:bg-[#44a4ee]',
                    'before:absolute before:left-[-40px] before:top-0 before:h-full before:w-[40px] before:origin-right before:skew-y-[45deg] before:bg-[#222]',
                    'after:absolute after:top-[-40px] after:h-[40px] after:w-full after:origin-bottom after:skew-x-[45deg] after:bg-[#333]',
                    path === config.path
                      ? 'translate-x-[-40px] bg-[#44e3ee] text-slate-50 before:bg-[#42aac4] after:bg-[#44e3ee]'
                      : 'bg-[#444] text-slate-400',
                  ].join(' ')}
                >
                  <div className={['flex items-center gap-1 p-3'].join(' ')}>
                    <config.icon className='relative' />
                    <span>{config.name}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNavBar;
