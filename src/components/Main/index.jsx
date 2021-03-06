import React from 'react';

import { useWindowSize } from '../../hooks/useWindowSize';
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
  const size = useWindowSize();
  return (
    <>
      <Hero sliderImages={sliderImages}></Hero>
      <AboutUs></AboutUs>
      <ProyectLeaders screenSize={size}></ProyectLeaders>
      <BestProyects screenSize={size}></BestProyects>
      <Forum></Forum>
    </>
  );
}
