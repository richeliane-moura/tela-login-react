<<<<<<< HEAD
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
      <ToggleTheme theme={theme} setTheme={setTheme} />  {/* Colocando o botão de Dark Mode fora do container */}
      <div className="form-wrapper">
        {page === "login" ? <Login togglePage={togglePage} /> : <Cadastro togglePage={togglePage} />}
      </div>
    </div>
=======

import './App.css'
import Login from './components/Login/Login';

function App() {
  
  return (
   <div className='App'>
    <Login />
   </div>
>>>>>>> 66f79e0055e7c02c90684d6a3f16408f3ed19e84
  );
}

export default App;
