import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
     
    </main>
  );
};

export default App;
