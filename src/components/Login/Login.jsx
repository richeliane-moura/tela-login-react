import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aqui você pode enviar para API, fazer validação, etc.
        console.log("Email:", email);
        console.log("Senha:", password);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o sistema</h1>

                <div className='input-field'>
                    <FaUser className='icon' />
                    <input 
                        type="email" 
                        placeholder='E-mail' 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className='input-field'>
                    <FaLock className='icon' />
                    <input 
                        type="password"
                        placeholder='Senha'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type="checkbox" /> Lembrar-me
                    </label>
                    <a href='#'>Esqueci minha senha</a>
                </div>

                <button type="submit">Entrar</button>

                <div className='signup-link'> 
                    <p>Ainda não possui uma conta? <a href='#'>Cadastre-se</a></p>
                </div>           
            </form>
        </div>
    );
};

export default Login;
