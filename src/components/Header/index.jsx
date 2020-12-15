import React from 'react';
import './styles.scss';
import Nav from '../Nav';
import CodyLogo from '../IconsComponents/CodyLogo';

export default function Header() {
  return (
    <div className=' wrapped header'>
      <CodyLogo className='logo'></CodyLogo>
      <Nav className='navbar'></Nav>
    </div>
  );
}
