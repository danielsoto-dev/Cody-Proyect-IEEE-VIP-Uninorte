import React from 'react';
import Link from '../Link';
import IeeeLogo from '../IconsComponents/IeeeLogo';
import UninorteLogo from '../IconsComponents/UninorteLogo';
import './styles.scss';
export default function Footer() {
  return (
    <div className='footer'>
      <div className='companies'>
        <IeeeLogo width='100%' className='logo-img' alt='IEEE Logo'></IeeeLogo>
        <UninorteLogo
          width='100%'
          className='logo-img'
          alt='Universidad Del Norte Logo'
        ></UninorteLogo>
        <p className='text--disclousure'>©2020 CODY. All Rights Reserved</p>
      </div>
      <div className='nav-box'>
        <div className='nav-box__links'>
          <Link href='#home'>Home</Link>
          <Link href='#about-us'>Acerca</Link>
          <Link href='#proyect-leaders'>Lideres</Link>
          <Link href='#best-proyects'>Proyectos</Link>
          <Link href='#forum'>Foro</Link>
        </div>
      </div>
      <div className='subscribe'>
        <span className='subscribe__text'>Suscribete</span>
        <form className='subscribe__form' action='submit'>
          <label>
            <input
              className='subscribe__input'
              placeholder='Ingresa tu correo...'
              type='text'
            />
          </label>
          <button className='subscribe__btn'>Enviar</button>
        </form>
      </div>
    </div>
  );
}
