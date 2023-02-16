import { BsCheckLg } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
const EmailSuccess = () => {
  return (
    <motion.div
      initial={{ scaleZ: 0.3, opacity: 0 }}
      animate={{ scaleZ: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-28 h-28 rounded-full bg-green flex justify-center items-center text-[4rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
    >
      <motion.div
        initial={{ scaleZ: 0.3, opacity: 0 }}
        animate={{ scaleZ: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className=""
      >
        <BsCheckLg />
      </motion.div>
    </motion.div>
  );
};

export default EmailSuccess;
