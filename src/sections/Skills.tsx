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
    color: '#426dd8',
    description: 'Strong foundation in programming fundamentals',
  },
  {
    icon: Smartphone,
    title: 'Mobile Dev',
    skills: ['Flutter', 'Android', 'iOS'],
    color: '#b75cff',
    description: 'Cross-platform mobile development expertise',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Prototyping', 'User Research'],
    color: '#426dd8',
    description: 'Creating beautiful user experiences',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    skills: ['Power BI', 'SQL', 'Visualization'],
    color: '#b75cff',
    description: 'Data-driven decision making',
  },
  {
    icon: Cpu,
    title: 'Core Concepts',
    skills: ['DSA', 'Networks', 'Embedded'],
    color: '#426dd8',
    description: 'Solid computer science foundation',
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'VS Code', 'Android Studio'],
    color: '#b75cff',
    description: 'Professional development tools',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(66,109,216,0.05)_0%,transparent_60%)]" />

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
            className="text-[#426dd8] text-sm font-medium tracking-wider uppercase mb-4 block"
          >
            My Skills
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Technologies I <span className="gradient-text">Work With</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#acb7c1] max-w-2xl mx-auto text-base sm:text-lg"
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
              whileHover={{ y: -6, borderColor: `${category.color}40` }}
              className="group relative p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:bg-[#0d0d0d] transition-all duration-300"
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
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">{category.title}</h3>
                    <p className="text-xs text-[#666]">{category.description}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs sm:text-sm bg-[#111] border border-[#222] text-[#999] group-hover:border-[#333] group-hover:text-[#ccc] transition-colors"
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
