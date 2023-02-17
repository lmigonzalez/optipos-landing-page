import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import EmailProcessing from '@/components/EmailProcessing';
import EmailSuccess from '@/components/EmailSuccess';
import EmailError from '@/components/EmailError';
import { contactFormSchema } from '@/validation/validation';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

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
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setFormsValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  function closeError() {
    setTimeout(() => {
      setShowError(false);
      setErrorMessage('');
    }, '5000');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let isValid = await contactFormSchema
      .validate(
        {
          name: formValues.fname,
          email: formValues.email,
          phone: formValues.phone,
          description: formValues.description,
        },
        { abortEarly: false }
      )
      .catch((err) => {
        setShowError(true);
        console.log(err.errors[0]);
        setErrorMessage(err.errors[0]);
        closeError();
      });
    console.log(isValid);
    console.log('despues');

    if (isValid) {
      setProcessingEmail(true);
      axios
        .post('/api/mail', formValues)
        .then(() => {
          setProcessingEmail(false);
          setEmailSuccessfully(true);
          setFormsValues(initialFormValues);
        })
        .catch(() => {
          setProcessingEmail(false);
          setEmailError(true);
        });
    }

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
          <div>
        <AnimatePresence>
            {showError && (
              <motion.p
                key="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center"
              >
                <BsFillExclamationCircleFill className="mr-3" color="#F94A29" />{' '}
                {errorMessage}{' '}
                <BsFillExclamationCircleFill className="ml-3" color="#F94A29" />
              </motion.p>
            )}
        </AnimatePresence>
          </div>

        <div className="flex justify-end mt-2 text-xl">
          <button
            type="submit"
            className="bg-purple rounded py-2 w-full lg:w-48 hover:scale-95 transform transition "
          >
            Submit
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
