import { motion } from "framer-motion";

export default function RepoCard({ repo }) {
  return (
    <motion.div
      className="bg-night-surface rounded-xl p-5 shadow-lg hover:shadow-[0_0_15px_rgba(122,162,247,0.3)] transition"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-lg font-semibold text-night-accent mb-2">
        {repo.name}
      </h2>
      <p className="text-gray-400 text-sm mb-3">
        {repo.description || "Sem descrição disponível."}
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>⭐ {repo.stargazers_count}</span>
        <span>{repo.language || "N/A"}</span>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block bg-night-accent text-white px-4 py-1 rounded-md hover:bg-night-pink transition"
      >
        Ver no GitHub
      </a>
    </motion.div>
  );
}
