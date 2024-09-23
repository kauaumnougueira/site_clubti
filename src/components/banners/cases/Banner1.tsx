import React from "react";
import backgroundImage from "../../../assets/img/gradient_bg_1.png"
import banner1Img from "../../../assets/img/pc_celular_cases.png";
import * as S from "../../../assets/styleds/StyledComponents";
import * as B from "../StyledBannerComp";
import Banner1Layout from "../../layout/Banner1Layout";

const Banner1 = () => {
    return (
        <Banner1Layout height="80vh" mobileHeight="80vh" img={<img src={banner1Img} alt="Banner" width="514" height="438" className="max-w-full h-auto" />}>
            <S.Primario1Text fontWeight="normal" className="md:text-3xl">
                Conheça nossos cases
            </S.Primario1Text>
            <p> Veja como transformamos desafios em histórias de sucesso</p>
        </Banner1Layout>

    );
};

export default Banner1;
