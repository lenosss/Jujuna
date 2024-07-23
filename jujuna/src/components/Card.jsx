import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Card({
  image,
  date,
  title,
  description,
  buttonText,
  buttonColor,
  bgColor,
}) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
  };

  const imageVariants = {
    hover: { scale: 1.1, rotate: 2 },
  };

  const contentVariants = {
    hover: { translateY: "-10px", scale: 1.05 },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 2 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.8, delay: 0.3 }}
      ref={ref}
      className="relative bg-black text-white rounded-lg overflow-hidden shadow-2xl group"
    >
      <motion.div
        className="relative"
        whileHover="hover"
        variants={imageVariants}
      >
        <img
          className="w-full h-[300px] object-cover transition-transform duration-500"
          src={image}
          alt="news"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </motion.div>
      <motion.div
        className={`p-6 bg-[${bgColor}] text-white rounded-t-lg shadow-lg relative z-10`}
        whileHover="hover"
        variants={contentVariants}
      >
        <p className="text-sm md:text-base font-light">{date}</p>
        <h2 className="text-xl md:text-2xl font-bold mt-2">{title}</h2>
        <p className="text-base md:text-lg mt-2">{description}</p>
        <motion.button
          className={`mt-4 px-6 py-3 text-sm md:text-base font-semibold bg-[${buttonColor}] text-white rounded-full shadow-lg`}
          whileHover="hover"
          variants={buttonVariants}
        >
          {buttonText}
        </motion.button>
      </motion.div>
      <div className="absolute inset-0 border-4 border-gradient-to-br from-[#613994] via-[#000] to-[#724AA4] rounded-lg opacity-60" />
    </motion.div>
  );
}

export default Card;
