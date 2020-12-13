import React from 'react';
import './styles.scss';
import defaultPhoto from '../assets/default_proyect-icon.svg';
export default function Nav({ info }) {
  let { proyectName, img = defaultPhoto } = info;
  return (
    <div className='proyect-card'>
      <img className='proyect-card__picture' src={img} alt='Profile' />
      <p className='proyect-card__name'>{proyectName}</p>
      <p className='proyect-card__info'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}
