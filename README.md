# 🌐 DevPortfolio

An interactive and responsive **developer portfolio** built with **React**, **Vite**, and **TailwindCSS**.  
This project showcases the work, skills, and experience of **Artur Canto**, with a modern design inspired by the *Tokyo Night* theme, smooth animations, and bilingual support (**English/Portuguese**).

> 🧠 The site dynamically integrates GitHub data, allowing automatic updates of projects and repositories.

---

## 🚀 Live Demo

🔗 [https://devportfolio.vercel.app](https://devportfolio.vercel.app)

---

## 🧩 Features

- 🌗 **Dark/Light mode toggle** with persistent user preferences  
- 🌍 **Bilingual support** (EN / PT) using `i18next`  
- 💾 **Dynamic GitHub integration** for repositories and stats  
- ⚡ Built with **React + Vite** for high performance  
- 🎨 **TailwindCSS** with custom Tokyo Night theme  
- 🧭 Smooth page transitions and animations via **Framer Motion**  
- 📩 **Contact form** integrated with Formspree API  
- 📄 Downloadable resume (English and Portuguese versions)  

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React, Vite, TailwindCSS, Framer Motion |
| **State & Logic** | React Router, i18next |
| **APIs** | GitHub REST API, Formspree |
| **Hosting** | Vercel |
| **Version Control** | Git & GitHub |

---

## 🧱 Project Structure

DevPortfolio/
├── public/
│ ├── Artur_Canto_Desenvolvedor_Backend.pdf
│ └── vite.svg
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── ToggleTheme.jsx
│ ├── i18n/
│ │ ├── i18n.js
│ │ ├── en.json
│ │ └── pt.json
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ └── Contact.jsx
│ ├── services/
│ │ └── github.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
└── package.json

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/tutucanto10/DevPortfolio.git
cd DevPortfolio
npm install

Run the development server:

npm run dev

---

Build for production:

npm run build

---

Preview the production build locally:

npm run preview

---

🌍 Deployment

This project is hosted on Vercel.
Each git push automatically triggers a new deployment build.

You can deploy your own version by:

Forking this repository

Importing it to Vercel

Setting the build command as npm run build

Setting the output directory as dist

---

🧑‍💻 Author

Artur Canto
💼 Back-End Developer | Automation & System Integration Enthusiast
📍 Rio de Janeiro, Brazil

