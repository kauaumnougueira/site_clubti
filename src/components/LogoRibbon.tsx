import styled, { keyframes } from "styled-components";
import logoImage from "../assets/img/emserh_logo.png";

// Define a animação para o deslizamento contínuo da fita
const slide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-400%);
  }
`;

// Componente da fita horizontal
const Ribbon = styled.div`
  width: 100%;
  height: 120px; /* Altura da fita */
  overflow: hidden;
  position: relative;
`;

// Componente do logo
const Logo = styled.img`
  width: 210px; /* Tamanho do logo */
  height: 46px;
  margin-left: 200px; /* Espaçamento entre as logos */
`;

// Componente da fita que contém os logos
const RibbonContent = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  animation: ${slide} 40s linear infinite; /* Desloca a fita horizontalmente */
`;

const LogoRibbon = () => {
  return (
    <Ribbon>
      <RibbonContent>
        {[1, 2, 3, 4, 5].map((index) => (
          <Logo key={index} src={logoImage} alt="Logo" />
        ))}
      </RibbonContent>
    </Ribbon>
  );
};

export default LogoRibbon;
