import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import logo from "/images/logo.svg";
import georgianLanguage from "/images/georgia-language-flag.webp";
import englishLanguage from "/images/english-language-flag.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useWine } from "../context/useWine";

function Nav() {
  const [activeFlag, setActiveFlag] = useState("");
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const { t, i18n } = useTranslation();
  const { isDarkMode, setIsDarkMode } = useWine();

  useEffect(() => {
    async function getCountry() {
      const res = await fetch("https://ipapi.co/json/");
      const data = await res.json();
      if (data.country_code === "GE") {
        i18n.changeLanguage("ge");
      } else {
        i18n.changeLanguage("en");
      }
    }
    getCountry();
  }, [i18n]);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setActiveFlag(lng);
  };

  return (
    <header className="relative bg-[#1E1E1E] text-white py-4 px-6 lg:py-3 lg:px-12 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <div className="w-[45px] h-[45px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <motion.p
          className="text-[24px] font-tommaso cursor-pointer md:hidden ml-4"
          onClick={() => toggleMobileNav()}
          whileHover={{ scale: 1.2, color: "#FFD700" }}
          whileTap={{ scale: 0.9 }}
        >
          {!mobileNav ? (
            <span>{t("menu")}</span>
          ) : (
            <span className="absolute top-[-30px] right-[-40px] text-xl">
              x
            </span>
          )}
        </motion.p>
      </div>

      <div className="hidden md:flex md:space-x-8 lg:space-x-12 items-center">
        <a
          href="#about-us"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          {t("aboutUs")}
        </a>
        <a
          href="#news"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          {t("news")}
        </a>
        <a
          href="#bottle"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          {t("bottle")}
        </a>
        <a
          href="#cocktails"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          {t("cocktails")}
        </a>
        <a
          href="#mobile-bar"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          {t("mobileBar")}
        </a>
        <a
          href="#contact"
          className="hover:text-[#FFD700] transition-colors duration-300"
        >
          {t("contact")}
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <motion.div
          className={`cursor-pointer rounded-full border-2 border-[#FFD700] p-1 ${
            activeFlag === "ge" ? "bg-[#FFD700]" : "bg-[#1E1E1E]"
          }`}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => changeLang("ge")}
        >
          <img
            src={georgianLanguage}
            alt="georgian-language"
            className={`w-8 h-8 rounded-full ${
              activeFlag === "ge" ? "bg-[#1E1E1E]" : "bg-[#FFD700]"
            }`}
          />
        </motion.div>
        <motion.div
          className={`cursor-pointer rounded-full border-2 border-[#FFD700] p-1 ${
            activeFlag === "en" ? "bg-[#FFD700]" : "bg-[#1E1E1E]"
          }`}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => changeLang("en")}
        >
          <img
            src={englishLanguage}
            alt="english-language"
            className={`w-8 h-8 rounded-full ${
              activeFlag === "en" ? "bg-[#1E1E1E]" : "bg-[#FFD700]"
            }`}
          />
        </motion.div>
      </div>

      <motion.div
        className="cursor-pointer rounded-full border-2 border-[#FFD700] p-1 bg-[#333] hover:bg-[#555] transition-colors duration-300"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <img
          src={
            isDarkMode
              ? "/images/icon-light-theme.jpg"
              : "/images/icon-dark-theme.png"
          }
          alt={isDarkMode ? "light mode" : "dark mode"}
          className="w-8 h-8 rounded-full"
        />
      </motion.div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                open: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-[#1E1E1E] text-white flex flex-col justify-between p-6 lg:hidden z-50"
            >
              <motion.div
                className="flex flex-col space-y-4"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 50 },
                }}
              >
                <ul className="space-y-4">
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#about-us"
                      className="text-[20px] font-normal"
                    >
                      {t("aboutUs")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#news"
                      className="text-[20px] font-normal"
                    >
                      {t("news")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#bottle"
                      className="text-[20px] font-normal"
                    >
                      {t("bottle")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#cocktails"
                      className="text-[20px] font-normal"
                    >
                      {t("cocktails")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#mobile-bar"
                      className="text-[20px] font-normal"
                    >
                      {t("mobileBar")}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => toggleMobileNav()}
                      href="#contact"
                      className="text-[20px] font-normal"
                    >
                      {t("contact")}
                    </a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="border-t border-[#FFD700]"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 50 },
                }}
              ></motion.div>
              <motion.div
                className="flex justify-center gap-x-4"
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 50 },
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center shadow-md hover:bg-gray-700"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    changeLang("ge");
                    toggleMobileNav();
                  }}
                >
                  <img
                    src={georgianLanguage}
                    alt="georgian-language"
                    className="w-8 h-8 rounded-full"
                  />
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center shadow-md hover:bg-gray-700"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    changeLang("en");
                    toggleMobileNav();
                  }}
                >
                  <img
                    src={englishLanguage}
                    alt="english-language"
                    className="w-8 h-8 rounded-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav;
