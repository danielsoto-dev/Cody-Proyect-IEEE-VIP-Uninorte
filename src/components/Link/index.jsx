import React from 'react';
import './styles.scss';
export default function Link({ children, href = '#' }) {
  return (
    <a className='link' href={href}>
      {children}
    </a>
  );
}
