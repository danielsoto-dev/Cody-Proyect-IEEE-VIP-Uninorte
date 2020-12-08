import React from 'react';
import Link from '../Link';
import './styles.scss';
export default function Nav() {
  return (
    <div className='nav'>
      <Link>Home</Link>
      <Link>Acerca</Link>
      <Link>Currículo</Link>
      <Link>Foro</Link>
    </div>
  );
}
