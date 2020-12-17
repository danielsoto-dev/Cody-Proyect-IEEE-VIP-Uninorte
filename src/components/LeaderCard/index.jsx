import React from 'react';
import './styles.scss';
import defaultPhoto from '../../assets/svg/default_pp.svg';
export default function Nav({ info }) {
  let { name, img = defaultPhoto } = info;
  return (
    <div className='leader-card'>
      <img className='leader-card__profile-pic' src={img} alt='Profile' />
      <div className='leader-card__details'>
        <p className='leader-card__name'>{name}</p>
        <p className='leader-card__info'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi nihil
          eligendi tempora distinctio fugiat consequuntur possimus.
        </p>
      </div>
    </div>
  );
}
