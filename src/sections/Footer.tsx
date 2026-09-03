import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/dev-momensalman', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/momensalman', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.me/201101029309', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:momensalman.dev@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 sm:py-20 bg-[#e9eff1] border-t border-[#bcc9ce]/60">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,180,216,0.08)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-2xl sm:text-3xl font-extrabold gradient-text">Momen.</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#3d494d] font-medium text-center mb-8 text-sm sm:text-base"
          >
            Mobile App Developer | Flutter & Dart Enthusiast
          </motion.p>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-semibold text-[#3d494d] hover:text-[#00677d] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 mb-12"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-[#bcc9ce] text-[#3d494d] hover:text-[#00677d] hover:border-[#00b4d8] hover:bg-[#eff4f7] transition-all shadow-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-[#bcc9ce]/50 mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xs sm:text-sm text-[#6d797e] font-medium flex items-center gap-1.5"
            >
              <Code2 className="w-4 h-4 text-[#00677d]" />
              <span>
                Designed & Built from scratch by{' '}
                <span className="font-semibold text-[#171c1f]">Momen Salman</span> • © 2025
              </span>
            </motion.p>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3d494d] hover:text-[#00677d] transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
