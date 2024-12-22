'use client';

import Image from 'next/image';
import UserLoginInfo from './UserLoginInfo';
import { MenuOption } from './menuConfig';
import { usePathname } from 'next/navigation';

interface IProps {}

function Header(props: IProps) {
  const path = usePathname();
  return (
    <div className='flex h-full w-full items-center justify-between gap-2'>
      <ul className='flex w-full items-center gap-2'>
        <li className='cursor-pointer bg-white py-1'>
          <Image src={'/next.svg'} alt='Logo' width={100} height={20} />
        </li>

        {MenuOption.map((config, idx) => {
          return (
            <li className='cursor-pointer py-1' key={config.name}>
              {config.name}
            </li>
          );
        })}
      </ul>

      <UserLoginInfo />
    </div>
  );
}

export default Header;
