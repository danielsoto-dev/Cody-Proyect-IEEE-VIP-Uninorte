import React from 'react';
import './styles.scss';
import bottomStrokes from '../../assets/svg/bottom-strokes.svg';
import leftForum from '../../assets/svg/left-forum.svg';
import rightForum from '../../assets/svg/right-forum.svg';
export default function Forum() {
  return (
    <section id='forum' className='wrapped forum'>
      <img alt='' src={bottomStrokes} className='bottom-strokes' />
      <div className='forum__text-box'>
        <img alt='' src={leftForum} className='left-forum' />
        <img alt='' src={rightForum} className='right-forum' />
        <div className='forum__title'>Foro</div>
        <p>
          Próximamente tendremos foros de discusión para que los estudiantes puedan compartir sus experiencias y ayudarse colabroativamente.
        </p>
        <button className='forum__btn'>Ingresa</button>
      </div>
    </section>
  );
}
