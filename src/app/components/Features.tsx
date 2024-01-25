import React, { useState } from "react";
import Modal from "./Modal";
const Features: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="container mx-auto p-6 bg-gray-100 dark:bg-gray-800 min-w-full min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Tailwind CSS Features
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-10 lg:mx-40">
        {/* Feature Card 1 */}
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
            Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Tailwind CSS is built with mobile-first design in mind. Easily build
            responsive designs using its flexible grid system and utility
            classes.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Learn More
          </button>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
            Interactive Elements
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Implement interactive UI elements easily. Tailwind's hover, focus,
            and other interactive classes make it simple and accessible.
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Explore
          </button>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
            Customization
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Tailwind CSS is highly customizable. Adjust your design system or
            create new utilities to fit your unique style with room for
            customization.
          </p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Customize
          </button>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 text-center">
          <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
            Dark Mode Support
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Tailwind CSS provides built-in support for dark mode, allowing you
            to easily switch between light and dark themes in your application.
          </p>
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Responsive text */}
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <div className="text-sm md:text-xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">
          This text size is responsive
        </div>
      </div>

      {/* Open Modal Button */}
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <button
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded transition duration-300"
          onClick={openModal}
        >
          Open Modal
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Features;
