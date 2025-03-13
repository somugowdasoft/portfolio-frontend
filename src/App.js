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
import { Toaster } from "react-hot-toast";
import Experience from './components/Experience';

const SectionWrapper = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
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
      className="text-center w-full"
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="text-white">
      <Toaster position="top-right" />
      <Navbar />

      {/* Hero Section (No animation) */}
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* Wrapped Sections */}
      {[
        { id: "about", Component: About },
        { id: "skills", Component: Skills },
        { id: "experience", Component: Experience },
        { id: "projects", Component: Projects },
        { id: "courses", Component: Courses },
        { id: "contact", Component: Contact },
      ].map(({ id, Component }) => (
        <section key={id} id={id} className="min-h-screen flex items-center justify-center">
          <SectionWrapper>
            <Component />
          </SectionWrapper>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default App;
