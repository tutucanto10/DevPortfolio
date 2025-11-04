import axios from "axios";

const GITHUB_USERNAME = "tutucanto10"; // ✅ substitui pelo seu usuário do GitHub
const BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

export async function fetchRepos() {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        sort: "updated",
        per_page: 10,
      },
    });
    return data;
  } catch (error) {
    console.error("Erro ao buscar repositórios:", error);
    return [];
  }
}
