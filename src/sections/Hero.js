import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
const Hero = () => {
  const router = useRouter()
  return (
    <section className=' flex flex-col justify-center lg:flex-row md:justify-between items-center text-white pt-32'>
      <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay: 1 }}
      className=' lg:w-1/2 pr-8 text-center lg:text-start'>
	  
        <h1 className='text-6xl font-black '>OPTIPOS</h1>

        <p className='text-xl my-8'>Tailored POS Solutions for Your Unique Business Needs</p>
        <div className='text-xl flex flex-col lg:flex-row justify-center lg:justify-start items-center'>
          <button onClick={()=> router.push('#contact')} className='bg-purple rounded py-2 w-52 mb-4 lg:mb-0 lg:mr-12 hover:scale-95 transform transition '>Get A Free Quote</button>
          <button onClick={()=> router.push('#demo')} className='rounded border-2 border-purple py-2 w-52 hover:scale-95 transform transition'>Demo</button>
        </div>
      </motion.div>
      <motion.div
        initial={{x:100, opacity: 0 }}
        whileInView={{x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
       className=' lg:w-1/2 lg:pl-8 flex justify-center items-center mt-12 lg:mt-0'>
        <Image src="/hero-img.png" alt="hero image" width={600} height={600} />
      </motion.div>
    </section>
  );
};

export default Hero;
