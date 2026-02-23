import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const education = {
  degree: 'Bachelor of Computer Engineering',
  institution: 'High Institute of Engineering and Technology (BHI)',
  location: 'El Behira, Egypt',
  period: '2023 – 2027',
  description: 'Currently pursuing a comprehensive degree in Computer Engineering, focusing on software development, embedded systems, and computer networks.',
  achievements: [
    'Active member of student tech community',
    'Participated in coding competitions',
    'Strong academic performance',
  ],
};

const certifications = [
  {
    name: 'Cross-Platform Mobile Development',
    issuer: 'Hybrid Training',
    year: '2025',
  },
  {
    name: 'Web Data Analysis',
    issuer: 'Microsoft Egypt & MCIT',
    year: '2025',
  },
  {
    name: 'SCADA Systems',
    issuer: 'EETC',
    year: '2025',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(183,92,255,0.06)_0%,transparent_50%)]" />

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
            Education
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Academic <span className="gradient-text">Background</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-[#999]">{education.institution}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[#1a1a1a]">
                <div className="flex items-center gap-2 text-sm text-[#666]">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#666]">
                  <MapPin className="w-4 h-4" />
                  {education.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#888] mb-6 leading-relaxed">
                {education.description}
              </p>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-[#426dd8]" />
                  <span className="text-white font-medium text-sm">Highlights</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-3">
                  {education.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#b75cff] mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#666]">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#1a1a1a]">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-[#b75cff]" />
                <h3 className="text-white font-semibold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-[#111] border border-[#1a1a1a] hover:border-[#333] transition-all"
                  >
                    <h4 className="text-white font-medium text-sm mb-1">{cert.name}</h4>
                    <div className="flex items-center justify-between text-xs text-[#666]">
                      <span>{cert.issuer}</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#1a1a1a]">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
