import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2"

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Footer />
      <Article1/>
      <Article2/>
    </div>
  );
};

export default App;
