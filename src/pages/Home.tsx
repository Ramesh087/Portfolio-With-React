import React from 'react';
import Header from '../components/Header.tsx';
import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Projects from '../components/Projects.tsx';
import Contact from '../components/Contact.tsx';
import Footer from '../components/Footer.tsx';

const Home: React.FC = () => {
  return (
    <main className="pt-16 w-full bg-white dark:bg-black text-black dark:text-white">
      <Header  />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;