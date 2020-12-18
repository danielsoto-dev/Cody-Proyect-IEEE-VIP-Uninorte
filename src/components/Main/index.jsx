import React from 'react';

import './styles.scss';
//Information

//Styles
import 'pure-react-carousel/dist/react-carousel.es.css';

//Components
import Hero from '../Hero';

import AboutUs from '../AboutUs';
import ProyectLeaders from '../ProyectLeaders';
import BestProyects from '../BestProyects';
import Forum from '../Forum';

export default function Main({ sliderImages }) {
  return (
    <>
      <Hero sliderImages={sliderImages}></Hero>
      <AboutUs></AboutUs>
      <ProyectLeaders></ProyectLeaders>
      <BestProyects></BestProyects>
      <Forum></Forum>
    </>
  );
}
