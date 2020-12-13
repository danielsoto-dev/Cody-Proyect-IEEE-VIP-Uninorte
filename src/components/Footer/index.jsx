import React from 'react';
import Link from '../Link';
import IEEELogo from '../assets/ieee-logo.svg';
import uninorteLogo from '../assets/uninorte-logo.svg';
import './styles.scss';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='companies'>
        <img src={IEEELogo} className='logo-img' alt='IEEE Logo'></img>
        <img
          src={uninorteLogo}
          className='logo-img'
          alt='Universidad Del Norte Logo'
        ></img>
        <p className='text--disclousure'>©2020 CODY. All Rights Reserved</p>
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
