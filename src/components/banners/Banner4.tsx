import backgroundImage from "../../assets/img/gradient_bg_3.png";
import * as S from "../../assets/styleds/StyledComponents";
import * as B from "./StyledBannerComp";
import processo1 from "../../assets/img/Processo1.png";
import Processos from "../processos/Processos";
import styled from "styled-components";


const Banner4 = () => {
    return (
        <B.Container backgroundImage={backgroundImage} height="160vh" id="bg">
            <div className="flex flex-col md:flex-row-reverse flex-wrap md:flex-nowrap">
                {/* Coluna do texto com ordem 1 em mobile e ordem 2 em telas maiores */}
                <div className="order-1 w-full md:w-7/12 flex flex-col justify-between mt-4 md:mt-0">
                    <B.StartText>
                        <S.Neutra1Text
                            fontSize="40px"
                            className="font-bold"
                        >
                            Explore nosso processo de criação de Soluções em Software
                        </S.Neutra1Text>
                    </B.StartText>
                    <Processos />
                    <div className="mt-10 px-8 md:px-0 md:ml-auto">
                        <S.Button height="48px" className="w-full md:w-64 md:mr-10 md:ml-auto">Conheça nossos cases</S.Button>
                    </div>
                </div>
                {/* Coluna da imagem com ordem 2 em mobile e ordem 1 em telas maiores */}
                <div className="order-2 w-full md:w-5/12 mt-10">
                    <img
                        src={processo1}
                        alt="processo"
                        className="max-w-full h-auto md:max-w-none"
                        style={{ width: "100%", maxWidth: "557px", height: "auto" }}
                    />
                </div>
            </div>
        </B.Container>
    );
};

export default Banner4;
