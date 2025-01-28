import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast"

function SectionWrapper({ children, threshold = 0.2 }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false, // Animates every time the section comes into view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      }}
      className="text-center"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="text-white">
      <Toaster position="top-right" />
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <SectionWrapper>
          <About />
        </SectionWrapper>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <SectionWrapper>
          <Skills />
        </SectionWrapper>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
      </section>

      {/* Courses Section */}
      <section id="courses" className="min-h-screen flex items-center justify-center">
        <SectionWrapper>
          <Courses />
        </SectionWrapper>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </section>

      <Footer />
    </div>
  );
}

export default App;
