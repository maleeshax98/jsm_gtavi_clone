import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./Navbar";
import FirstVideo from "./components/FirstVideo";
import Json from "./components/Json";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
      <Json />
    </main>
  );
};

export default App;
