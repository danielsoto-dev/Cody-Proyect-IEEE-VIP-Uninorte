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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
}
