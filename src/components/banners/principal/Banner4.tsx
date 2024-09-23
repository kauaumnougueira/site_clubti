import backgroundImage from "../../../assets/img/gradient_bg_3.png";
import * as S from "../../../assets/styleds/StyledComponents";
import * as B from "../StyledBannerComp";
import styled from "styled-components";
import processo1 from "../../../assets/img/Processo1.png"
import processos from "./processos/processos.json"
import ProcessoLayout from "../../layout/processos/ProcessoLayout";


const Banner4 = () => {
    return (
        <ProcessoLayout
            processos={processos}
            img={
                <img
                    src={processo1}
                    alt="processo"
                    className="max-w-full h-auto md:max-w-none"
                    style={{ width: "100%", maxWidth: "557px", height: "auto" }}
                />
            }
            button={
                <S.Button height="48px" className="w-full md:w-64 md:mr-10 md:ml-auto">Conheça nossos cases</S.Button>
            }
            order={'1-2'}
        >
            <B.StartText>
                <S.Neutra1Text
                    fontSize="40px"
                    className="font-bold"
                >
                    Explore nosso processo de criação de Soluções em Software
                </S.Neutra1Text>
            </B.StartText>
        </ProcessoLayout>
    );
};

export default Banner4;
