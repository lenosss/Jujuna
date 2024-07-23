import React from 'react'
import Nav from '../components/Nav'
import {  Element } from 'react-scroll';
import FirstSection from '../components/FirstSection';
import AboutSection from '../components/AboutSection';
import News from '../components/News';
import Bottle from '../components/Bottle';
import Bar from '../components/Bar';
import Cocktails from '../components/Cocktails';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <div>
      <Nav/>
      <Element name="main" >
        <FirstSection/>
      </Element>
      <Element name="about" >
        <AboutSection/>
      </Element>
      <Element name="news" >
        <News/>
      </Element>
      <Element name="bottle">
        <Bottle/>
      </Element>
      <Element name="cocktails" >
        <Cocktails/>
      </Element>
      <Element name="bar" >
        <Bar/>
      </Element>
      <Element name="contact">
        <Contact/>
      </Element>
    </div>
  )
}

export default HomePage
