import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import sliderImages from '../utils/images.js';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main sliderImages={sliderImages}></Main>
      <Footer></Footer>
    </>
  );
}
