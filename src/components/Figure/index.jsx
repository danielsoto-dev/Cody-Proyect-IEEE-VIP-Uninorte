import React from 'react';
import './styles.scss';

const circleStyles = { borderRadius: '50%' };
const triangleStyles = {
  borderLeft: ' 50px solid transparent',
  borderRight: ' 50px solid transparent',
  borderBottom: '100px solid red',
};
const squareStyles = {};

export default function Figure({
  type = 'triangle',
  width = '80px',
  height = '80px',
  bgColor = 'blue',
  opacity = '0.5',
  borderRadius = '0px',
}) {
  let definedStyles = { width, height, bgColor, opacity, borderRadius };
  switch (type) {
    case 'square':
      definedStyles = { ...definedStyles, ...squareStyles };
      break;
    case 'triangle':
      definedStyles = { ...definedStyles, ...triangleStyles };
      break;
    case 'circle':
      definedStyles = { ...definedStyles, ...circleStyles };
      break;
    default:
      break;
  }
  return <div style={{ ...definedStyles }} className={'figure'} alt=''></div>;
}
