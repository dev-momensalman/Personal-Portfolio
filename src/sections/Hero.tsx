import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 60,
      damping: 15,
      delay: 0.4,
    },
  },
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const orbX = useTransform(springX, [-800, 800], [-30, 30]);
  const orbY = useTransform(springY, [-800, 800], [-30, 30]);
  const orb2X = useTransform(springX, [-800, 800], [40, -40]);
  const orb2Y = useTransform(springY, [-800, 800], [40, -40]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050510] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(66,109,216,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(183,92,255,0.08)_0%,transparent_50%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Orbs - with Parallax */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#426dd8]/10 blur-3xl p-10"
        style={{ x: orbX, y: orbY }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-[#b75cff]/8 blur-3xl"
        style={{ x: orb2X, y: orb2Y }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-[#222] text-sm text-[#acb7c1]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Momen Salman</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#acb7c1] font-medium mb-6"
            >
              Mobile App Developer
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#acb7c1] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build <span className="text-white font-medium">cross-platform mobile apps</span> with{' '}
              <span className="text-white font-medium">Flutter</span> &{' '}
              <span className="text-white font-medium">Dart</span>.
              Passionate about creating clean UI and exceptional user experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">2+</div>
                <div className="text-sm text-[#acb7c1]">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-[#acb7c1]">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-[#acb7c1]">Certifications</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full gradient-bg text-white font-medium flex items-center justify-center gap-2 glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1a1a1a] border border-[#333] text-white font-medium hover:bg-[#222] hover:border-[#444] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <SocialLink href="https://github.com/dev-momensalman" icon={Github} />
              <SocialLink href="https://linkedin.com/in/momensalman" icon={Linkedin} />
              <SocialLink href="mailto:momensalman.dev@gmail.com" icon={Mail} />
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group/image">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#426dd8] to-[#b75cff] blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full p-1.5 sm:p-2 bg-gradient-to-br from-[#426dd8] via-[#7c4dff] to-[#b75cff]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a] relative ring-1 ring-white/10">
                    {/* Inner Shadow */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] z-10 pointer-events-none" />

                    {/* Profile Image */}
                    <motion.img
                      src={`${import.meta.env.BASE_URL}profile.jpg`}
                      alt="Momen Salman - Mobile App Developer"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                {/* Status Indicator */}
                <motion.div
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 border-2 sm:border-4 border-black flex items-center justify-center z-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-full h-full rounded-full bg-green-500 animate-pulse" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#426dd8]/20 border border-[#426dd8]/30 glass"
                  animate={{ rotate: [0, 90, 0], y: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#b75cff]/20 border border-[#b75cff]/30 glass"
                  animate={{ scale: [1, 1.3, 1], x: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </motion.div>

              {/* Tech Stack Tags */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-8 flex gap-2 z-20"
              >
                <div className="px-4 py-2 rounded-full glass text-xs sm:text-sm text-[#acb7c1] whitespace-nowrap glow">
                  Flutter
                </div>
                <div className="px-4 py-2 rounded-full glass text-xs sm:text-sm text-[#acb7c1] whitespace-nowrap glow">
                  Dart
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[#333] flex items-start justify-center p-1.5 sm:p-2 cursor-pointer"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#about')}
        >
          <motion.div
            className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full bg-[#426dd8]"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a] text-[#acb7c1] hover:text-white hover:border-[#426dd8] hover:bg-[#111] transition-all relative group"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={20} />
      <div className="absolute inset-0 rounded-xl bg-[#426dd8]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}
