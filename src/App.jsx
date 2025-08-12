import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import StarsBackground from './components/StarsBackground';
import './App.css'
import CertificationsAndSkills from './components/CertificationsAndSkills';

export default function App() {
  return (
    <>
      <Navbar />
      <StarsBackground />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Projects />
      <CertificationsAndSkills/>
      <Contact />
      <Footer />
    </>
   
  );
}
