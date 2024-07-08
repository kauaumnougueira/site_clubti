import React from "react";
import styled from "styled-components";
import bgGrupo from "../../../assets/img/imgcolada.png";
import * as B from "../StyledBannerComp";
import * as S from "../../../assets/styleds/StyledComponents";
import { Solucoes } from "../../solucoes/Solucoes";

const SolucoesContainer = styled.div`
    width: 48vw;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
        width: 50px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${S.colors.primario1};
        border-radius: 20px; 
    }

    &::-webkit-scrollbar-button {
        display: none; /* Oculta as setas de rolagem */
    }

    @media (max-width: 768px) {
        width: 90vw; /* Ajusta a largura na versão mobile */
    }`
    ;

const Banner3 = () => {
    return (
        <div className="relative flex flex-col items-center mb-10">
            {/* Seção "Quem Somos" */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl mt-[-80px] md:mt-[-240px] xl:mt-[-320px]">
                <div className="relative h-full flex flex-col items-center order-last md:order-none">
                    <img
                        src={bgGrupo}
                        alt="grupo_de_pessoas"
                        className="w-[70%] h-auto mt-10 md:mt-0 md:w-[90%] xl:-mt-12"
                    />
                </div>

                <div className="flex flex-col xl:-mt-48 -mt-14">
                    <B.StyledText>
                        <S.Neutra1Text fontSize="48px" className="text-4xl font-bold">
                            Sobre a ClubTi
                        </S.Neutra1Text>
                        <S.Neutra4Text fontSize="20px" className="mt-10 md:mt-5 px-4 md:px-0 text-justify text-lg md:text-base leading-[25px] md:leading-[20px]">
                            A ClubTI é mais do que uma empresa de desenvolvimento de software. Somos seus <strong>parceiros</strong> de confiança no caminho para o <strong>sucesso digital</strong>. Nossa abordagem inovadora se destaca na entrega de soluções <strong>sob medida, ágeis e eficientes</strong> para impulsionar o seu negócio, estamos comprometidos em oferecer a <strong>excelência em desenvolvimento de software</strong>. Venha descobrir como a ClubTI transforma desafios em oportunidades, guiando-o para um futuro digital.
                        </S.Neutra4Text>
                    </B.StyledText>
                </div>
            </div>

            {/* Seção "Soluções" */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl my-auto" id="solucoes">
                <div className="flex flex-col">
                    <B.StartText>
                        <S.Primario3Text
                            className="text-md flex items-start">
                            Soluções da ClubTI para impulsionar o seu
                            negócio
                        </S.Primario3Text>
                    </B.StartText>
                </div>

                <SolucoesContainer className="w-full md:w-[48vw] flex flex-nowrap overflow-x-auto">
                    <Solucoes />
                </SolucoesContainer>
            </div>
        </div>
    );
};

export default Banner3;
