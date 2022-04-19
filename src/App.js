import React from "react";
import NavBar from "..components/1NavBar"
import Banner from "..components/2Banner"
import LatestOffers from "..components/3LatestOffers"
import WhyChoose from "..components/4WhyChoose";
import WhoMakes from "..components/5WhoMakes";
import OurPartners from "..components/6OurPartners";
import SurpriseSomeone from "..components/7SurpriseSomeone";
import Carousel from "..components/8Carousel";
import TellAFriend from "..components/9TellAFriend";
import Footer from "..components/10Footer";


const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <LatestOffers/>
      <WhyChoose/>
      <WhoMakes/> 
      <OurPartners/> 
      <SurpriseSomeone/>
      <Carousel/>
      <TellAFriend/>
      <Footer />
    </div>
  );
};

export default App;
