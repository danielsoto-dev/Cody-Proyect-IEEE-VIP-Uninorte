import React from 'react';
import Link from '../Link';
import './styles.scss';
export default function Nav() {
  return (
    <div className='nav'>
      <Link href='#home'>Home</Link>
      <Link href='#about-us'>Acerca</Link>
      <Link href='#proyect-leaders'>Lideres</Link>
      <Link href='#best-proyects'>Proyectos</Link>
      <Link href='#forum'>Foro</Link>
    </div>
  );
}
