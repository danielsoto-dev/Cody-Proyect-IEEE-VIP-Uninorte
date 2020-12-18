import React from 'react';
import './styles.scss';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import blueLeaders from '../../assets/svg/blue-leaders.svg';
import diamondSvg from '../../assets/svg/diamond-leaders.svg';
import LeaderCard from '../LeaderCard';
import leaders from '../../utils/leaders';
import purpleLeaders from '../../assets/svg/purple-leaders.svg';
export default function ProyectLeaders() {
  return (
    <section id='proyect-leaders' className='wrapped proyect-leaders'>
      {/* //TODO Fix rigth gap */}
      <img alt='' src={diamondSvg} className='diamond-leaders' />
      <img alt='' src={purpleLeaders} className='purple-leaders' />
      <img alt='' src={blueLeaders} className='blue-leaders' />
      <p className='proyect-leaders__title'>
        <span>Líderes</span> del Proyecto
      </p>
      <p className='proyect-leaders__sub-title'>
        Conoce a los líderes del proyecto
      </p>
      <div className='leaders-box'>
        <CarouselProvider
          step={2}
          naturalSlideWidth={225}
          naturalSlideHeight={386}
          visibleSlides={3}
          totalSlides={6}
        >
          <Slider className='slider'>
            {leaders.map(({ name, details, id }) => {
              return (
                <Slide key={id} className='slide' index={id}>
                  <LeaderCard info={{ name, details }}></LeaderCard>
                </Slide>
              );
            })}
          </Slider>
          <div className='btns-slider-container'>
            <ButtonBack className='btn-slider'>
              <img alt='' src={LeftArrow} />
            </ButtonBack>
            <ButtonNext className='btn-slider'>
              <img alt='' src={RightArrow} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
}
