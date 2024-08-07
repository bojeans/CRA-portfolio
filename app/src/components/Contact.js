import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

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
    <div className="flex flex-col items-center contact-page justify-center py-12 px-4 sm:px-6 lg:px-8">
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
        <h2 className="italic text-blue-500">
          Feel free to send me a message here or via social links in footer
        </h2>
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
              className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 md:h-32 lg:h-40"
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
          className="shadow bg-blue-800 text-white hover:bg-blue-500 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
