import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Carrusel from "./components/Carrusel";

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Carrusel/> 
      <Footer />
    </div>
  );
};

export default App;
