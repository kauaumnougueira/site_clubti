import React from "react";
import solucoesData from "./solucoes.json";
import { Solucao } from "./Solucao";
import styled from "styled-components";

const SolucoesContainer = styled.div`
    display: flex;
    flex-direction: row; // Organiza em linha única no mobile
    flex-wrap: nowrap;  // Não permite quebra de linha no mobile
    
    padding: 10px;

    @media (min-width: 768px) {
        flex-wrap: wrap; // Permite quebra de linha em telas maiores
        padding: 0;
    }
`;

const Linha = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media (min-width: 768px) {
        flex: 1;
    }
`;

const Solucoes = () => {
    // Separando soluções grandes e pequenas
    const solucoesGrandes = solucoesData.filter(solucao => solucao.tamanho === 1);
    const solucoesPequenas = solucoesData.filter(solucao => solucao.tamanho === 2);

    return (
        <SolucoesContainer>
            <Linha>
                {solucoesGrandes.map((solucao, index) => (
                    <Solucao
                        key={index}
                        imgUrl={solucao.imgUrl}
                        titulo={solucao.titulo}
                        texto={solucao.texto}
                        tamanho={solucao.tamanho}
                    />
                ))}
            </Linha>
            <Linha>
                {solucoesPequenas.map((solucao, index) => (
                    <Solucao
                        key={index}
                        imgUrl={solucao.imgUrl}
                        titulo={solucao.titulo}
                        texto={solucao.texto}
                        tamanho={solucao.tamanho}
                    />
                ))}
            </Linha>
        </SolucoesContainer>
    );
};

export { Solucoes };
