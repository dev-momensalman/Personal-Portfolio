import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Cpu,
  Wrench,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming',
    skills: ['C++', 'Dart', 'OOP'],
    color: '#00677d',
    description: 'Strong foundation in programming fundamentals',
  },
  {
    icon: Smartphone,
    title: 'Mobile Dev',
    skills: ['Flutter', 'Android', 'iOS'],
    color: '#00b4d8',
    description: 'Cross-platform mobile development expertise',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Prototyping', 'User Research'],
    color: '#00677d',
    description: 'Creating beautiful user experiences',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    skills: ['Power BI', 'SQL', 'Visualization'],
    color: '#00b4d8',
    description: 'Data-driven decision making',
  },
  {
    icon: Cpu,
    title: 'Core Concepts',
    skills: ['DSA', 'Networks', 'Embedded'],
    color: '#00677d',
    description: 'Solid computer science foundation',
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'VS Code', 'Android Studio'],
    color: '#00b4d8',
    description: 'Professional development tools',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-12 sm:py-28 lg:py-32 bg-[#f5fafd] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.06)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#00677d] text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            My Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] mb-4 tracking-tight"
          >
            Technologies I <span className="gradient-text">Work With</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#3d494d] max-w-2xl mx-auto text-base sm:text-lg"
          >
            A comprehensive toolkit for building exceptional mobile applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: `${category.color}` }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-white/80 border border-[#bcc9ce]/60 hover:bg-white shadow-sm transition-all duration-300 backdrop-blur-md"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.color}15 0%, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Icon & Title Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="text-[#171c1f] font-bold text-sm sm:text-base">{category.title}</h3>
                    <p className="text-xs text-[#6d797e]">{category.description}</p>
                  </div>
                </div>

                {/* Skills Chips - Pill Shaped per specification */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00414f] group-hover:border-[#00677d] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
