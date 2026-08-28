import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, BookOpen, Cloud, ArrowUpRight, Bluetooth } from 'lucide-react';

const GooglePlayIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.61 2.18A1.7 1.7 0 0 0 3 3.49v17.02c0 .5.22.96.61 1.31l9.72-9.82L3.61 2.18Z" />
    <path d="m14.02 12 2.98-3-11.1-6.32c-.35-.2-.7-.24-1.02-.14L14.02 12Z" />
    <path d="M17 15 14.02 12l-9.14 9.46c.32.1.67.06 1.02-.14L17 15Z" />
    <path d="m18.05 9.6-1.05-.6-2.98 3 2.98 3 1.05-.6c1.27-.72 1.27-4.08 0-4.8Z" />
  </svg>
);

const projects = [
  {
    title: 'Khaleek Momen',
    subtitle: 'Islamic Audio Hub',
    description: 'A comprehensive Islamic audio platform built with Flutter featuring Quran recitation, prayer times, Adhan scheduling, live radio, daily Azkar, and a Qibla compass with full Arabic/English localization.',
    icon: BookOpen,
    tech: ['Flutter', 'Dart', 'Provider', 'Hive'],
    features: ['Quran recitation with 100+ reciters', 'Prayer times & Adhan scheduler', 'Daily Azkar with interactive counters', 'Qibla compass & Islamic radio'],
    github: 'https://github.com/dev-momensalman/KhaleekMomen',
    demo: 'https://play.google.com/store/apps/details?id=com.islamicaudiohub.islamic_audio_hub&pli=1',
    demoLabel: 'Google Play',
    demoType: 'google-play',
    image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&q=80&w=2070',
    color: '#00677d',
    gradient: 'from-[#00677d] to-[#00b4d8]',
  },
  {
    title: 'Weather App',
    subtitle: 'Real-time Weather',
    description: 'A sleek weather application providing real-time data using BLoC pattern for efficient state management and clean architecture.',
    icon: Cloud,
    tech: ['Flutter', 'Dart', 'BLoC', 'REST API'],
    features: ['Real-time weather data', 'Location-based forecasts', 'BLoC State Management', 'Error handling'],
    github: 'https://github.com/dev-momensalman/Weather_App',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2070',
    color: '#00b4d8',
    gradient: 'from-[#00b4d8] to-[#4cd6fb]',
  },
  {
    title: 'IOT Controller',
    subtitle: 'Bluetooth Device Control',
    description: 'A Flutter Bluetooth controller for embedded systems and smart devices, with directional commands, speed controls, mode switching, and a clean control-focused interface.',
    icon: Bluetooth,
    tech: ['Flutter', 'Dart', 'Bluetooth', 'Provider'],
    features: ['Bluetooth Classic connection', 'Directional movement controls', 'Speed increase/decrease commands', 'Manual and auto mode switching'],
    github: 'https://github.com/dev-momensalman/IOT_Controller',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070',
    color: '#00677d',
    gradient: 'from-[#00677d] to-[#00b4d8]',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-12 sm:py-28 lg:py-32 bg-[#f5fafd] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#00677d] text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] mb-4 tracking-tight"
          >
            Featured <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#3d494d] max-w-2xl mx-auto text-base sm:text-lg"
          >
            Projects that showcase my skills and passion for mobile development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: any; index: number; isInView: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.2 + index * 0.15,
        type: 'spring' as const,
        stiffness: 50,
        damping: 15
      }}
      className="group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="h-full rounded-[2rem] bg-white/90 border border-[#bcc9ce]/60 overflow-hidden hover:border-[#00b4d8] transition-colors duration-500 relative shadow-md backdrop-blur-md flex flex-col"
        style={{
          transform: "translateZ(40px)",
        }}
      >
        {/* Project Header */}
        <div
          className={`relative h-44 sm:h-52 lg:h-56 overflow-hidden bg-gradient-to-br ${project.gradient}`}
        >
          {/* Project Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#171c1f]/30 group-hover:bg-[#171c1f]/10 transition-colors duration-500" />
          </div>

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Icon Badge (Small) */}
          <div className="absolute top-5 left-5">
            <motion.div
              className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 10 }}
              style={{ transform: "translateZ(70px)" }}
            >
              <project.icon className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

          {/* View Project Button */}
          {project.demo && (
            <motion.a
              href={project.demo}
              className="absolute top-5 right-5 p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              {project.demoType === 'google-play' ? <GooglePlayIcon className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
            </motion.a>
          )}
        </div>

        {/* Content */}
        <div className="p-5 lg:p-6 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(35px)" }}>
          <div>
            {/* Title */}
            <div className="mb-3">
              <h3 className="text-xl lg:text-2xl font-bold text-[#171c1f] group-hover:text-[#00677d] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[#6d797e] font-semibold tracking-wide mt-1 uppercase">{project.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-[#3d494d] text-sm mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Chips - Pill Shaped */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00414f]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-7">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-[#3d494d]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <motion.a
              href={project.github}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border-2 border-[#171c1f] text-[#171c1f] text-xs font-semibold hover:bg-[#171c1f] hover:text-white transition-all shadow-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            {project.demo && (
              <motion.a
                href={project.demo}
                className={project.demoType === 'google-play'
                  ? "flex-1 relative overflow-hidden flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#00C853] via-[#00AEEF] to-[#A142F4] text-white text-xs font-bold shadow-md ring-1 ring-white/20 transition-all"
                  : "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl gradient-bg text-white text-xs font-semibold glow shadow-md"
                }
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {project.demoType === 'google-play' ? (
                  <>
                    <GooglePlayIcon className="relative w-4 h-4" />
                    <span className="relative">Google Play</span>
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-4 h-4" />
                    {project.demoLabel ?? 'Live Demo'}
                  </>
                )}
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
