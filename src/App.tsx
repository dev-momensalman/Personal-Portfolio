import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import { Toaster } from 'sonner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-[#f5fafd] text-[#171c1f]"
        >
          <CustomCursor />
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
