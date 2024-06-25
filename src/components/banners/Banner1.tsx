import React from "react";
import backgroundImage from "../../assets/img/gradient_bg_1.png";
import banner1Img from "../../assets/img/banner1.png";
import * as S from "../../assets/styleds/StyledComponents";
import * as B from "./StyledBannerComp";

const Banner1 = () => {
    return (
        <B.Container backgroundImage={backgroundImage}>
            <div className="grid grid-cols-2 w-full">
                <div className="col-span-2 md:col-span-1">
                    <B.ColContainer>
                        <B.StyledText>
                            <span>Inovação em Software ao</span>
                            <br />
                            alcance do seu negócio!
                            <S.Primario2Text>
                                Maximize seu sucesso com a ClubTi
                            </S.Primario2Text>
                            <S.Button
                                className="btn"
                                width="228px"
                                height="60px"
                                fontSize="20px"
                            >
                                Fale conosco
                            </S.Button>
                        </B.StyledText>
                    </B.ColContainer>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <img src={banner1Img} alt="" width="640px" height="533px" />
                </div>
            </div>
        </B.Container>
    );
};

export default Banner1;
