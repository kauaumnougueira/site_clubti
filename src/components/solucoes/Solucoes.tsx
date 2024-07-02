import React from "react";
import solucoesData from "./solucoes.json";
import { Solucao } from "./Solucao";
import styled from "styled-components";

const SolucoesContainer = styled.div`
    display: flex;
    padding: 10px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr); // Grid para telas maiores
        gap: 1rem;
        padding: 0;
    }
`;


const Solucoes = () => {
    return (
        <SolucoesContainer>
            {solucoesData.map((solucao, index) => (
                <Solucao
                    key={index}
                    imgUrl={solucao.imgUrl}
                    titulo={solucao.titulo}
                    texto={solucao.texto}
                    tamanho={solucao.tamanho}
                />
            ))}
        </SolucoesContainer>
    );
};

export { Solucoes };
