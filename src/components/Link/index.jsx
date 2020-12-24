import React from 'react';
import './styles.scss';
export default function Link({ children, href = '#', className = null }) {
  if (!className) className = 'link';
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
