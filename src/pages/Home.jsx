import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-5xl font-bold text-night-accent mb-4">
        {t("home.title")}
      </h1>
      <p className="text-lg text-gray-400 mb-6">{t("home.subtitle")}</p>
      <a
        href="https://github.com/tutucanto10"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-night-accent text-white px-5 py-2 rounded-lg hover:bg-night-pink transition"
      >
        {t("home.button")}
      </a>
    </motion.div>
  );
}
