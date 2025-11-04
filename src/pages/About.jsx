import { motion } from "framer-motion";
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiSupabase, SiJavascript } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto text-center space-y-12">
      {/* Introdução */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl font-bold text-night-accent mb-4">{t("about.title")}</h1>
        <p className="text-gray-300 text-lg leading-relaxed">{t("about.intro")}</p>
      </motion.div>

      {/* Linha do tempo */}
      <motion.div
        className="bg-night-surface rounded-xl p-6 text-left shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-night-accent mb-4">{t("about.journey_title")}</h2>
        <ul className="space-y-4 text-gray-300">
          {t("about.journey_items", { returnObjects: true }).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Tecnologias */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h2 className="text-2xl font-semibold text-night-accent mb-6">{t("about.stack_title")}</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 justify-items-center text-5xl text-night-accent">
          <FaPython title="Python" />
          <SiDjango title="Django" />
          <FaReact title="React" />
          <SiJavascript title="JavaScript" />
          <FaNodeJs title="Node.js" />
          <FaDatabase title="PostgreSQL" />
          <SiSupabase title="Supabase" />
          <FaDocker title="Docker" />
          <FaGithub title="GitHub" />
        </div>
      </motion.div>

      {/* Currículo e Redes */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/Artur_Canto_Desenvolvedor_Backend.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-night-accent hover:bg-night-pink text-white px-6 py-3 rounded-md font-semibold transition transform hover:scale-105"
          >
            {t("about.resume_view")}
          </a>
          <a
            href="/Artur_Canto_Desenvolvedor_Backend.pdf"
            download
            className="bg-night-surface hover:bg-night-accent text-gray-200 px-6 py-3 rounded-md font-semibold border border-night-accent transition transform hover:scale-105"
          >
            {t("about.resume_download")}
          </a>
        </div>

        <div className="flex gap-6 text-3xl text-gray-400">
          <a href="https://github.com/tutucanto10" target="_blank" rel="noopener noreferrer" className="hover:text-night-accent transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/artur-canto-90bb1b224" target="_blank" rel="noopener noreferrer" className="hover:text-night-accent transition transform hover:scale-110">
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
