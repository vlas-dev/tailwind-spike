import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';

interface ModalProps {
  triggerButtonTitle: string;
}

const Modal: React.FC<ModalProps> = ({ triggerButtonTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal} className="py-2 px-4">
        {triggerButtonTitle}
      </Button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50" onClick={closeModal}></div>
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white dark:bg-gray-700 rounded shadow-lg mx-auto max-w-md w-full">
              <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  New Announcement
                </h3>
                <Button onClick={closeModal} className="p-2 bg-transparent hover:bg-transparent text-gray-800 dark:text-gray-100">
                  <AiOutlineClose size={16} />
                </Button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We are excited to announce a special event coming up in the
                  following weeks. Join us for a day of fun and activities with
                  great surprises in store!
                </p>
              </div>
              <div className="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded dark:border-gray-600">
                <Button variant="blue" onClick={closeModal}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;