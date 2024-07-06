import styled from "styled-components";
import * as S from "../../assets/styleds/StyledComponents";
import ArrowAccordion from "../../assets/img/arrow_accordion.png";
import ArrowAccordionOpen from "../../assets/img/arrow_accordion_open.png";

interface ContainerProps {
    backgroundImage: string;
    height?: string;
    mobileHeight?: string;
    mobileBackgroundImage?: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex; /* Usar flexbox */
    align-items: center; /* Centralizar verticalmente */
    justify-content: center; /* Centralizar horizontalmente */
    flex-direction: column;
    width: 100%;
    height: ${(props) => props.height || `100vh`};
    @media (max-width: 400px) {
        height: ${(props) => props.mobileHeight || `calc(${props.height} + 40vh)` || `100vh`};
        background-image: url(${(props) => props.mobileBackgroundImage || props.backgroundImage});
    }
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;

`;

export const StyledText = styled.h1`
    color: ${S.colors.neutra1};
    font-size: 46px;
    text-align: left;
    line-height: 50px;

    @media (max-width: 1024px) {
        font-size: 40px; /* Ajuste para telas menores que 1024px */
    }

    @media (max-width: 768px) {
        font-size: 32px; /* Ajuste para telas menores que 768px */
    }

    @media (max-width: 480px) {
        font-size: 40px; /* Ajuste para telas menores que 480px */
        text-align: center;
    }

    @media (max-width: 400px) {
        font-size: 25px; /* Ajuste para telas menores que 480px */
        text-align: center;
        line-height: 30px;
    }
`;

export const ColContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const StyledAccordion = styled.div`
    .accordion {
        cursor: pointer;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .accordion-body {
        text-align: left;
    }

    .accordion-button {
        display: flex; /* Adiciona flex para alinhar texto e ícone */
        align-items: center; /* Alinha o ícone com o texto */
        justify-content: space-between; /* Espaça o ícone e o texto */
        width: 100%;
        padding: 16px; /* Ajusta o padding conforme necessário */
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        box-shadow: none;
    }

    .accordion-button:focus p {
        color: ${S.colors.primario2};
    }

    .accordion-button:focus {
        border-left: 3px solid ${S.colors.primario1};
    }

    .accordion-button-icon {
        transition: transform 0.3s ease; /* Adiciona transição suave para a rotação */
        width: 40px;
        height: 40px;
        background-size: cover;
        background-image: url(${ArrowAccordion});
    }

    .accordion-button-icon.rotated {
        transform: rotate(180deg); /* Rotaciona o ícone quando ativo */
        background-image: url(${ArrowAccordionOpen});
    }
`;

export const Banner3Container = styled.div`
    backgroundcolor: ${S.colors.neutra1};
    display: flex; /* Usar flexbox */
    align-items: center; /* Centralizar verticalmente */
    justify-content: start; /* Centralizar horizontalmente */
    flex-direction: column;
    width: 100%;
    height: 160vh;
    background-size: cover;
    background-position: center;
    padding-top: 30vh;
`;

export const StartText = styled.div`
    p{ 
        font-size: 48px;
        line-height: 50px;
        border-left: 5px solid #8BFF8C;
        padding-left: 5vh;
    }
    @media (max-width: 480px) {
        p{ 
            font-size: 25px; /* Ajuste para telas menores que 480px */
            text-align: start;
            padding-left: 3vh;
            line-height: 35px;
            margin-left: 4vh;
            margin-right: 4vh;
        }
    }
`