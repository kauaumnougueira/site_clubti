import { useState } from "react";
import backgroundImage from "../../assets/img/gradient_bg_3.png";
import * as S from "../../assets/styleds/StyledComponents";
import * as B from "./StyledBannerComp";
import processo1 from "../../assets/img/Processo1.png";
import Processos from "../processos/Processos";

const Banner4 = () => {
    return (
        <B.Container backgroundImage={backgroundImage} height="150vh">
            <div className="row">
                <div className="col-5">
                    <img
                        src={processo1}
                        alt="processo"
                        width="557px"
                        height="563px"
                    />
                </div>
                <div className="col-7 d-flex flex-column justify-content-between">
                    <B.StyledText>
                        <S.Neutra1Text
                            fontSize="40px"
                            style={{
                                borderLeft: "5px solid #8BFF8C",
                                paddingLeft: "12px",
                            }}
                        >
                            Explore nosso processo de criação de Soluções em
                            Software
                        </S.Neutra1Text>
                    </B.StyledText>
                    <Processos />
                    <S.Button width="227px" height="48px" className="ml-auto mr-5 mt-3">Conheça nossos cases</S.Button>
                </div>
            </div>
        </B.Container>
    );
};

export default Banner4;
