import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50"></div>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white dark:bg-gray-700 rounded shadow-lg mx-auto max-w-md w-full">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              New Announcement
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <AiOutlineClose size={16} />
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              We are excited to announce a special event coming up in the
              following weeks. Join us for a day of fun and activities with
              great surprises in store!
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded dark:border-gray-600">
            <button
              onClick={onClose}
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
