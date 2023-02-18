import React, { useState } from 'react';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

const Demo = () => {
  const [showDemo, setShowDemo] = useState(false);
  function handleShowDemo() {
    setShowDemo(true);
  }

  function handleCloseDemo() {
    setShowDemo(false);
  }

  return (
    <section id="demo" className="">
      {!showDemo && (
        <button
          onClick={handleShowDemo}
          className="bg-purple rounded py-2 w-48 text-xl animate-bounce "
        >
          Demo
        </button>
      )}

      {showDemo && (
        <div className="bg-white text-dark rounded w-full px-4 py-6 relative">
          <button
            onClick={handleCloseDemo}
            className="absolute top-0 right-0 text-4xl text-dark cursor-pointer hover:text-red-900"
          >
            {' '}
            <AiFillCloseCircle />{' '}
          </button>
          <h3 className="text-start mb-2">Please note that:</h3>
          <ul className="text-start list-disc list-inside">
            <li className="mb-2">The demo website contains fake data.</li>
            <li className="mb-2">
              Large screens are recommended for a better navigation experience
              due to the presence of graphs and tables.
            </li>
            <li className="mb-2">
              The credentials provided are not for an admin user. To log in as
              an admin, please contact us.
            </li>
            <li className="mb-2">
              Some features are unavailable for non Admin users.
              Cannot delete/edit products, customers, orders, users, or
              grant/remove permissions.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex mb-2 md:mb-0 md:mr-4">
              <p className="mr-2">
                {' '}
                <b className='font-semibold'>EMAIL:</b>
              </p>
              <CopyToClipboard text={'celiasmith@gmail.com'}>
                <p className="cursor-copy hover:text-purple">celiasmith@gmail.com</p>
              </CopyToClipboard>
            </div>
            <div className="flex mr-4">
              <p className="mr-2">
                <b className='font-semibold'>PASSWORD:</b>{' '}
              </p>
              <CopyToClipboard text={'fakepass'}>
                <p className="cursor-copy hover:text-purple">fakepass</p>
              </CopyToClipboard>
            </div>
          </div>
          <Link
            href="https://store-dashboard-two.vercel.app/login"
            target="_blank"
            rel="noopener"
            className="flex justify-center items-center m-auto bg-purple rounded my-4 py-2 w-52 text-xl text-white hover:scale-95 transform transition duration-y"
          >
            Demo Website <BsFillArrowUpRightSquareFill className="ml-3" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Demo;
