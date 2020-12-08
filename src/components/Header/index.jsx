import React from 'react';
import './styles.scss';
import Nav from '../Nav';
export default function Header() {
  return (
    <div className='header'>
      <div className='logo'></div>
      <Nav className='navbar'></Nav>
    </div>
  );
}
