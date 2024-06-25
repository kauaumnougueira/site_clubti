import styled, { keyframes } from "styled-components";
import * as S from "../../assets/styleds/StyledComponents";
import logos from "./logos.json";

// Ajuste na animação para começar com logos já visíveis
const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Componente da fita horizontal
const Ribbon = styled.div`
  width: 100%;
  height: 120px; // Altura da fita
  overflow: hidden;
  position: relative;
  background-color: ${S.colors.neutra1};
  display: flex;
  align-items: center;
`;

// Componente do logo
const Logo = styled.img`
  width: 100%;
`;

// Componente da fita que contém os logos
const RibbonContent = styled.div`
  display: flex;
  animation: ${slide} 40s linear infinite; // Animação contínua
`;

// Componente para conter cada logo individualmente
const LogoDiv = styled.div`
  height: 120px;
  width: 200px;
  display: flex;
  align-items: center;
  padding: 15px;
   margin: 0 100px; 
`;

const LogoRibbon = () => {
  // Duplicar os logos para criar o efeito contínuo
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Ribbon>
      <RibbonContent>
        {duplicatedLogos.map((logo, index) => (
          <LogoDiv key={index}>
            <Logo src={logo.imgUrl} alt={logo.titulo} />
          </LogoDiv>
        ))}
      </RibbonContent>
    </Ribbon>
  );
};

export default LogoRibbon;
