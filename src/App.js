import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WithFriends from "./components/WithFriends";
import Banner from "./components/Banner";
import UltimasOfertas from "./components/UltimasOfertas";
import QuienHace from "./components/QuienHace"
import PorqueElegir from "./components/PorqueElegir"

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <UltimasOfertas/>
      <PorqueElegir/>
      <QuienHace/>
      <WithFriends />
      <Footer />
    </div>
  );
};

export default App;
