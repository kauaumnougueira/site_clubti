import React from "react";
import styled from "styled-components";
import Card from "./Card";
import cases from "./cards.json";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 15px;
    justify-content: center; /* Centraliza o grid horizontalmente */
    align-items: center; /* Centraliza o grid verticalmente */
    width: 100%; /* Garante que o container ocupe a largura completa */
    margin: 0 auto; /* Centraliza o container dentro do pai */
    padding: 150px;

    // Ajustar para tela menor
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto; /* Garante que cada item ocupe uma linha */
    }
`;

const GridItem = styled.div<{ tamanho?: 1 | 2 | 3 }>`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: ${(props) => (props.tamanho === 3 ? 'span 2' : 'span 1')};
    grid-row: ${(props) => (props.tamanho === 1 ? 'span 2' : 'span 1')};

    @media (max-width: 480px) {
        grid-column: span 1; /* Garante que cada item ocupe uma coluna */
        grid-row: span 1; /* Garante que cada item ocupe uma linha */
    }
`;

interface CardsProps{
    setPage: (page:string) => void
}

const Cards: React.FC<CardsProps> = ({setPage}) => {
    return (
        <GridContainer>
            {cases.map((cardCase, index) => {
                const tamanho = cardCase.tamanho as 1 | 2 | 3;
                return (
                    <GridItem key={index} tamanho={tamanho}>
                        <Card backgroundImage={cardCase.imagem} tamanho={tamanho} nome={cardCase.nome} descricao={cardCase.descricao} setPage={setPage} route={cardCase.route}/>
                    </GridItem>
                );
            })}
        </GridContainer>
    );
};

export default Cards;
