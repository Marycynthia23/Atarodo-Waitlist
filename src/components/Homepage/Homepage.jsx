import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Howitworks from '../Howitworks/Howitworks';
import Pricing from '../Pricing/Pricing';
import Testimonals from '../Testimonals/Testimonals';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div>
       <Header/>
      <Hero/>
      <Features/>
      <Howitworks/>
      <Pricing/>
      <Testimonals/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default HomePage;