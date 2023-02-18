import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BsReception4,
  BsPrinterFill,
  BsFillCreditCardFill,
  BsFillCreditCard2FrontFill,
  BsLink45Deg,
} from 'react-icons/bs';
const About = () => {
  return (
    <section id="about" className="">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="text-4xl"
      >
        About OPTIPOS
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
      >
        OPTIPOS is a point of sale (POS) software designed for retail
        businesses. It is a comprehensive solution that helps companies manage
        inventory, process sales transactions, and track customer and product
        information. OPTIPOS also offers features such as reporting, analytics,
        and customer management. It can be customized to fit the specific needs
        of a business. Additionally, it provides remote access, user
        accessibility, and other tools to help companies to run more
        efficiently.
      </motion.p>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-16">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          className="lg:w-2/5"
        >
          <Image
            src="/card-reader.png"
            alt="card reader and printer"
            width={400}
            height={400}
          />
        </motion.div>

        <div className="text-left lg:w-3/5">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            SumUp 3G and Printer
          </motion.h2>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.4 }}
            className="my-4 grid grid-flow-col"
          >
            <div className="flex justify-center items-center bg-purple rounded-full h-10 w-10 text-xl p-1">
              {' '}
              <BsReception4 className="" />{' '}
            </div>
            <div className="ml-2">
              <h3 className="font-semibold">Unlimited data</h3>
              <p>
                Stay connected with WiFi connectivity or use the free, included
                SIM card with unlimited data.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.6 }}
            className="grid grid-flow-col my-4"
          >
            <div className="flex justify-center items-center  bg-purple rounded-full h-10 w-10 text-xl p-1 ">
              {' '}
              <BsPrinterFill className="" />{' '}
            </div>
            <div className="ml-2">
              <h3 className="font-semibold">Printing and charging</h3>
              <p>
                Offer receipts and keep your reader charged with the printer and
                charging station. A micro USB cable is also included.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.8 }}
            className="grid grid-flow-col my-4"
          >
            <div className="flex justify-center items-center object-center bg-purple rounded-full h-10 w-10 text-xl p-1 ">
              {' '}
              <BsFillCreditCardFill className="" />{' '}
            </div>
            <div className="ml-2">
              <h3 className="font-semibold">Standalone</h3>
              <p>
                Take payments without the need to connect your device to your
                smartphone or tablet.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 1 }}
            className="grid grid-flow-col my-4"
          >
            <div className="flex justify-center items-center object-center bg-purple rounded-full h-10 w-10 text-xl p-1 ">
              {' '}
              <BsFillCreditCard2FrontFill className="" />{' '}
            </div>
            <div className="ml-2">
              <h3 className="font-semibold">Major payment acceptance</h3>
              <p>
                Accept all major payment types from chip &amp; PIN and
                contactless to Google Pay and Apple Pay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="mt-12 flex justify-center items-center font-bold cursor-pointer hover:text-purple transition"
      >
        <a
          href="https://store.sumup.com/en-GB/product-selection/card_reader.bp55_bundle_printer?cc_only=true&_gl=1*1to4h83*_ga*MzI2OTQwNDAyLjE2NzQ0OTcxNzU.*_ga_4VRZNY7N9G*MTY3NDUwNzkxNS4zLjEuMTY3NDUwNzk3Ny4wLjAuMA..&device=desktop&_ga=2.203460304.1521689276.1674497175-326940402.1674497175&nextInternalLocale=en-GB"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2 "
        >
          To learn more, visit the official site.
        </a>{' '}
        <BsLink45Deg className="text-2xl" />
      </motion.div>
    </section>
  );
};

export default About;
