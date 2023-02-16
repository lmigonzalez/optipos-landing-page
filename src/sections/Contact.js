import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import EmailProcessing from '@/components/EmailProcessing';
import EmailSuccess from '@/components/EmailSuccess';
import EmailError from '@/components/EmailError';
const Contact = () => {
  const initialFormValues = {
    fname: '',
    email: '',
    phone: '',
    description: '',
  };

  const [formValues, setFormsValues] = useState(initialFormValues);
  const [processingEmail, setProcessingEmail] = useState(false);
  const [emailSuccessfully, setEmailSuccessfully] = useState(false);
  const [emailError, setEmailError] = useState(false);

  function handleChange(e) {
    setFormsValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProcessingEmail(true);

    axios
      .post('/api/mail', formValues)
      .then(() => {
        setProcessingEmail(false);
        setEmailSuccessfully(true);
        setFormsValues(initialFormValues);
      })
      .catch(() => {
        setEmailError(true);
      });
    closeEmailVerification();
  }

  function closeEmailVerification() {
    setTimeout(() => {
      setEmailSuccessfully(false);
      setEmailError(false);
    }, '5000');
  }

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
      >
        Contact Us
      </motion.h2>
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1 }}
        onSubmit={handleSubmit}
        className="relative flex flex-col max-w-[700px] text-start m-auto"
      >
        {processingEmail && <EmailProcessing />}
        {emailSuccessfully && <EmailSuccess />}
        {emailError && <EmailError />}

        <label htmlFor="fname" className="mb-1 text-lg">
          Full Name
        </label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={formValues.fname}
          className="rounded h-10 mb-4 text-dark px-2"
          onChange={handleChange}
        />

        <label htmlFor="email" className="mb-1 text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formValues.email}
          className="rounded h-10 mb-4 text-dark px-2"
          onChange={handleChange}
        />

        <label htmlFor="phone" className="mb-1 text-lg">
          Phone
        </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          value={formValues.phone}
          className="rounded h-10 mb-4 text-dark px-2"
          onChange={handleChange}
        />

        <label htmlFor="description" className="mb-1 text-lg">
          Tell us more...
        </label>
        <textarea
          id="description"
          name="description"
          value={formValues.description}
          cols="30"
          className="rounded h-8 mb-4 text-dark p-2 min-h-[5rem]"
          onChange={handleChange}
        />
        <div className="flex justify-end mt-2 text-xl">
          <button
            type="submit"
            className="bg-purple rounded py-2 w-48 hover:scale-95 transform transition "
          >
            Submit
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
