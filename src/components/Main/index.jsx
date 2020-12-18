import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import './styles.scss';
//Information
import leaders from '../../utils/leaders';
import proyects from '../../utils/proyects';

//Styles
import 'pure-react-carousel/dist/react-carousel.es.css';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';
//Components
import LeaderCard from '../LeaderCard';
import ProyectCard from '../ProyectCard';
import HeroSlider from '../HeroSlider';
//SVG
import blueLeaders from '../../assets/svg/blue-leaders.svg';
import bottomStrokes from '../../assets/svg/bottom-strokes.svg';
import codySvg from '../../assets/svg/cody_hero.svg';
import diamondSvg from '../../assets/svg/diamond-leaders.svg';
import leftForum from '../../assets/svg/left-forum.svg';
import purpleAboutUs from '../../assets/svg/purple-about-us.svg';
import purpleLeaders from '../../assets/svg/purple-leaders.svg';
import rightForum from '../../assets/svg/right-forum.svg';
import shapeHero from '../../assets/svg/shape-hero.svg';
import shapesProyects from '../../assets/svg/shapes-proyects.svg';

export default function Main({ sliderImages }) {
  //TODO Mirar si se puede hacer para que las letras varien según el fondo

  return (
    <>
      <section id='home' className=' hero'>
        <HeroSlider autoPlayTime={4} slides={sliderImages}>
          <img alt='' src={shapeHero} className='svg-hero' />
          <div className='hero__box'>
            <p className='hero__call-action'>
              Ven y explora el mundo de la <br /> programación por bloques.
            </p>
            <p className='hero__main-text'>
              ¡Aprende con Cody a programar <span>video juegos</span> de forma
              divertida!
            </p>
            <button className='hero__btn'>Revisa el currículo</button>
          </div>
        </HeroSlider>
      </section>
      {/* Aquí está la sección de Acerca de Nosotros */}
      <section id='about-us' className='wrapped about-us'>
        {/* <img alt='' src={rightStrokes} className='right-strokes' /> */}
        <div className='about-us__text-box'>
          <img alt='' src={purpleAboutUs} className='purple-about-us' />
          <img alt='' src={codySvg} className='about-us__img' />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </section>
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
              step={2}
              naturalSlideWidth={700}
              naturalSlideHeight={700}
              visibleSlides={3}
              totalSlides={4}
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
      <section id='forum' className='wrapped forum'>
        <img alt='' src={bottomStrokes} className='bottom-strokes' />
        <div className='forum__text-box'>
          <img alt='' src={leftForum} className='left-forum' />
          <img alt='' src={rightForum} className='right-forum' />
          <div className='forum__title'>Foro</div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
          <button className='forum__btn'>Ingresa</button>
        </div>
      </section>
    </>
  );
}
