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
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(183,92,255,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(66,109,216,0.06)_0%,transparent_50%)]" />

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
            className="inline-flex items-center gap-2 text-[#426dd8] text-sm font-medium tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Crafting Digital{' '}
            <span className="gradient-text">Experiences</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[#acb7c1] max-w-2xl mx-auto text-base sm:text-lg"
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
            <div className="space-y-4 text-[#acb7c1] leading-relaxed mb-8">
              <p className="text-base sm:text-lg">
                I'm a <span className="text-white font-medium">Mobile App Developer</span> and{' '}
                <span className="text-white font-medium">Computer Engineering student</span> with a passion
                for creating innovative mobile solutions that make a real impact.
              </p>
              <p>
                With expertise in <span className="text-white font-medium">Flutter and Dart</span>,
                I specialize in developing cross-platform mobile applications that deliver seamless
                experiences on both Android and iOS platforms.
              </p>
              <p>
                Beyond mobile development, I'm skilled in <span className="text-white font-medium">data analysis
                  and visualization</span> using Power BI, enabling me to make data-driven decisions
                and create applications that truly meet user needs.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a]"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">2+</div>
                <div className="text-xs sm:text-sm text-[#666] mt-1">Years Exp.</div>
              </div>
              <div className="text-center border-x border-[#1a1a1a]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">5+</div>
                <div className="text-xs sm:text-sm text-[#666] mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">3+</div>
                <div className="text-xs sm:text-sm text-[#666] mt-1">Certs</div>
              </div>
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
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(66, 109, 216, 0.4)' }}
                className="group p-5 sm:p-6 rounded-2xl bg-[#0a0a0a] border border-[#1a1a1a] hover:bg-[#111] transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
