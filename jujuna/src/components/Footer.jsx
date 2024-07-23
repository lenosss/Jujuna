import { useTranslation } from "react-i18next";
import logo from "/images/logo.svg";
import instagram from "/images/instagram.svg";
import facebook from "/images/facebook.svg";
import linkedin from "/images/linkedin.svg";
import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

function Footer() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-[20px] pr-[10px] pl-[30px] bg-gradient-to-r from-[#000] to-[#333] xl:pr-[82px] xl:pl-[80px] rounded-lg shadow-lg"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[20px] lg:gap-[64px]">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#ba92ed] p-[10px] rounded-full transform hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt="logo" className="w-[31.5px] h-[31.5px]" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-color-primary text-[12px] lg:text-[16px] flex flex-col gap-[12px]"
          >
            <p>{t("phone")}</p>
            <p>+995579760006</p>
            <p>{t("email")}</p>
            <p>Hello@jujuna.ge</p>
            <p>{t("address")}</p>
            <p>{t("addressText")}</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex flex-col gap-[10px] items-center lg:items-end"
          >
            <div className="flex gap-[10px]">
              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-[24px] h-[24px] hover:opacity-80 transition-opacity duration-300"
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-[24px] h-[24px] hover:opacity-80 transition-opacity duration-300"
                />
              </a>
              <a href="https://www.linkedin.com/feed/">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-[24px] h-[24px] hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            </div>

            <div className="text-[10px] lg:text-[14px] text-[#908F8F] flex gap-[49px]">
              <p>{t("personal")}</p>
              <p>{t("safety")}</p>
            </div>
          </motion.div>
        </div>

        <div className="text-[10px] text-[#908F8F] mt-[32px] flex justify-between md:hidden">
          <p>{t("personal")}</p>
          <p>{t("safety")}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
