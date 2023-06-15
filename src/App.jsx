import React from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Find from "./components/find";
import Drive from "./components/drive";
import Luxury from "./components/luxury";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Find/>
      <Drive/>
      <Luxury/>
      <Footer/>
    </>
  );
}

export default App;
