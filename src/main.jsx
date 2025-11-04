import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ← garante que o Tailwind está sendo carregado
import "./i18n/i18n.js"; // 🔹 Import aqui

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
