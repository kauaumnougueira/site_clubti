import React from "react";
import styled, { keyframes } from "styled-components";
import * as S from "../../../../assets/styleds/StyledComponents";

// Definir a interface para as props do Card
interface StyledProps {
    tamanho?: 1 | 2 | 3; // 1 para grande, 2 para pequeno, 3 para largo
    backgroundImage?: string;
}

interface CardProps extends StyledProps {
    nome: string;
    descricao: string;
    setPage: (page: string) => void;
    route: string;
}

// Estilizar o CardContainer com base nas props 'tamanho' e 'backgroundImage'
const CardContainer = styled.div<StyledProps>`
    width: ${(props) => (props.tamanho === 3 ? `1300px` : `640px`)};
    height: ${(props) => (props.tamanho === 1 ? `568px` : props.tamanho === 2 ? `272px` : `384px`)};
    background: 
        ${(props) => props.tamanho === 2
        ? `linear-gradient(to right, rgba(5, 34, 50, 0.9) 30%, transparent 100%)`
        : `linear-gradient(to top, rgba(5, 34, 50, 0.9) 30%, transparent 100%)`},        
        ${(props) => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
    background-size: cover; /* Ajuste conforme necessário */
    background-position: center; /* Ajuste conforme necessário */
    border-radius: 10px;
    box-shadow: 10px 10px 20px gray;
    display: flex;
    justify-content: ${(props) => (props.tamanho === 2 ? 'flex-start' : 'center')}; /* Ajuste conforme necessário */
    align-items: ${(props) => (props.tamanho === 2 ? 'center' : 'flex-end')}; /* Alinha o conteúdo na parte inferior */
    padding: 20px; /* Adiciona espaçamento interno */

    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 480px){
            width: 90vw;
            padding: 10px;
            height: ${(props) => (props.tamanho === 1 ? `350px` : props.tamanho === 2 ? `250px` : `350px`)};
    }
`;

const CardText = styled.div<StyledProps>`
    ${(props) => props.tamanho === 2 ?
        `
            text-align: start;
            width: 50%;
            margin-left: 20px;
        ` :
        `
            text-align: center;
            margin-bottom: 20px;
        `
    }

    @media (max-width: 480px){
        width: 100%;
        #1{
            font-size: 18px;
        }
        #2{
            font-size: 14px;
        }
        #3{
            font-size: 10px;
        }
    }

`;

// Componente Card que recebe as props 'tamanho' e 'backgroundImage'
const Card: React.FC<CardProps> = ({ tamanho = 1, backgroundImage, nome, descricao, setPage, route }) => {

    const router = () => {

        if (route != "") {
            setPage('case')
            localStorage.setItem('route', route)
        }

    }

    return (
        <CardContainer tamanho={tamanho} backgroundImage={backgroundImage}>
            <CardText tamanho={tamanho}>
                <S.Primario1Text fontSize="24px" id="1">
                    {nome}
                </S.Primario1Text>
                <S.Primario2Text fontSize="20px" id="2">
                    {descricao}
                </S.Primario2Text>
                <a href="#">
                    <S.Primario1Text fontSize="16px" id="3" className="mt-5" style={{ cursor: "pointer", userSelect: 'none' }} onClick={() => router()}>
                        Saiba mais 🡢
                    </S.Primario1Text>
                </a>
            </CardText>
        </CardContainer>
    );
};

export default Card;
