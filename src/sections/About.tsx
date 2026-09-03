import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Palette, Database, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform apps for Android & iOS using Flutter',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Well-structured, maintainable, and scalable code',
  },
  {
    icon: Palette,
    title: 'Modern UI/UX',
    description: 'Beautiful, intuitive, and user-friendly interfaces',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Power BI & data visualization expertise',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-12 sm:py-28 lg:py-32 bg-[#f5fafd] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,180,216,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,103,125,0.08)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center gap-2 text-[#00677d] text-sm font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] mb-4 tracking-tight"
          >
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[#3d494d] max-w-2xl mx-auto text-base sm:text-lg"
          >
            A passionate developer dedicated to building innovative mobile solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Description */}
            <div className="space-y-4 text-[#3d494d] leading-relaxed mb-8">
              <p className="text-base sm:text-lg">
                I'm a <span className="text-[#171c1f] font-semibold">Mobile App Developer</span> and{' '}
                <span className="text-[#171c1f] font-semibold">Computer Engineering student</span> with a passion
                for creating innovative mobile solutions that make a real impact.
              </p>
              <p>
                With expertise in <span className="text-[#00677d] font-semibold">Flutter and Dart</span>,
                I specialize in developing cross-platform mobile applications that deliver seamless
                experiences on both Android and iOS platforms.
              </p>
              <p>
                Beyond mobile development, I'm skilled in <span className="text-[#171c1f] font-semibold">data analysis
                  and visualization</span> using Power BI, enabling me to make data-driven decisions
                and create applications that truly meet user needs.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/80 border border-[#bcc9ce]/60 shadow-sm backdrop-blur-md"
            >
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="text-center cursor-default"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">2+</div>
                <div className="text-xs sm:text-sm text-[#6d797e] font-medium mt-1">Years Exp.</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="text-center border-x border-[#bcc9ce]/60 cursor-default"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">5+</div>
                <div className="text-xs sm:text-sm text-[#6d797e] font-medium mt-1">Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="text-center cursor-default"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">3+</div>
                <div className="text-xs sm:text-sm text-[#6d797e] font-medium mt-1">Certs</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.3 + index * 0.08,
                  type: 'spring',
                  stiffness: 260,
                  damping: 22
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-5 sm:p-6 rounded-2xl bg-white/80 border border-[#bcc9ce]/60 hover:border-[#00b4d8]/60 hover:bg-white shadow-sm hover:shadow-md transition-colors duration-300 backdrop-blur-md cursor-default"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-[#171c1f] font-bold mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#3d494d] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
