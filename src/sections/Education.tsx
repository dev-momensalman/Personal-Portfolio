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
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#f5fafd] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,180,216,0.06)_0%,transparent_50%)]" />

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
            Education
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] mb-4 tracking-tight"
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
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/80 border border-[#bcc9ce]/60 hover:border-[#00b4d8] transition-all duration-300 shadow-sm backdrop-blur-md">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171c1f] mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-[#3d494d] font-medium">{education.institution}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[#bcc9ce]/40">
                <div className="flex items-center gap-2 text-sm text-[#6d797e] font-medium">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#6d797e] font-medium">
                  <MapPin className="w-4 h-4" />
                  {education.location}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#3d494d] mb-6 leading-relaxed">
                {education.description}
              </p>

              {/* Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-[#00677d]" />
                  <span className="text-[#171c1f] font-bold text-sm">Highlights</span>
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
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] mt-2 flex-shrink-0" />
                      <span className="text-sm text-[#3d494d]">{achievement}</span>
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
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-white/80 border border-[#bcc9ce]/60 shadow-sm backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-[#00677d]" />
                <h3 className="text-[#171c1f] font-bold text-lg">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-[#eff4f7] border border-[#bcc9ce]/40 hover:border-[#00b4d8] transition-all"
                  >
                    <h4 className="text-[#171c1f] font-bold text-sm mb-1">{cert.name}</h4>
                    <div className="flex items-center justify-between text-xs text-[#6d797e]">
                      <span className="font-medium">{cert.issuer}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white font-semibold border border-[#bcc9ce]/40 text-[#00677d]">{cert.year}</span>
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
