import React from "react";
import styled from "styled-components";
import grupo from "../../assets/img/grupo_de_pessoas_banner_2.jpeg";
import bgGrupo from "../../assets/img/imagem_debaixo_banner_2.png";
import * as B from "./StyledBannerComp";
import * as S from "../../assets/styleds/StyledComponents";
import { Solucoes } from "../solucoes/Solucoes";

const Banner3Container = styled(B.Banner3Container)`
    position: relative;
`;

const TextContainer = styled.div`
    width: 38.5vw;
    padding: 0 20px;
    box-sizing: border-box;
`;

const SolucoesContainer = styled.div`
    width: 65vw;
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
`;

const Banner3 = () => {
    return (
        <Banner3Container>
            <div className="row" style={{ marginTop: "-42vh" }}>
                <div
                    className="col-6"
                    style={{ position: "relative", height: "100%" }}
                >
                    <img
                        src={bgGrupo}
                        alt="grupo_de_pessoas"
                        style={{
                            position: "absolute",
                            width: "70%",
                            height: "auto",
                            top: "12%",
                            right: "15%",
                        }}
                    />
                    <img
                        src={grupo}
                        alt="grupo_de_pessoas"
                        style={{
                            position: "absolute",
                            width: "70%",
                            height: "auto",
                            top: "2%",
                            left: "10%",
                        }}
                    />
                </div>

                <div className="col-6">
                    <B.ColContainer>
                        <B.StyledText>
                            <S.Neutra1Text fontSize="48px">
                                <span>Sobre a ClubTi</span>
                            </S.Neutra1Text>
                            <p
                                style={{
                                    fontSize: "20px",
                                    color: "#052232",
                                    padding: "2% 5% 10% 0",
                                    width: "90%",
                                }}
                            >
                                A ClubTI é mais do que uma empresa de
                                desenvolvimento de software. Somos seus
                                <strong>parceiros</strong> de confiança no
                                caminho para o <strong>sucesso digital</strong>.
                                Nossa abordagem inovadora se destaca na entrega
                                de soluções{" "}
                                <strong>sob medida, ágeis e eficientes</strong>{" "}
                                para impulsionar o seu negócio, estamos
                                comprometidos em oferecer a{" "}
                                <strong>
                                    excelência em desenvolvimento de software
                                </strong>
                                . Venha descobrir como a ClubTI transforma
                                desafios em oportunidades, guiando-o para um
                                futuro digital.
                            </p>
                        </B.StyledText>
                    </B.ColContainer>
                </div>
            </div>
            <div className="row justify-content-between" style={{ margin: "auto 0" }}>
                <TextContainer className="col">
                    <B.ColContainer>
                        <B.StyledText>
                            <S.Primario3Text
                                fontSize="48px"
                                style={{
                                    maxWidth: "600px",
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
                <SolucoesContainer className="col">
                    <Solucoes />
                </SolucoesContainer>
            </div>
        </Banner3Container>
    );
};

export default Banner3;
