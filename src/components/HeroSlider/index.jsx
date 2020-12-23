import React, { useState, useEffect } from 'react';
import './styles.scss';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

export default function HeroSlider({ slides, autoPlayTime, children }) {
  console.log({ slides });
  const [currentSlide, setCurrentSlide] = useState(0);
  const numberOfSlides = slides.length - 1;
  const nextSlide = () => {
    if (currentSlide !== numberOfSlides) {
      setCurrentSlide((cS) => cS + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((cS) => cS - 1);
    } else {
      setCurrentSlide(numberOfSlides);
    }
  };
  useEffect(() => {
    if (autoPlayTime) {
      const interval = setInterval(nextSlide, autoPlayTime * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [currentSlide, autoPlayTime]);

  return (
    <div className='slider-hero'>
      {slides.map(({ src }, idx) => {
        return (
          <div
            style={{ backgroundImage: 'url(' + src + ')' }}
            className={`slide ${idx === currentSlide ? 'active' : ''}`}
          ></div>
        );
      })}
      {children}
      <img
        alt=''
        src={LeftArrow}
        className='slider-hero__btn btn--left'
        onClick={nextSlide}
      />

      <img
        alt=''
        src={RightArrow}
        className='slider-hero__btn btn--right'
        onClick={prevSlide}
      />
    </div>
  );
}
