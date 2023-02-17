import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  function openMenu() {
    setMenuActive(!menuActive);
  }

  function closeMenu() {
    setMenuActive(false);
  }

  return (
    <div className="md:hidden w-screen  fixed top-0 left-0 z-20 pt-4 ">
      <button
        onClick={openMenu}
        className="bg-white w-12 h-12 rounded-full flex justify-center items-center flex-col cursor-pointer absolute right-8 z-30"
      >
        <div
          className={`w-7 h-1 bg-purple rounded ${
            menuActive
              ? 'transform transition duration-500 ease-in-out rotate-[225deg] translate-y-1'
              : 'transform transition duration-500 ease-in-out rotate-[0deg]'
          }`}
        ></div>
        {!menuActive && (
          <AnimatePresence>
            <motion.div
              key="menu"
              initial={{x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              exit={{ x: -100, opacity: 0 }}
              className={`w-7 h-1 bg-purple my-1 rounded`}
            ></motion.div>
          </AnimatePresence>
        )}

        <div
          className={`w-7 h-1 bg-purple rounded ${
            menuActive
              ? 'transform transition duration-500 ease-in-out rotate-[-225deg] '
              : 'transform transition duration-500 ease-in-out rotate-[0deg]'
          }`}
        ></div>
      </button>

      <AnimatePresence>
        {menuActive && (
          <div onClick={closeMenu} className=" w-screen h-screen">
            <motion.nav
              key="status"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: '0', opacity: 1 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              exit={{ x: '100%', opacity: 0 }}
              className="text-white text-2xl flex justify-end pr-20 items-center h-screen w-2/3 absolute top-0 right-0 z-20 bg-white"
            >
              <ul className="flex items-end flex-col font-medium text-black">
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="mx-2 my-4"
                >
                  <Link href="/#about">About</Link>
                </motion.li>
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="mx-2 my-4 text-right"
                >
                  <Link href="/#features">Features</Link>
                </motion.li>
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="mx-2 my-4"
                >
                  <Link href="/#demo">Demo</Link>
                </motion.li>
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="mx-2 my-4"
                >
                  <Link href="/#faq">FAQ</Link>
                </motion.li>
                <motion.li
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="mx-2 my-4"
                >
                  <Link href="/#contact">Contact</Link>
                </motion.li>
              </ul>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
