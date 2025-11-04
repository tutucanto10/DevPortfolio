import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaMoon, FaGlobe } from "react-icons/fa";

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [lang, setLang] = useState(i18n.language || "pt");

  // Persistência de idioma
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <motion.header
      className="bg-night-surface shadow-md py-4 px-6 flex justify-between items-center"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-night-accent font-bold text-xl hover:text-night-pink transition"
      >
        DevPortfólio
      </Link>

      {/* Navegação */}
      <nav className="flex gap-6 text-gray-300 text-sm sm:text-base">
        <Link
          to="/"
          className={`hover:text-night-accent transition ${
            location.pathname === "/" ? "text-night-accent font-semibold" : ""
          }`}
        >
          {t("header.home")}
        </Link>
        <Link
          to="/about"
          className={`hover:text-night-accent transition ${
            location.pathname === "/about" ? "text-night-accent font-semibold" : ""
          }`}
        >
          {t("header.about")}
        </Link>
        <Link
          to="/projects"
          className={`hover:text-night-accent transition ${
            location.pathname === "/projects" ? "text-night-accent font-semibold" : ""
          }`}
        >
          {t("header.projects")}
        </Link>
        <Link
          to="/contact"
          className={`hover:text-night-accent transition ${
            location.pathname === "/contact" ? "text-night-accent font-semibold" : ""
          }`}
        >
          {t("header.contact")}
        </Link>
      </nav>

      {/* Botões */}
      <div className="flex items-center gap-3">
        {/* Botão de idioma */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 text-gray-300 hover:text-night-accent font-medium transition text-sm sm:text-base"
        >
          <FaGlobe className="text-night-accent" />
          {lang === "pt" ? "View in English" : "Ver em Português"}
        </button>

        {/* Ícone de modo noturno (placeholder futuro) */}
        <FaMoon className="text-night-accent text-lg" />
      </div>
    </motion.header>
  );
}
