import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Cross-Platform Mobile Developer',
    company: 'Hybrid Training Program',
    location: 'Alexandria',
    type: 'Trainee',
    period: 'Dec 2025 – Present',
    description: [
      'Developed cross-platform apps using Flutter & Dart',
      'Built Android & iOS applications with modern UI/UX',
      'Collaborated on app ideas and prototypes',
      'Enhanced soft skills through career sessions',
    ],
    current: true,
  },
  {
    title: 'Data Analyst(Power BI)',
    company: 'MCIT – "Tawar We Ghayar"',
    location: 'Remote',
    type: 'Trainee',
    period: 'Oct 2025',
    description: [
      'Completed training by Microsoft Egypt & MCIT',
      'Analyzed data using Power BI for insights',
      'Created visualizations for decision making',
    ],
    current: false,
  },
  {
    title: 'Operations & Control Sector',
    company: 'EETC',
    location: 'Ismailia',
    type: 'Trainee',
    period: 'Jul – Aug 2025',
    description: [
      'Learned SCADA systems basics',
      'Observed industrial communication workflows',
      'Studied electricity transmission systems',
    ],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-12 sm:py-28 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(66,109,216,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            My Professional <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#acb7c1] max-w-2xl mx-auto text-base sm:text-lg"
          >
            Building expertise through hands-on training and real-world projects
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#426dd8] via-[#b75cff] to-[#426dd8]" />

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Desktop Layout */}
                <div className={`hidden lg:flex items-start gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <ExperienceCard exp={exp} />
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className={`w-4 h-4 rounded-full border-4 border-black ${exp.current ? 'bg-green-500' : 'bg-[#426dd8]'}`}
                      animate={exp.current ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Empty Space */}
                  <div className="w-[calc(50%-2rem)]" />
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                  <div className="flex gap-4">
                    {/* Timeline Line & Dot */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`w-3 h-3 rounded-full border-2 border-black flex-shrink-0 ${exp.current ? 'bg-green-500' : 'bg-[#426dd8]'}`}
                        animate={exp.current ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {index < experiences.length - 1 && (
                        <div className="w-px flex-1 bg-gradient-to-b from-[#426dd8] to-[#b75cff] mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <ExperienceCard exp={exp} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-all duration-300 group">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg group-hover:text-[#426dd8] transition-colors">
              {exp.title}
            </h3>
            <p className="text-[#999] text-sm">{exp.company}</p>
          </div>
        </div>
        {exp.current && (
          <span className="self-start px-2.5 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">
            Current
          </span>
        )}
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-3 mb-4 text-xs sm:text-sm text-[#666]">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {exp.period}
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          {exp.location}
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-2">
        {exp.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#888]">
            <span className="w-1 h-1 rounded-full bg-[#426dd8] mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
