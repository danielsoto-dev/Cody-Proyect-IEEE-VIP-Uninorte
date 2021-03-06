import React, { useState, useEffect } from 'react';
import './styles.scss';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import RightArrow from '../../assets/svg/right-arrow.svg';

export default function HeroSlider({ slides, autoPlayTime, children }) {
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
    const nextSlide = () => {
      if (currentSlide !== numberOfSlides) {
        setCurrentSlide((cS) => cS + 1);
      } else {
        setCurrentSlide(0);
      }
    };
    if (autoPlayTime) {
      const interval = setInterval(nextSlide, autoPlayTime * 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [numberOfSlides, currentSlide, autoPlayTime]);

  return (
    <div className='slider-hero'>
      {slides.map(({ src, id }, idx) => {
        return (
          <div
            key={id}
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
