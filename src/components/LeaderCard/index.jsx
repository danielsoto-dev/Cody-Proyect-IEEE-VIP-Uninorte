import React from 'react';
import './styles.scss';
import defaultPhoto from '../../assets/svg/default_pp.svg';
export default function Nav({ info }) {
  let { name, src, details } = info;
  if (!src) src = defaultPhoto;
  if (!name) name = 'Proximamente';
  if (!details) details = 'Proximamente';
  return (
    <div className='leader-card'>
      <img className='leader-card__profile-pic' src={src} alt='Profile' />
      <div className='leader-card__details'>
        <p className='leader-card__name'>{name}</p>
        <p className='leader-card__info'>{details}</p>
      </div>
    </div>
  );
}
