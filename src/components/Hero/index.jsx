import React from 'react';
import './styles.scss';
import HeroSlider from '../HeroSlider';
import shapeHero from '../../assets/svg/shape-hero.svg';
import Link from '../Link';
export default function Hero({ sliderImages }) {
  return (
    <section id='home' className=' hero'>
      <HeroSlider autoPlayTime={4} slides={sliderImages}>
        <img alt='' src={shapeHero} className='svg-hero' />
        <div className='hero__box'>
          <p className='hero__call-action'>
            Ven y explora el mundo de la <br className='br' /> programación por
            bloques.
          </p>
          <p className='hero__main-text'>
            ¡Aprende con Cody a programar <span>videojuegos</span> de forma
            divertida!
          </p>
          <Link className='hero__btn'>Revisa el currículo</Link>
        </div>
      </HeroSlider>
    </section>
  );
}
