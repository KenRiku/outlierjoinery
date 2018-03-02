import React from 'react';
import Hero from "react-lazy-hero";
import './hero.css';

class Hello extends React.Component {
  render() {
    return (
      <Hero
        opacity={0}
        minHeight="100vh"
        parallaxOffset={100}
        imageSrc='https://tinyurl.com/ycxrrnyt'
      >
        <img src="https://tinyurl.com/ybgcmfzp" className="hero-logo" />
      </Hero>)
  }
}

export default Hello;
