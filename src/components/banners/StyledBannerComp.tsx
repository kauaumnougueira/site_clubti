import styled from "styled-components";
import * as S from "../../assets/styleds/StyledComponents";
import ArrowAccordion from "../../assets/img/arrow_accordion.png";
import ArrowAccordionOpen from "../../assets/img/arrow_accordion_open.png";

interface ContainerProps {
    backgroundImage: string;
    height?: string; 
}

export const Container = styled.div<ContainerProps>`
    display: flex; /* Usar flexbox */
    align-items: center; /* Centralizar verticalmente */
    justify-content: center; /* Centralizar horizontalmente */
    flex-direction: column;
    width: 100%;
    height: ${(props) => props.height || `100vh`};
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
`;

export const StyledText = styled.h1`
    color: ${S.colors.neutra1};
    font-size: 48px;
    text-align: left; /* Justificação à esquerda */
`;

export const ColContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const StyledAccordion = styled.div`
    .accordion {
        width: 600px;
        border-radius: 10px; /* Adicionando border radius de 10px ao accordion */
        overflow: hidden; /* Garante que o conteúdo não ultrapasse os limites do raio da borda */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adicionando uma sombra sutil */
    }
    .accordion-body {
        text-align: left; /* Justificar o texto à esquerda dentro do corpo do accordion */
    }
    .accordion-button:focus p {
        color: ${S.colors.primario2};
    }

    .accordion-button:focus {
        border-left: 3px solid ${S.colors.primario1};
    }

    .accordion-button {
        box-shadow: none;
        outline: none;
        background-color: transparent;
    }

    /* CSS para o ícone */
    .accordion-button:after {
        content: ""; /* Adiciona um conteúdo vazio */
        position: relative; /* Torna o elemento pai relativo */
        display: inline-block; /* Exibe o conteúdo como um bloco */
        width: 40px;
        height: 40px;
        background-image: url(${ArrowAccordion});
        background-size: cover; /* Ajusta o tamanho do ícone para cobrir o elemento */
        background-repeat: no-repeat; /* Impede a repetição do ícone */
    }
    .accordion-button:not(.collapsed)::after {
        background-image: url(${ArrowAccordionOpen});
        transform: rotate(0deg);
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
