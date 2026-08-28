import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

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

  const cvUrl = 'https://drive.google.com/file/d/1iSkgUMDmavoraUyZL9Ne2aEZzdyefxoP/view?usp=drive_link';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#f5fafd]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5fafd] via-[#eff4f7] to-[#e9eff1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,180,216,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,103,125,0.08)_0%,transparent_50%)]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(23,28,31,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(23,28,31,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Orbs - with Parallax */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#00b4d8]/15 blur-3xl p-10"
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
        className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-[#00677d]/10 blur-3xl"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#bcc9ce] text-sm font-medium text-[#3d494d] shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold mb-4 text-[#171c1f] tracking-tight"
            >
              <span>Hi, I'm </span>
              <span className="gradient-text">Momen Salman</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-[#3d494d] font-semibold mb-6"
            >
              Mobile App Developer
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#3d494d] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build <span className="text-[#171c1f] font-semibold">cross-platform mobile apps</span> with{' '}
              <span className="text-[#00677d] font-semibold">Flutter</span> &{' '}
              <span className="text-[#00677d] font-semibold">Dart</span>.
              Passionate about creating clean UI and exceptional user experiences.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text">2+</div>
                <div className="text-sm font-medium text-[#3d494d]">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text">5+</div>
                <div className="text-sm font-medium text-[#3d494d]">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold gradient-text">3+</div>
                <div className="text-sm font-medium text-[#3d494d]">Certifications</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full gradient-bg text-white font-semibold flex items-center justify-center gap-2 glow shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </motion.button>
              <motion.a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border-2 border-[#00677d] text-[#00677d] font-semibold hover:bg-[#00677d] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border-2 border-[#171c1f] text-[#171c1f] font-semibold hover:bg-[#171c1f] hover:text-white transition-all shadow-sm"
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
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00677d] to-[#00b4d8] blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full p-1.5 sm:p-2 bg-gradient-to-br from-[#00677d] via-[#00b4d8] to-[#4cd6fb] shadow-xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white relative ring-2 ring-white">
                    {/* Inner Shadow */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.15)] z-10 pointer-events-none" />

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
                  className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-2 sm:border-4 border-white flex items-center justify-center z-20 shadow-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-full h-full rounded-full bg-emerald-500 animate-pulse" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00b4d8]/20 border border-[#00b4d8]/40 glass"
                  animate={{ rotate: [0, 90, 0], y: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#00677d]/20 border border-[#00677d]/40 glass"
                  animate={{ scale: [1, 1.3, 1], x: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                />
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
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[#bcc9ce] flex items-start justify-center p-1.5 sm:p-2 cursor-pointer bg-white/50 backdrop-blur-sm"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#about')}
        >
          <motion.div
            className="w-1 h-1.5 sm:w-1.5 sm:h-2 rounded-full bg-[#00677d]"
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
      className="p-3.5 rounded-xl bg-white border border-[#bcc9ce] text-[#3d494d] hover:text-[#00677d] hover:border-[#00b4d8] hover:bg-[#eff4f7] transition-all relative group shadow-sm"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={20} />
      <div className="absolute inset-0 rounded-xl bg-[#00b4d8]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.a>
  );
}
