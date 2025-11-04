import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-night-accent mb-4">
        {t("contact.title")}
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mb-12">{t("contact.subtitle")}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full mb-12">
        <motion.a
          href="mailto:arturcanto.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-night-surface hover:bg-night-accent/20 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-night-accent text-4xl" />
          <h3 className="text-xl font-semibold text-white">E-mail</h3>
          <p className="text-gray-400 text-sm">arturcanto.dev@gmail.com</p>
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/artur-canto-90bb1b224"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-night-surface hover:bg-night-accent/20 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="text-night-accent text-4xl" />
          <h3 className="text-xl font-semibold text-white">LinkedIn</h3>
          <p className="text-gray-400 text-sm">@artur-canto</p>
        </motion.a>

        <motion.a
          href="https://github.com/tutucanto10"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-night-surface hover:bg-night-accent/20 p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="text-night-accent text-4xl" />
          <h3 className="text-xl font-semibold text-white">GitHub</h3>
          <p className="text-gray-400 text-sm">@tutucanto10</p>
        </motion.a>
      </div>

      <form
        action="https://formspree.io/f/xzzkljda"
        method="POST"
        className="bg-night-surface p-8 rounded-2xl max-w-xl w-full shadow-lg text-left"
      >
        <h2 className="text-2xl font-semibold text-night-accent mb-6 text-center">
          ✉️ {t("contact.title")}
        </h2>

        <label className="text-gray-300 font-medium block mb-2">
          {t("contact.email_label")}
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 mb-4 rounded-md bg-night-bg text-white border border-night-accent/30 focus:ring-2 focus:ring-night-accent outline-none"
        />

        <label className="text-gray-300 font-medium block mb-2">
          {t("contact.message_label")}
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full p-3 mb-4 rounded-md bg-night-bg text-white border border-night-accent/30 focus:ring-2 focus:ring-night-accent outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-night-accent hover:bg-night-pink text-white py-3 px-6 rounded-md mt-2 font-semibold transition w-full"
        >
          {t("contact.send_button")}
        </button>
      </form>
    </motion.div>
  );
}
