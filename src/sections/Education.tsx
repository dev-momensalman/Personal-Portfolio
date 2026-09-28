import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Laptop, CheckCircle } from 'lucide-react';

const education = {
  degree: 'Bachelor of Computer Engineering',
  institution: 'High Institute of Engineering and Technology (BHI)',
  location: 'El Behira, Egypt',
  period: '2023 – 2027',
  status: 'In Progress (Expected 2027)',
  description: 'Pursuing an engineering curriculum focused on modern software engineering, cross-platform mobile architectures, embedded microcontrollers, and computer network infrastructures.',
  coreAreas: [
    'Object-Oriented Programming (OOP) & Clean Code',
    'Data Structures & Algorithms',
    'Cross-Platform Mobile Application Development',
    'Embedded Systems & Hardware Interfacing',
    'Database Management & SQL Systems',
    'Computer Networks & Distributed Architecture',
  ],
  achievements: [
    'Active member and contributor in student technology communities',
    'Participant in competitive programming & hackathon challenges',
    'Consistent high academic standing in engineering coursework',
  ],
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-16 sm:py-24 lg:py-32 bg-[#f5fafd] overflow-hidden">
      {/* Background radial subtle accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,180,216,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-[#00677d] text-sm font-semibold tracking-wider uppercase mb-3 block"
          >
            Academic Foundation
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] mb-4 tracking-tight"
          >
            Engineering <span className="gradient-text">Education</span>
          </motion.h2>
          <p className="text-[#3d494d] max-w-2xl mx-auto text-base sm:text-lg">
            Solid theoretical and practical engineering foundation driving scalable software and mobile solutions.
          </p>
        </motion.div>

        {/* Education Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 sm:p-10 rounded-3xl bg-white/90 border border-[#bcc9ce]/60 shadow-sm hover:shadow-md transition-shadow backdrop-blur-md">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-6 pb-6 border-b border-[#bcc9ce]/40">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171c1f]">
                    {education.degree}
                  </h3>
                  <p className="text-[#00677d] font-semibold text-sm sm:text-base">{education.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs sm:text-sm text-[#6d797e]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f4f8] text-[#00677d] font-semibold border border-[#00b4d8]/20">
                  <Calendar className="w-3.5 h-3.5" />
                  {education.period}
                </div>
                <div className="inline-flex items-center gap-1.5 text-[#6d797e]">
                  <MapPin className="w-3.5 h-3.5" />
                  {education.location}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#3d494d] text-base leading-relaxed mb-8">
              {education.description}
            </p>

            {/* Grid of Coursework & Highlights */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Engineering Disciplines */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-[#00677d]" />
                  <h4 className="text-[#171c1f] font-bold text-sm uppercase tracking-wider">
                    Core Coursework &amp; Disciplines
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {education.coreAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-[#3d494d]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                      <span>{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-[#00677d]" />
                  <h4 className="text-[#171c1f] font-bold text-sm uppercase tracking-wider">
                    Key Academic Highlights
                  </h4>
                </div>
                <div className="space-y-3">
                  {education.achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="p-3.5 rounded-xl bg-[#eff4f7]/70 border border-[#bcc9ce]/40 flex items-start gap-3"
                    >
                      <Laptop className="w-4 h-4 text-[#00677d] mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-[#3d494d] leading-normal">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
