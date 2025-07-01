import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Lógica de autenticação aqui
    console.log('Email:', email);
    console.log('Senha:', password);
    
    
    await axios.post('http://localhost:3000/api/loginChef', JSON.stringify({email, password}), {
      headers: {"Content-Type": "application/json"}
    }).then((response)=> {
      console.log(response.data);

      if(response.data.chef.planoAtivo === false) {
        console.log('sub')
        navigate('/SubscriptionPlanScreen', {state: response.data.chef});
      } else {
        console.log('plano ativo')
      }

    })
    .catch((err)=>console.log(err))
  };

  return (
    <div className="login-screen-container">
      <style jsx>{`
        .login-screen-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #F0EDE5; /* Bege claro, quase off-white */
          font-family: 'Lato', sans-serif; /* Fonte moderna e legível */
          color: #3C3C3C; /* Cinza escuro para o texto principal */
        }

        .login-card {
          background-color: #FFFFFF; /* Fundo branco para o cartão */
          border-radius: 16px; /* Cantos mais arredondados */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* Sombra mais suave */
          padding: 45px;
          width: 100%;
          max-width: 420px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid #E0E0E0; /* Borda sutil para definir o card */
        }

        .login-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 10px; /* Barra superior um pouco mais alta */
            background: linear-gradient(to right, #B28E6F, #A0785B); /* Gradiente de marrom-rosé aconchegante */
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
        }

        h2 {
          color: #5A4A3E; /* Marrom médio para o título */
          margin-bottom: 35px;
          font-size: 2.4em;
          letter-spacing: 0.5px;
          font-weight: 700; /* Mais negrito */
        }

        .logo-text {
          font-family: 'Merriweather', serif; /* Fonte mais clássica para o logo */
          font-weight: 800; /* Mais robusto */
          color: #B28E6F; /* Marrom-rosé para "Sabor" */
        }

        .logo-text span {
          color: #6B705C; /* Verde oliva para "BIT" */
        }

        .form-group {
          margin-bottom: 22px;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 10px;
          color: #6C7A89; /* Cinza azulado para labels */
          font-size: 0.98em;
          font-weight: 500;
        }

        input[type="email"],
        input[type="password"] {
          width: calc(100% - 24px); /* Ajuste de padding */
          padding: 14px 12px;
          border: 1px solid #D0D0D0; /* Borda mais clara */
          border-radius: 8px; /* Cantos mais arredondados */
          font-size: 1.05em;
          color: #3C3C3C;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: #A0785B; /* Marrom-rosé no foco */
          box-shadow: 0 0 0 4px rgba(160, 120, 91, 0.15); /* Sombra mais sutil */
        }

        button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(to right, #6B705C, #8A9279); /* Gradiente de verde oliva */
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.15em;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          letter-spacing: 0.8px;
          box-shadow: 0 4px 10px rgba(107, 112, 92, 0.2); /* Sombra para o botão */
        }

        button:hover {
          background: linear-gradient(to right, #8A9279, #6B705C);
          transform: translateY(-3px);
        }

        button:active {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(107, 112, 92, 0.3);
        }

        .forgot-password, .signup-link {
          margin-top: 25px;
          font-size: 0.92em;
        }

        .forgot-password a, .signup-link a {
          color: #A0785B; /* Marrom-rosé para links */
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .forgot-password a:hover, .signup-link a:hover {
          color: #8A9279; /* Verde oliva no hover do link */
          text-decoration: underline;
        }
      `}</style>

      <div className="login-card">
        <h2>Bem-vindo ao <span className="logo-text">Sabor<span>BIT</span></span></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="forgot-password">
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <div className="signup-link">
          Não tem uma conta? <a href="/register">Cadastre-se aqui</a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;