import { useState } from "react";
import backgroundImage from "../../assets/img/gradient_bg_2.png";
import * as S from "../../assets/styleds/StyledComponents";
import * as B from "./StyledBannerComp";

const Banner2 = () => {
    return (
        <B.Container backgroundImage={backgroundImage}>
            <div className="row">
                <div className="col-6">
                    <B.ColContainer>
                        <B.StyledText style={{ color: "#18FECD" }}>
                            <S.Primario1Text>
                                <span>Transformando desafios</span>
                                <br />
                                em soluções digitais
                            </S.Primario1Text>
                            <p
                                style={{
                                    fontSize: "20px",
                                    color: "white",
                                }}
                            >
                                A ClubTi oferece soluções ágeis e inovadoras
                                para <br />
                                otimizar seu negócio. Cresça com confiança
                                através do <br />
                                desenvolvimento de softwares, onde cada solução
                                é <br />
                                uma parceria para o sucesso
                            </p>
                        </B.StyledText>
                    </B.ColContainer>
                </div>
                <B.StyledAccordion className="col-6">
                    <div
                        className="accordion accordion-flush"
                        id="accordionBeneficios"
                    >
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="solPer">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    <S.Primario3Text>
                                        Soluções Personalizadas
                                    </S.Primario3Text>
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="solPer"
                                data-bs-parent="#accordionBeneficios"
                            >
                                <div className="accordion-body">
                                    Oferecemos expertise técnica e estratégica
                                    para orientar sua organização na escolha das
                                    melhores tecnologias e práticas de
                                    segurança, alinhadas aos objetivos do seu
                                    negócio
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="consEst">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseTwo"
                                >
                                    <S.Primario3Text className="tete">
                                        Consultoria Estratégica
                                    </S.Primario3Text>
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="consEst"
                                data-bs-parent="#accordionBeneficios"
                            >
                                <div className="accordion-body">
                                    Desenvolvemos sistemas e sites sob medida
                                    para atender às necessidades exclusivas da
                                    sua empresa, tornando os processos mais
                                    eficientes e eficazes.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="supCon">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="true"
                                    aria-controls="collapseThree"
                                >
                                    <S.Primario3Text>
                                        Suporte Contínuo
                                    </S.Primario3Text>
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="supCon"
                                data-bs-parent="#accordionBeneficios"
                            >
                                <div className="accordion-body">
                                    Conte com nosso suporte técnico contínuo,
                                    incluindo a manutenção regular e correção de
                                    bugs, para gatantir a estabilidade e
                                    confiabilidade das soluções implementadas
                                </div>
                            </div>
                        </div>
                    </div>
                </B.StyledAccordion>
            </div>
        </B.Container>
    );
};

export default Banner2;
