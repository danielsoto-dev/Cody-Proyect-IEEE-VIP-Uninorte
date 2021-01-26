import React from 'react';
import './styles.scss';
import codySvg from '../../assets/svg/cody_hero.svg';
import purpleAboutUs from '../../assets/svg/purple-about-us.svg';

export default function AboutUs() {
  return (
    <section id='about-us' className='wrapped about-us'>
      <div className='about-us__text-box'>
        <img alt='' src={purpleAboutUs} className='purple-about-us' />
        <img alt='' src={codySvg} className='about-us__img' />
        <p>
          Este es un proyecto en conjunto entre IEEE y Uninorte con caracter social que busca hacer impacto en los estudiantes de colegio y de universidad.
        </p>
      </div>
    </section>
  );
}
