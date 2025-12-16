import React, { useState } from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import ToggleTheme from "./components/ToggleTheme";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [theme, setTheme] = useState("light");

  const togglePage = () => setPage(page === "login" ? "cadastro" : "login");

  return (
    <div className={`app ${theme}`}>
      <ToggleTheme theme={theme} setTheme={setTheme} />  {/* Botão Dark Mode fora do container */}
      <div className="form-wrapper">
        {page === "login" ? <Login togglePage={togglePage} /> : <Cadastro togglePage={togglePage} />}
      </div>
    </div>
  );
}

export default App;

