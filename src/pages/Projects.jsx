import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchRepos } from "../services/github";
import RepoCard from "../components/RepoCard";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    async function load() {
      const data = await fetchRepos();
      setRepos(data);
    }
    load();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-night-accent mb-6 text-center">
        {t("projects.title")}
      </h1>

      {repos.length === 0 ? (
        <p className="text-center text-gray-400">{t("projects.loading")}</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </motion.div>
      )}

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-night-accent mb-6">{t("projects.stats_title")}</h2>
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://github-readme-stats.vercel.app/api?username=tutucanto10&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-xl"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=tutucanto10&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}
