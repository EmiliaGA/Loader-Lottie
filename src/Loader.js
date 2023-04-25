/* eslint-disable react/style-prop-object */
/* eslint-disable object-shorthand */
import React from 'react';
import './index.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './lotties/giraffe';

export const Loader = () => {
  return (

    <Player
      autoplay
      controls
      loop
      mode="normal"
      src={animationData}
      style={{ height: '1000px', width: '320px' }} />

  );
}
