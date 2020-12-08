import React from 'react';
import Link from '../Link';
import './styles.scss';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='companies'>
        <div className='logo-img'></div>
        <div className='logo-img'></div>
        <div className='logo-img'></div>
        <p className='text--disclousure'>2020 CODY All rights Reserved</p>
      </div>
      <div className='nav-box'>
        <div className='nav-box__links'>
          <Link>Home</Link>
          <Link>Acerca</Link>
          <Link>Currículo</Link>
          <Link>Foro</Link>
        </div>
      </div>
      <div className='subscribe'>
        <span className='subscribe__text'>Suscribete</span>
        <form className='subscribe__form' action='submit'>
          <input
            className='subscribe__input'
            placeholder='Ingresa tu correo...'
            type='text'
          />
          <button className='subscribe__btn'>Enviar</button>
        </form>
      </div>
    </div>
  );
}
