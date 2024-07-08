import React from "react";
import backgroundImage from "../../../assets/img/gradient_bg_1.png"
import banner1Img from "../../../assets/img/banner1.png";
import * as S from "../../../assets/styleds/StyledComponents";
import * as B from "../StyledBannerComp";

const Banner1 = () => {
    return (
        <B.Container backgroundImage={backgroundImage} className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl">
                <div className="col-span-1 flex flex-col items-center md:items-start">
                    <B.ColContainer className="text-center md:text-left flex flex-col items-center md:items-start">
                        <B.StyledText className="flex flex-col items-center md:items-start">
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
                        </B.StyledText>
                    </B.ColContainer>
                </div>
                <div className="col-span-1 flex justify-center">
                    <img src={banner1Img} alt="Banner" width="640" height="533" className="max-w-full h-auto" />
                </div>
            </div>
        </B.Container>
    );
};

export default Banner1;
