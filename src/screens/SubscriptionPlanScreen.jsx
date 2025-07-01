import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SubscriptionPlanScreen = () => {
  const navigate = useNavigate( );
  const location = useLocation( ).state;
  console.log(location)

  const handleChoosePlan = async (plan) => {
    console.log(`Plano escolhido: ${plan}`);
    if(plan == 'Mensal') {
      await axios.post('http://localhost:3000/api/planMensal', {emailChef: location.email})
      .then(response=>{
        window.location.href=response.data
      })
    } else {
      await axios.post('http://localhost:3000/api/planAnual', {emailChef: location.email})
      .then(response=>{
        window.location.href=response.data
      })
    }
    
  };

  return (
    <div className="subscription-screen-container">
      <style jsx>{`
        .subscription-screen-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #F0EDE5; /* Mesmo bege claro do LoginScreen */
          font-family: 'Lato', sans-serif;
          color: #3C3C3C;
          padding: 20px; /* Padding para evitar que o card toque as bordas da tela */
          box-sizing: border-box; /* Garante que padding não adicione largura total */
        }

        .subscription-card {
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 45px;
          width: 100%; /* Ocupa 100% da largura disponível do container, respeitando o padding */
          max-width: 900px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border: 1px solid #E0E0E0;
          box-sizing: border-box; /* Garante que padding não adicione largura total */
        }

        .subscription-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(to right, #B28E6F, #A0785B);
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

        .plans-container {
          display: flex;
          justify-content: center;
          gap: 30px; /* Espaço entre os cartões de plano em desktop */
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .plan-item {
          background-color: #F9F9F9;
          border: 1px solid #E0E0E0;
          border-radius: 12px;
          padding: 30px;
          flex: 1; /* Permite que os itens cresçam/encolham */
          min-width: 280px; /* Um pouco menor para dar mais flexibilidade */
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-sizing: border-box; /* Garante que padding não adicione largura total */
        }

        .plan-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
        }

        .plan-item.annual {
          border-color: #A0785B;
          box-shadow: 0 0 0 3px rgba(160, 120, 91, 0.2);
        }

        .plan-title {
          font-size: 1.8em;
          color: #B28E6F;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .plan-price {
          font-size: 2.8em;
          color: #6B705C;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .plan-price small {
          font-size: 0.5em;
          font-weight: 500;
          color: #6C7A89;
        }

        .plan-discount {
          background-color: #8A9279;
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 20px;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .plan-features {
          list-style: none;
          padding: 0;
          margin: 20px 0;
          text-align: left;
          width: 100%;
        }

        .plan-features li {
          margin-bottom: 10px;
          font-size: 1.05em;
          color: #5A4A3E;
          display: flex;
          align-items: center;
        }

        .plan-features li::before {
          content: '✔';
          color: #6B705C;
          margin-right: 10px;
          font-weight: bold;
        }

        .choose-plan-button {
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
          margin-top: auto;
        }

        .choose-plan-button:hover {
          background: linear-gradient(to right, #8A9279, #6B705C);
          transform: translateY(-3px);
        }

        .choose-plan-button:active {
          transform: translateY(0);
          box-shadow: 0 2px 5px rgba(107, 112, 92, 0.3);
        }

        /* MEDIA QUERIES para responsividade */
        @media (max-width: 768px) {
          .subscription-card {
            padding: 30px 20px; /* Reduz o padding do card em telas menores */
          }

          .plans-container {
            flex-direction: column; /* Empilha os cartões de plano verticalmente */
            align-items: center; /* Centraliza os cartões empilhados */
            gap: 0; /* Remove o gap horizontal */
          }

          .plan-item {
            width: 100%; /* Ocupa a largura total disponível */
            max-width: 350px; /* Limita a largura máxima para não ficar muito grande em telas médias */
            margin-bottom: 20px; /* Adiciona espaçamento vertical entre os cartões */
          }

          /* Remove a margem do último item para não adicionar espaço extra no final */
          .plan-item:last-child {
            margin-bottom: 0;
          }

          h2 {
            font-size: 2em; /* Reduz o tamanho do título principal */
          }
        }

        @media (max-width: 480px) {
          .subscription-card {
            padding: 25px 15px; /* Mais ajustes no padding para telas muito pequenas */
          }
          .plan-item {
            padding: 25px 20px; /* Ajusta o padding interno do item do plano */
          }
          h2 {
            font-size: 1.8em; /* Reduz ainda mais o tamanho do título */
            margin-bottom: 25px;
          }
          .plan-title {
            font-size: 1.6em;
          }
          .plan-price {
            font-size: 2.4em;
          }
        }
      `}</style>

      <div className="subscription-card">
        <h2>Escolha seu plano <span className="logo-text">Sabor<span>BIT</span></span></h2>
        <p>Impulsione seu restaurante com a melhor experiência de cardápio digital!</p>

        <div className="plans-container">
          {/* Plano Mensal */}
          <div className="plan-item">
            <h3 className="plan-title">Plano Mensal</h3>
            <p className="plan-price">R$59,99<small>/mês</small></p>
            <ul className="plan-features">
              <li>QR Code especial para seu cardápio digital</li>
              <li>Fácil modificação de itens do cardápio</li>
              <li>Adicione e delete itens ilimitados</li>
              <li>Suporte técnico dedicado</li>
            </ul>
            <button className="choose-plan-button" onClick={() => handleChoosePlan('Mensal')}>
              Escolher Plano Mensal
            </button>
          </div>

          {/* Plano Anual */}
          <div className="plan-item annual">
            <h3 className="plan-title">Plano Anual</h3>
            <p className="plan-price">R$599,00<small>/ano</small></p>
            <div className="plan-discount">Economize 2 Meses!</div>
            <ul className="plan-features">
              <li>QR Code especial para seu cardápio digital</li>
              <li>Fácil modificação de itens do cardápio</li>
              <li>Adicione e delete itens ilimitados</li>
              <li>Suporte técnico dedicado</li>
              <li>Acesso prioritário a novas funcionalidades</li>
            </ul>
            <button className="choose-plan-button" onClick={() => handleChoosePlan('Anual')}>
              Escolher Plano Anual
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanScreen;