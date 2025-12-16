import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Input from "./Input";

export default function Cadastro({ togglePage }) {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const validar = () => {
    const newErrors = {};
    if (!form.nome) newErrors.nome = "Nome obrigatório";
    if (!form.email) newErrors.email = "Email obrigatório";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email inválido";
    if (!form.senha) newErrors.senha = "Senha obrigatória";
    else if (form.senha.length < 6) newErrors.senha = "Senha deve ter 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Cadastro realizado com sucesso!");
      setForm({ nome: "", email: "", senha: "" });
      setErrors({});
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <Input type="text" value={form.nome} onChange={handleChange("nome")} placeholder="Nome" error={errors.nome} icon={FaUser} />
        <Input type="email" value={form.email} onChange={handleChange("email")} placeholder="E-mail" error={errors.email} icon={FaEnvelope} />
        <Input type="password" value={form.senha} onChange={handleChange("senha")} placeholder="Senha" error={errors.senha} icon={FaLock} />
        <button type="submit">Cadastrar</button>
        <div className="signup-link">
          <p>Já possui uma conta? <span onClick={togglePage}>Login</span></p>
        </div>
      </form>
    </div>
  );
}
