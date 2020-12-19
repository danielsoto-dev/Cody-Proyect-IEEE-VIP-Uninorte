import React from 'react';
import './styles.scss';
import Nav from '../Nav';
import CodyLogo from '../IconsComponents/CodyLogo';
import Link from '../Link';

export default function Header() {
  return (
    <div className='wrapped header'>
      <Link href='#home'>
        <CodyLogo className='logo'></CodyLogo>
      </Link>

      <Nav className='navbar'></Nav>
    </div>
  );
}
