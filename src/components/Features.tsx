import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import Card from "./Card";

const Features: React.FC = () => {
  return (
    <section className="container mx-auto p-6 bg-gray-100 dark:bg-gray-800 min-w-full min-h-screen transition duration-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Tailwind CSS Features
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mx-10 lg:mx-40">
        {/* Feature Card 1 */}
        <Card color="black">
          <h3 className="font-semibold text-xl">Responsive Design</h3>
          <p className="mt-2">
            Tailwind CSS is built with mobile-first design in mind. Easily build
            responsive designs using its flexible grid system and utility
            classes.
          </p>
          <Button variant="blue" className="mt-4">
            Learn More
          </Button>
        </Card>

        {/* Feature Card 2 */}
        <Card color="white">
          <h3 className="font-semibold text-xl">Interactive Elements</h3>
          <p className="mt-2">
            Implement interactive UI elements easily. Tailwind&apos;s hover,
            focus, and other interactive classes make it simple and accessible.
          </p>
          <Button variant="red" className="mt-4">
            Explore
          </Button>
        </Card>

        {/* Feature Card 3 */}
        <Card color="white">
          <h3 className="font-semibold text-xl">Customization</h3>
          <p className="mt-2">
            Tailwind CSS is highly customizable. Adjust your design system or
            create new utilities to fit your unique style with room for
            customization.
          </p>
          <Button variant="purple" className="mt-4">
            Customize
          </Button>
        </Card>

        {/* Feature Card 4 */}
        <Card color="black">
          <h3 className="font-semibold text-xl">Dark Mode Support</h3>
          <p className="mt-2">
            Tailwind CSS provides built-in support for dark mode, allowing you
            to easily switch between light and dark themes in your application.
          </p>
          <Button size="large" variant="green" className="mt-4">
            Read More
          </Button>
        </Card>
      </div>

      {/* Responsive text */}
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <div className="text-sm md:text-xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100">
          This text size is responsive
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        {/* Modal */}
        <Modal triggerButtonTitle="Modal" />
      </div>
    </section>
  );
};

export default Features;
