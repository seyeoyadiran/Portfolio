import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <StarsBackground />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
   
  );
}
