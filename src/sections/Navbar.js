import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const currentRoute = router.asPath;


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 30) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className='hidden md:block'>
      {' '}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: -200, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className=" flex justify-between items-center py-4 px-4 max-w-[1400px] m-auto  absolute left-0 right-0 select-none"
          >
            <div>
              <Image
                src="/logo.png"
                alt="optipos logo"
                width={50}
                height={50}
              />
            </div>
            <nav className="text-white text-2xl">
              <ul className="flex justify-between items-center font-semibold">
                <li className="mx-2">
                  <Link href="/#about">About</Link>
                </li>
                <li className="mx-2">
                  <Link href="/#features">Features</Link>
                </li>
                <li className="mx-2">
                  <Link href="/#demo">Demo</Link>
                </li>
                <li className="mx-2">
                  <Link href="/#faq">FAQ</Link>
                </li>
                <li className="mx-2">
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {' '}
        {!show && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
			exit={{y: 200}}
            className="w-[700px] rounded-full bg-black flex justify-between items-center fixed left-0 right-0 m-auto bottom-10 z-50 py-3 px-5 select-none"
          >
            <div className="w-1/5">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="optipos logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <nav className="text-white text-xl w-4/5">
              <ul className="flex justify-between items-center font-semibold">
                <li
                  className={
                    currentRoute === '/#about'
                      ? 'bg-purple text-white py-1 px-3 rounded-full'
                      : 'mx-2'
                  }
                >
                  <Link href="/#about">About</Link>
                </li>
                <li
                  className={
                    currentRoute === '/#features'
                      ? 'bg-purple text-white py-1 px-3 rounded-full'
                      : 'mx-2'
                  }
                >
                  <Link href="/#features">Features</Link>
                </li>
                <li
                  className={
                    currentRoute === '/#demo'
                      ? 'bg-purple text-white py-1 px-3 rounded-full'
                      : 'mx-2'
                  }
                >
                  <Link href="/#demo">Demo</Link>
                </li>
                <li
                  className={
                    currentRoute === '/#faq'
                      ? 'bg-purple text-white py-1 px-3 rounded-full'
                      : 'mx-2'
                  }
                >
                  <Link href="/#faq">FAQ</Link>
                </li>
                <li
                  className={
                    currentRoute === '/#contact'
                      ? 'bg-purple text-white py-1 px-3 rounded-full'
                      : 'mx-2'
                  }
                >
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
