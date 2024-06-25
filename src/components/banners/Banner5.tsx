import React from "react";
import Comentarios from "../comentarios/Comentarios";
import * as S from "../../assets/styleds/StyledComponents";
import * as B from "../banners/StyledBannerComp";

const Banner5 = () => {
    return (
        <div>
            <div className="row" style={{margin: '100px 0', marginLeft: '-50%'}}>
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
                            Clientes que recomendam a ClubTI
                        </S.Primario3Text>
                    </B.StyledText>
                </B.ColContainer>
            </div>
            <Comentarios />
        </div>
    );
};

export default Banner5;
