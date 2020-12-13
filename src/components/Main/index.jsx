import React from 'react';
import './styles.scss';
import LeaderCard from '../LeaderCard';
import ProyectCard from '../ProyectCard';
import Figure from '../Figure';
import svg from '../assets/shape-hero.svg';
export default function Main() {
  return (
    <>
      <Figure></Figure>
      <section className='wrapped hero'>
        <img src={svg} className='svg-hero' alt=''></img>
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
        <div className='about-us__text-box'>
          <div className='about-us__img'></div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat
          </p>
        </div>
      </section>
      <section className='wrapped proyect-leaders'>
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
        <div className='forum__text-box'>
          <div className='forum__title'>Foro</div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat
          </p>
          <button className='forum__btn'>Ingresa</button>
        </div>
      </section>
    </>
  );
}
