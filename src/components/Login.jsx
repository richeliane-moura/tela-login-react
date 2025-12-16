import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Input from "./Input";

export default function Login({ togglePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validar = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email obrigatório";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email inválido";

    if (!password) newErrors.password = "Senha obrigatória";
    else if (password.length < 6) newErrors.password = "Senha deve ter 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Login realizado com sucesso!");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          error={errors.email}
          icon={FaUser}
        />
        <Input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          error={errors.password}
          icon={FaLock}
        />
        <div className="recall-forget">
          <label><input type="checkbox" /> Lembrar-me</label>
          <a href="#">Esqueci minha senha</a>
        </div>
        <button type="submit">Entrar</button>
        <div className="signup-link">
          <p>Ainda não possui uma conta? <span onClick={togglePage}>Cadastre-se</span></p>
        </div>
      </form>
    </div>
  );
}
