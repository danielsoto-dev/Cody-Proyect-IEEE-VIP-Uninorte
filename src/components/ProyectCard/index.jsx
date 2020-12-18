import React from 'react';
import './styles.scss';
import defaultPhoto from '../../assets/svg/default_proyect-icon.svg';
export default function Nav({ info }) {
  let { name, img, details } = info;
  if (!img) img = defaultPhoto;
  if (!details) details = 'Proximamente';

  console.log(details);
  return (
    <div className='proyect-card'>
      <img className='proyect-card__picture' src={img} alt='Profile' />
      <p className='proyect-card__name'>{name}</p>
      <p className='proyect-card__info'>{details}</p>
    </div>
  );
}
