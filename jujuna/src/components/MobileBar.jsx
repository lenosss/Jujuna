import { useTranslation } from "react-i18next";
import bannerLight from "/images/banner-light.png";
import bannerDark from "/images/banner-light-removebg-preview.png";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function MobileBar() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Determine the theme
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";

  return (
    <div
      id="mobile-bar"
      ref={ref}
      className={`relative ${isDarkMode ? "bg-dark" : "bg-light"}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative md:mt-[20px]"
      >
        <img
          src={isDarkMode ? bannerDark : bannerLight}
          alt="banner"
          className="w-full h-[290px] lg:h-[635px] xl:h-[690px] object-cover"
        />
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="pt-[12px] pr-[12px] pb-[16px] absolute top-0 right-0 flex flex-col w-[325px] lg:pt-[104px] lg:pr-[114px] lg:pb-[84px] lg:w-[500px] xl:w-[780px]"
        >
          <h2 className="text-[32px] lg:text-[42px] xl:text-[64px] text-text-color font-normal font-tommaso">
            {t("mobileBar")}
          </h2>
          <h3 className="text-[24px] lg:text-[32px] xl:text-[40px] lg:mt-[30px] xl:mt-[52px] text-text-color font-normal font-tommaso mt-[5px]">
            {t("mobileBarText")}
          </h3>
          <p className="text-[16px] lg:text-[20px] xl:text-[24px] lg:mt-[20px] xl:mt-[35px] text-text-color font-normal mt-[20px]">
            {t("mobileBarDescription")}
          </p>

          <button className="w-[130px] h-[32px] text-[16px] font-normal bg-[#613994] text-text-color rounded-[50px] self-end lg:mt-[50px] lg:self-center xl:w-[222px] xl:h-[55px] xl:mt-[90px] xl:text-[24px]">
            {t("learnMore")}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MobileBar;
