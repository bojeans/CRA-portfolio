import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xnqwbjwd");
  const [submitCount, setSubmitCount] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    if (state.succeeded) {
      setSubmitCount((prevCount) => prevCount + 1);
      setShowSuccessMessage(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      reset();
    }
  }, [state.succeeded, reset]);

  const handleClick = (e) => {
    e.target.select();
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 contact-page">
        <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-lg">
          {submitCount >= 2 && (
            <p className="text-red-600 font-bold">
              You have exceeded the maximum number of submits. Please try again
              later.
            </p>
          )}
          {showSuccessMessage && submitCount < 2 && (
            <p className="text-green-600 font-bold">
              Thanks for contacting me. Your message has successfully submitted
            </p>
          )}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-4 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                onDoubleClick={handleClick}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="email"
                name="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                onDoubleClick={handleClick}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={submitCount >= 2}
            className="shadow bg-green-700 hover:bg-green-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
