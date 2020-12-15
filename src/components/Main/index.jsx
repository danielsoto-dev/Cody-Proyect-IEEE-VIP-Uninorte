import React from 'react';
import './styles.scss';
import LeaderCard from '../LeaderCard';
import ProyectCard from '../ProyectCard';
import shapeHero from '../../assets/shape-hero.svg';
import rightStrokes from '../../assets/right-strokes.svg';
import codySvg from '../../assets/cody_hero.svg';
import diamondSvg from '../../assets/diamond-leaders.svg';

import leftForum from '../../assets/left-forum.svg';
import rightForum from '../../assets/right-forum.svg';
import bottomStrokes from '../../assets/bottom-strokes.svg';
import shapesProyects from '../../assets/shapes-proyects.svg';
import purpleLeaders from '../../assets/purple-leaders.svg';
import blueLeaders from '../../assets/blue-leaders.svg';
import purpleAboutUs from '../../assets/purple-about-us.svg';

export default function Main() {
  return (
    <>
      <section className='wrapped hero'>
        <img loading='lazy' alt='' src={shapeHero} className='svg-hero' />
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
      </section>
      <section className='wrapped about-us'>
        <img
          loading='lazy'
          alt=''
          src={rightStrokes}
          className='right-strokes'
        />
        <img
          loading='lazy'
          alt=''
          src={purpleAboutUs}
          className='purple-about-us'
        />
        <div className='about-us__text-box'>
          <img loading='lazy' alt='' src={codySvg} className='about-us__img' />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </section>
      <section className='wrapped proyect-leaders'>
        <img
          loading='lazy'
          alt=''
          src={diamondSvg}
          className='diamond-leaders'
        />
        <img
          loading='lazy'
          alt=''
          src={purpleLeaders}
          className='purple-leaders'
        />
        <img loading='lazy' alt='' src={blueLeaders} className='blue-leaders' />

        <p className='proyect-leaders__title'>
          <span>Líderes</span> del Proyecto
        </p>
        <p className='proyect-leaders__sub-title'>
          Conoce a los líderes del proyecto
        </p>
        <div className='leaders-box'>
          <LeaderCard info={{ name: 'Pedro' }}></LeaderCard>
          <LeaderCard info={{ name: 'Augusto' }}></LeaderCard>
          <LeaderCard info={{ name: 'Jimeno' }}></LeaderCard>
        </div>
      </section>
      <section className='wrapped best-proyects'>
        <img
          loading='lazy'
          alt=''
          src={shapesProyects}
          className='shapes-proyects'
        />
        <div className='color-container'>
          <p className='best-proyects__title'>
            <span>Mejores</span> Proyectos
          </p>
          <p className='best-proyects__sub-title'>
            Conoce los mejores proyectos desarrollados por los estudiantes
            participantes del currículo:
          </p>
          <div className='proyects-box'>
            <ProyectCard info={{ proyectName: 'CODY' }}></ProyectCard>
            <ProyectCard info={{ proyectName: 'CyberPunk 2077' }}></ProyectCard>
            <ProyectCard
              info={{ proyectName: 'The Boring Company' }}
            ></ProyectCard>
          </div>
        </div>
      </section>
      <section className='wrapped forum'>
        <img loading='lazy' alt='' src={leftForum} className='left-forum' />
        <img loading='lazy' alt='' src={rightForum} className='right-forum' />
        <img
          loading='lazy'
          alt=''
          src={bottomStrokes}
          className='bottom-strokes'
        />

        <div className='forum__text-box'>
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
