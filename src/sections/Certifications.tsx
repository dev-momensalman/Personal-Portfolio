import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Smartphone, BarChart3, Cpu, Calendar, Building2 } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  organizationType: string;
  year: string;
  credentialType: string;
  icon: typeof Smartphone;
  gradient: string;
  accentColor: string;
  description: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 'hybrid-flutter',
    name: 'Cross-Platform Mobile Development',
    issuer: 'Hybrid Training',
    organizationType: 'Professional Tech Academy',
    year: '2025',
    credentialType: 'Professional Certification',
    icon: Smartphone,
    gradient: 'from-[#00677d] to-[#00b4d8]',
    accentColor: '#00b4d8',
    description: 'Comprehensive specialization in production-grade mobile architectures, reactive state management, asynchronous programming, and clean modular code for Android & iOS.',
    skills: ['Flutter', 'Dart', 'BLoC Pattern', 'Clean Architecture', 'REST APIs', 'Cross-Platform'],
  },
  {
    id: 'microsoft-mcit-data',
    name: 'Web Data Analysis',
    issuer: 'Microsoft Egypt & MCIT',
    organizationType: 'Microsoft & Ministry of Communications',
    year: '2025',
    credentialType: 'Government & Enterprise Accreditation',
    icon: BarChart3,
    gradient: 'from-[#0284c7] to-[#38bdf8]',
    accentColor: '#0284c7',
    description: 'National digital empowerment initiative certified by Microsoft Egypt and MCIT. Focused on enterprise data analytics, data modeling, reporting dashboards, and actionable business intelligence.',
    skills: ['Power BI', 'Data Modeling', 'Data Visualization', 'Business Intelligence', 'Analytics'],
  },
  {
    id: 'eetc-scada',
    name: 'SCADA Systems & Control Engineering',
    issuer: 'EETC (Egyptian Electricity Transmission Co.)',
    organizationType: 'National Power Transmission Authority',
    year: '2025',
    credentialType: 'Engineering Certification',
    icon: Cpu,
    gradient: 'from-[#0f766e] to-[#2dd4bf]',
    accentColor: '#0f766e',
    description: 'Specialized industrial engineering accreditation in Supervisory Control and Data Acquisition (SCADA), real-time telemetry monitoring, industrial automation, and fail-safe network protocols.',
    skills: ['SCADA Systems', 'Industrial Automation', 'Telemetry', 'Control Systems', 'Hardware Protocols'],
  },
];

export default function Certifications() {
  const ref = useRef(null);

  return (
    <section id="certifications" className="relative py-16 sm:py-24 lg:py-32 bg-[#f5fafd] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,180,216,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,103,125,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 text-[#00677d] text-sm font-semibold tracking-wider uppercase mb-3 bg-[#e6f4f8] px-4 py-1.5 rounded-full border border-[#00b4d8]/20"
          >
            <ShieldCheck className="w-4 h-4 text-[#00677d]" />
            Certifications &amp; Credentials
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#171c1f] mb-4 tracking-tight"
          >
            Verified <span className="gradient-text">Accreditations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#3d494d] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Recognized industry certifications validating proficiency in cross-platform mobile development, enterprise data analytics, and embedded systems engineering.
          </motion.p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative flex flex-col justify-between rounded-3xl bg-white/90 border border-[#bcc9ce]/60 hover:border-[#00b4d8] shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-7 backdrop-blur-sm overflow-hidden"
              >
                {/* Top Subtle Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.gradient}`} />

                <div>
                  {/* Card Header: Icon + Year Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div
                      className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white shadow-md group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#e6f7f2] text-[#0f766e] border border-[#a7f3d0]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                        Verified
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#6d797e] mt-1 font-medium">
                        <Calendar className="w-3 h-3" />
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-[#171c1f] group-hover:text-[#00677d] transition-colors mb-2 leading-snug">
                    {cert.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-[#00677d] font-semibold mb-3">
                    <Building2 className="w-4 h-4 flex-shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#3d494d] leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Skills & Badges */}
                <div className="pt-4 border-t border-[#bcc9ce]/40">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6d797e] uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#00b4d8]" />
                    <span>Validated Competencies</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#f0f6f9] text-[#3d494d] font-medium border border-[#bcc9ce]/40 group-hover:border-[#00b4d8]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#6d797e] bg-white/70 px-5 py-2.5 rounded-full border border-[#bcc9ce]/50 shadow-xs">
            <Award className="w-4 h-4 text-[#00677d]" />
            <span>All credentials verified against official issuing authorities &amp; institutions.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
