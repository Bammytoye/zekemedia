import React from 'react';

export default function ContactUs() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center mb-4">
        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </p>
      <form className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
            rows="4"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">Or reach us at:</p>
        <p className="text-gray-600 dark:text-gray-400">Email: support@zekemedia.com</p>
        <p className="text-gray-600 dark:text-gray-400">Phone: +234 (0) 8169885711</p>
      </div>
    </div>
  );
}
