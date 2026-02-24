import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers, Cloud, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'To-Do Manager',
    subtitle: 'Task Management App',
    description: 'A comprehensive cross-platform mobile application for managing daily tasks efficiently with local data persistence.',
    icon: Layers,
    tech: ['Flutter', 'Dart', 'Provider'],
    features: [
      'Create, edit & delete tasks',
      'Task categorization',
      'Due date reminders',
      'Local data storage',
    ],
    github: 'https://github.com/dev-momensalman/ToDo_List',
    demo: 'https://dev-momensalman.github.io/Personal-Portfolio/',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072',
    color: '#426dd8',
    gradient: 'from-[#426dd8] to-[#5a8af0]',
  },
  {
    title: 'Weather App',
    subtitle: 'Real-time Weather',
    description: 'A sleek weather application providing real-time data using BLoC pattern for efficient state management and clean architecture.',
    icon: Cloud,
    tech: ['Flutter', 'Dart', 'BLoC', 'REST API'],
    features: [
      'Real-time weather data',
      'Location-based forecasts',
      'BLoC State Management',
      'Error handling',
    ],
    github: 'https://github.com/dev-momensalman/Weather_App',
    demo: 'https://dev-momensalman.github.io/Personal-Portfolio/',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2070',
    color: '#b75cff',
    gradient: 'from-[#b75cff] to-[#d48aff]',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(66,109,216,0.05)_0%,transparent_60%)]" />

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
            className="text-[#426dd8] text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Featured <span className="gradient-text">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#acb7c1] max-w-2xl mx-auto text-base sm:text-lg"
          >
            Projects that showcase my skills and passion for mobile development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

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
        delay: 0.2 + index * 0.2,
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
        className="h-full rounded-[2.5rem] bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden hover:border-[#333] transition-colors duration-500 relative"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        {/* Project Header */}
        <div
          className={`relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br ${project.gradient}`}
        >
          {/* Project Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          </div>

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Icon Badge (Small) */}
          <div className="absolute top-6 left-6">
            <motion.div
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring' as const, stiffness: 300, damping: 10 }}
              style={{ transform: "translateZ(80px)" }}
            >
              <project.icon className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

          {/* View Project Button */}
          <motion.a
            href={project.demo}
            className="absolute top-6 right-6 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.a>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10" style={{ transform: "translateZ(40px)" }}>
          {/* Title */}
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#426dd8] transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-[#666] font-medium tracking-wide mt-1 uppercase">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-[#888] text-base mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs bg-[#111] border border-[#222] text-[#999] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul className="space-y-2.5 mb-10">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#777]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#426dd8] mt-1.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#111] border border-[#222] text-white text-sm font-semibold hover:bg-[#1a1a1a] hover:border-[#333] transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4.5 h-4.5" />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl gradient-bg text-white text-sm font-semibold glow shadow-lg shadow-[#426dd8]/20"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-4.5 h-4.5" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
