import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-gray-900 border-t dark:border-none">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;