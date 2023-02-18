import Image from 'next/image';
import { motion } from 'framer-motion';
const Features = () => {
  return (
    <section id="features">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="text-4xl"
      >
        Features
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="mb-8"
      >
        OPTIPOS offers a comprehensive set of tools to optimize your operations,
        resulting in increased efficiency and profitability.
      </motion.p>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-gradientPurple to-gradientDark  w-full rounded flex justify-between items-center px-4 min-h-36 mb-6 m-auto flex-col lg:flex-row py-4"
      >
        <div className="order-2 text-center lg:text-start lg:w-3/4">
          <h3 className="text-2xl mb-2">Analytical Graphs</h3>
          <p>
            Built-in analytics graphs to analyze various aspects of your
            company, including products, customer, orders, and more, to gain
            insights and improve accordingly
          </p>
        </div>
        <div className="order-1 mb-4 lg:mb-0 lg:w-1/4">
          <Image
            src="/comparison.png"
            alt="hero image"
            width={100}
            height={100}
            className="m-auto"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-gradientDark to-gradientPurple  w-full rounded flex justify-between items-center px-4 min-h-36 mb-6 m-auto flex-col lg:flex-row py-4"
      >
        <div className=" mb-4 lg:mb-0 lg:w-1/4">
          <Image
            src="/edc.png"
            alt="hero image"
            width={100}
            height={100}
            className="m-auto"
          />
        </div>

        <div className="text-center lg:text-start lg:w-3/4">
          <h3 className="text-2xl mb-2">Easy Payments</h3>
          <p>
            The SumUp 3G card reader/printer enables seamless and swift payment
            transactions by accepting a wide range of popular payment methods.
            It also offers secure and reliable payment processing, ensuring the
            safety of your transactions.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-gradientPurple to-gradientDark  w-full rounded flex justify-between items-center px-4 min-h-36 mb-6 m-auto flex-col lg:flex-row py-4"
      >
        <div className="order-2 text-center lg:text-start lg:w-3/4">
          <h3 className="text-2xl mb-2">User Friendly</h3>
          <p>
            A detailed, user-friendly dashboard that is easy to navigate and
            provides fast access to critical information
          </p>
        </div>
        <div className="order-1 mb-4 lg:mb-0 lg:w-1/4">
          <Image
            src="/illustration.png"
            alt="hero image"
            width={100}
            height={100}
            className="m-auto"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-gradientDark to-gradientPurple  w-full rounded flex justify-between items-center px-4 min-h-36 mb-6 m-auto flex-col lg:flex-row py-4"
      >
        <div className="mb-4 lg:mb-0 lg:w-1/4">
          <Image
            src="/control-panel.png"
            alt="hero image"
            width={100}
            height={100}
            className="m-auto"
          />
        </div>

        <div className="text-center lg:text-start lg:w-3/4">
          <h3 className="text-2xl mb-2">Advanced Control Features</h3>
          <p>
            Control user access, ensuring that only authorized individuals can
            perform specific actions such as deleting products, customers, or
            orders
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-gradientPurple to-gradientDark  w-full rounded flex justify-between items-center px-4 min-h-36 mb-6 m-auto flex-col lg:flex-row py-4"
      >
        <div className="order-2 text-center lg:text-start lg:w-3/4">
          <h3 className="text-2xl mb-2">Ironclad Security</h3>
          <p>
            Built with security in mind, ensuring that your data is kept safe
            and only accessible to those you grant access to
          </p>
        </div>
        <div className="order-1 mb-4 lg:mb-0 lg:w-1/4">
          <Image
            src="/shield.png"
            alt="hero image"
            width={100}
            height={100}
            className="m-auto"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-gradientDark to-gradientPurple  w-full rounded flex justify-between items-center px-4 min-h-36 mb-6 m-auto flex-col lg:flex-row py-4"
      >
        <div className="mb-4 lg:mb-0 lg:w-1/4">
          <Image
            src="/global-network.png"
            alt="hero image"
            width={100}
            height={100}
            className="m-auto"
          />
        </div>

        <div className="text-center lg:text-start lg:w-3/4">
          <h3 className="text-2xl mb-2">Fully Remote</h3>
          <p>
            With OPTIPOS, you can access your account from anywhere with an
            internet connection. It also provides a high level of security for
            your account information.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
