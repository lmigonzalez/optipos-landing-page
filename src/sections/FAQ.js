import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
const FAQ = () => {
  const initialsQuestions = [
    {
      id: 1,
      question: 'What is a POS system, and how does it work?',
      answer:
        'A POS (point of sale) system is a computerized system that allows businesses to track sales, manage inventory, and process payments. It typically includes hardware such as a cash register, barcode scanner, receipt printer, and software that can track sales data and generate reports.',
      active: false,
    },
    {
      id: 2,
      question:
        'How does your POS system software improve business operations?',
      answer:
        'Explain how your software can streamline business operations and lead to improved efficiency, increased customer satisfaction, and more accurate data for decision making.',
      active: false,
    },
    {
      id: 3,
      question: 'What is the cost of using your POS system software?',
      answer:
        'Provide information on pricing and any maintenance packages offered, as well as any discounts or promotions available. Make sure to emphasize the value and cost savings that your software can provide.',
      active: false,
    },
  ];

  const [questions, setQuestions] = useState(initialsQuestions);

  function handleAnswer(id) {
    setQuestions((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, active: !item.active };
        }
        return item;
      })
    );
  }

  return (
    <section id="faq">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        className="text-4xl"
      >
        Frequently Asked Questions
      </motion.h2>
      <ul className="">
        {questions.map((q, i) => {
          return (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 1 }}
              key={q.id}
              className={`${
                q.active
                  ? 'transition bg-gradient-to-r from-gradientPurple to-gradientDark text-white'
                  : 'transition bg-white text-purple'
              } cursor-pointer rounded w-full p-4 my-3 min-h-12`}
              onClick={() => handleAnswer(q.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base">{q.question}</h3>

                <button
                  className={`${
                    q.active && 'rotate-180 transition'
                  } text-2xl transition`}
                >
                  <AiOutlineDown />
                </button>
              </div>
              {q.active && <p className="text-start mt-2">{q.answer}</p>}
              {/* <p className='text-start'>{q.answer}</p> */}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
