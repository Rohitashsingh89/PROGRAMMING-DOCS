import React from 'react';
import Footer from '../IndexSection/Footer';
import Navbar from '../IndexSection/Navbar';
import DocsSection from './DocsSection';
import Hero from './Hero';
import Launch from './Launch';

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <DocsSection/>
        <Launch/>
        <Footer />
    </>
  )
}

export default Home;