import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
function Tut({ title, image, ingredients, size }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delayChildren: 0.4, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={containerVariants}
      className="relative bg-black text-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
    >
      <motion.div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-auto flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-xl border border-gray-700"
          />
        </motion.div>

        <div className="flex-1 flex flex-col justify-between">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left mb-4 lg:mb-6"
          >
            {title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-${
              size === "small" ? "1" : "2"
            } lg:gap-6`}
          >
            {ingredients.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-gray-900 bg-opacity-75 rounded-lg border border-gray-700 shadow-md transform transition duration-500 hover:scale-105"
              >
                <p className="text-lg font-semibold">{item.product}</p>
                <p className="text-sm opacity-70">{item.quantity}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Tut;
