import React from "react";
import styled from "styled-components";
import bgGrupo from "../../assets/img/imgcolada.png";
import * as B from "./StyledBannerComp";
import * as S from "../../assets/styleds/StyledComponents";
import { Solucoes } from "../solucoes/Solucoes";

const Banner3Container = styled(B.Banner3Container)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 38.5vw;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 1; /* Garante que o texto esteja acima da imagem */

    @media (max-width: 768px) {
        width: 90vw; /* Ajusta a largura na versão mobile */
    }
`;

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
    }
`;

const ClubtiText = styled.p`
    text-align: justify;
    line-height: 25px;
    @media (max-width: 480px) {
        font-size: 30px;
        line-height: 20px;
    }
`;

const ImagesContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        order: 2; /* Move a imagem abaixo do texto na versão mobile */
        margin-top: 20px; /* Adiciona espaço entre o texto e a imagem */
    }

    img {
        width: 70%;
        height: auto;
        margin: 10px 0;
        
        @media (max-width: 768px) {
            width: 90%; /* Ajusta a largura da imagem na versão mobile */
            margin-top: 0;
        }
    }
`;

const Img = styled.img`
    width: 80%;
    height: auto;

    @media (max-width: 768px) {
        width: 100%; 
    }
`;

const Banner3 = () => {
    return (
        <Banner3Container className="flex items-center justify-center -mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl -mt-80 md:-mt-60" id="quem_somos">
                <ImagesContainer className="col-span-1 flex flex-col">
                    <Img
                        src={bgGrupo}
                        alt="grupo_de_pessoas"
                    />
                </ImagesContainer>

                <div className="col-span-1 flex flex-col md:items-start">
                    <B.ColContainer>
                        <B.StyledText>
                            <S.Neutra1Text fontSize="48px" className="font-bold">
                                <span>Sobre a ClubTi</span>
                            </S.Neutra1Text>
                            <ClubtiText
                            className="mt-10 md:mt-5 px-4 md:px-0"
                                style={{
                                    fontSize: "20px",
                                    color: "#052232",
                                }}
                            >
                                A ClubTI é mais do que uma empresa de
                                desenvolvimento de software. Somos seus
                                <strong>parceiros</strong> de confiança no
                                caminho para o <strong>sucesso digital</strong>.
                                Nossa abordagem inovadora se destaca na entrega
                                de soluções
                                <strong>sob medida, ágeis e eficientes</strong>
                                para impulsionar o seu negócio, estamos
                                comprometidos em oferecer a
                                <strong>
                                    excelência em desenvolvimento de software
                                </strong>
                                . Venha descobrir como a ClubTI transforma
                                desafios em oportunidades, guiando-o para um
                                futuro digital.
                            </ClubtiText>
                        </B.StyledText>
                    </B.ColContainer>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl" style={{ margin: "auto 0" }} id="solucoes">
                <TextContainer className="col-span-1 flex flex-col md:items-start">
                    <B.ColContainer>
                        <B.StyledText>
                            <S.Primario3Text
                                fontSize="48px"
                                style={{
                                    borderLeft: "5px solid #8BFF8C",
                                    paddingLeft: "5vh",
                                }}
                            >
                                Soluções da ClubTI para impulsionar o seu
                                negócio
                            </S.Primario3Text>
                        </B.StyledText>
                    </B.ColContainer>
                </TextContainer>
                <SolucoesContainer className="col-span-1 flex flex-col md:items-start">
                    <Solucoes />
                </SolucoesContainer>
            </div>
        </Banner3Container>
    );
};

export default Banner3;
