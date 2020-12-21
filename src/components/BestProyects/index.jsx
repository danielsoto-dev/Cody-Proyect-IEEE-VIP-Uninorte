import React from 'react';
import './styles.scss';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import proyects from '../../utils/proyects';

import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';
import ProyectCard from '../ProyectCard';
import shapesProyects from '../../assets/svg/shapes-proyects.svg';
export default function BestProyects({ screenSize: { width } }) {
  let height = 366;
  let numOfSlides = 3;
  if (width < 830) {
    numOfSlides = 2;
    if (width < 580) {
      numOfSlides = 1;
    }
  }
  return (
    <section id='best-proyects' className='wrapped best-proyects'>
      <img alt='' src={shapesProyects} className='shapes-proyects' />
      <div className='color-container'>
        <p className='best-proyects__title'>
          <span>Mejores</span> Proyectos
        </p>
        <p className='best-proyects__sub-title'>
          Conoce los mejores proyectos desarrollados por los estudiantes
          participantes del currículo:
        </p>
        <div className='proyects-box'>
          <CarouselProvider
            step={1}
            naturalSlideWidth={700}
            naturalSlideHeight={height}
            visibleSlides={numOfSlides}
            totalSlides={proyects.length}
          >
            <Slider className='slider'>
              {proyects.map(({ name, details, id }) => {
                return (
                  <Slide key={id} className='slide' index={id}>
                    <ProyectCard info={{ name, details }}></ProyectCard>
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
      </div>
    </section>
  );
}
