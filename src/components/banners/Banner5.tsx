import React from "react";
import Comentarios from "../comentarios/Comentarios";
import * as B from "../banners/StyledBannerComp"; // Preservando os estilos de banners se necessário
import * as S from "../../assets/styleds/StyledComponents";
import Footer from "../layout/Footer";

const Banner5 = () => {
    return (
        <div style={{overflow: "hidden"}}>
            <div className="flex items-center justify-center mt-24"> {/* Utilizando flexbox para centralizar */}
                <B.ColContainer className="flex flex-col items-center mr-auto md:ml-32">
                    <B.StartText>
                        <S.Primario3Text
                            fontSize="48px"
                            style={{
                                maxWidth: "600px",
                                borderLeft: "5px solid #8BFF8C",
                                paddingLeft: "5vh",
                            }}
                        >
                            Clientes que recomendam a ClubTI
                        </S.Primario3Text>
                    </B.StartText>
                </B.ColContainer>
            </div>
            <Comentarios />
            <Footer />
        </div>
    );
};

export default Banner5;
