import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [profilePicture, setProfilePicture] = useState(''); 

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:3000/api/beAChef', JSON.stringify({
      name,
      email,
      password,
      phone,
      address,
      restaurantName,
      profilePicture
    }), {
      headers: {"Content-Type": "application/json"}
    }).then((response)=>{
      console.log(response.data);
      navigate('/')
    }).catch((err)=>{
      console.log(err)
    });

  };

  return (
    <div className="register-screen-container">
      <style jsx>{`
        .register-screen-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #F0EDE5; /* Mesmo bege claro do LoginScreen */
          font-family: 'Lato', sans-serif;
          color: #3C3C3C;
          padding: 20px;
        }

        .register-card {
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 45px;
          width: 100%;
          max-width: 800px; /* Aumenta a largura máxima para acomodar os campos lado a lado */
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid #E0E0E0;
        }

        .register-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(to right, #B28E6F, #A0785B); /* Mesmo gradiente marrom-rosé */
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
        }

        h2 {
          color: #5A4A3E;
          margin-bottom: 35px;
          font-size: 2.4em;
          letter-spacing: 0.5px;
          font-weight: 700;
        }

        .logo-text {
          font-family: 'Merriweather', serif;
          font-weight: 800;
          color: #B28E6F;
        }

        .logo-text span {
          color: #6B705C;
        }

        /* Container para os grupos de formulário lado a lado */
        .form-row {
          display: flex;
          flex-wrap: wrap; /* Permite quebrar linha em telas menores */
          gap: 20px; /* Espaço entre os itens */
          margin-bottom: 20px; /* Espaço após a linha de grupos */
        }

        .form-group {
          flex: 1; /* Permite que os itens cresçam para preencher o espaço */
          min-width: 280px; /* Largura mínima para o input antes de quebrar */
          text-align: left;
          margin-bottom: 0; /* Remove a margem inferior padrão para flexbox */
        }

        /* Ajuste para o último form-group que pode ficar sozinho */
        .form-row:last-of-type .form-group {
            margin-bottom: 0;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #6C7A89;
          font-size: 0.98em;
          font-weight: 500;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: calc(100% - 24px); /* Ajuste de padding */
          padding: 14px 12px;
          border: 1px solid #D0D0D0;
          border-radius: 8px;
          font-size: 1.05em;
          color: #3C3C3C;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: #A0785B;
          box-shadow: 0 0 0 4px rgba(160, 120, 91, 0.15);
        }

        button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(to right, #6B705C, #8A9279);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.15em;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          letter-spacing: 0.8px;
          box-shadow: 0 4px 10px rgba(107, 112, 92, 0.2);
          margin-top: 20px;
        }

        button:hover {
          background: linear-gradient(to right, #8A9279, #6B705C);
          transform: translateY(-3px);
        }

        button:active {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(107, 112, 92, 0.3);
        }

        .login-link {
          margin-top: 25px;
          font-size: 0.92em;
        }

        .login-link a {
          color: #A0785B;
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }

        .login-link a:hover {
          color: #8A9279;
          text-decoration: underline;
        }

        /* Quebra de linha específica para mobile ou telas menores */
        @media (max-width: 768px) {
            .form-group {
                min-width: 100%; /* Garante que em telas pequenas, os inputs voltem a ficar um abaixo do outro */
            }
        }
      `}</style>

      <div className="register-card">
        <h2>Criar conta <span className="logo-text">Sabor<span>BIT</span></span></h2>
        <form onSubmit={handleSubmit}>
          {/* Primeira linha de campos */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
          </div>

          {/* Segunda linha de campos */}
          <div className="form-row">
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
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Terceira linha de campos */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="restaurantName">Nome do Restaurante</label>
              <input
                type="text"
                id="restaurantName"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Endereço do Restaurante</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Campo de imagem de perfil (pode ficar em uma linha separada se for grande ou complexo) */}
          <div className="form-row"> {/* Mesmo que seja um só, use form-row para manter o espaçamento consistente */}
            <div className="form-group">
              <label htmlFor="profilePicture">URL da Imagem de Perfil (Opcional)</label>
              <input
                type="text"
                id="profilePicture"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Registrar Chef</button>
        </form>
        <div className="login-link">
          Já tem uma conta? <a href="/">Faça login aqui</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;