import React from "react";
import backgroundImage from "../../../assets/img/gradient_bg_1.png"
import banner1Img from "../../../assets/img/pc_celular_cases.png";
import * as S from "../../../assets/styleds/StyledComponents";
import * as B from "../StyledBannerComp";

const Banner1 = () => {
    return (
        <B.Container backgroundImage={backgroundImage} height="80vh" mobileHeight="80vh" className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl">
                <div className="col-span-1 flex flex-col items-center md:items-start">
                    <B.ColContainer className="text-center md:text-left flex flex-col items-center md:items-start">
                        <B.StyledText className="flex flex-col items-center md:items-start">
                            <S.Primario1Text fontWeight="normal" className="md:text-3xl">
                                Conheça nossos cases
                            </S.Primario1Text>
                            <p> Veja como transformamos desafios em histórias de sucesso</p>
                        </B.StyledText>
                    </B.ColContainer>
                </div>
                <div className="col-span-1 flex justify-center">
                    <img src={banner1Img} alt="Banner" width="514" height="438" className="max-w-full h-auto" />
                </div>
            </div>
        </B.Container>
    );
};

export default Banner1;
