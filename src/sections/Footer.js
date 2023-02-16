import { motion, AnimatePresence } from 'framer-motion';
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 1 }}
      className="max-w-[1400px] m-auto py-20 mb-14 text-white text-center"
    >
      <p>Designed and built by Luis Gonzalez</p>
      <p>© 2023 Elegant Designs</p>
    </motion.footer>
  );
};

export default Footer;
