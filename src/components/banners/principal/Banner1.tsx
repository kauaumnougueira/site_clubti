import React from "react";
import backgroundImage from "../../../assets/img/gradient_bg_1.png"
import banner1Img from "../../../assets/img/banner1.png";
import * as S from "../../../assets/styleds/StyledComponents";
import * as B from "../StyledBannerComp";
import Banner1Layout from "../../layout/Banner1Layout";

const Banner1 = () => {
    return (
        <Banner1Layout img={<img src={banner1Img} alt="Banner" width="640" height="533" className="max-w-full h-auto" />}>
            <p className="font-bold"> Inovação em Software ao
                alcance do seu negócio!</p>
            <S.Primario2Text className="mb-10">
                Maximize seu sucesso com a ClubTi
            </S.Primario2Text>
            <S.Button
                className="md:w-60 w-full"
                height="60px"
                fontSize="20px"
            >
                Fale conosco
            </S.Button>
        </Banner1Layout>
    );
};

export default Banner1;
