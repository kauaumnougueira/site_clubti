import React from 'react';
import demoIcon from "../../../../../assets/img/demo_icon.png"
import { FaChartLine } from "react-icons/fa"; // Ícone para "Dashboard de Gerenciamento Empresarial"
import { Banner2Props } from '../interfaces';
import * as S from "../../../../../assets/styleds/StyledComponents";
import * as B from "../../../StyledBannerComp"


const Banner2 = ({ sobre }: Banner2Props) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-8 md:p-16">

            <div className="flex justify-center md:w-5/12 mb-6 md:mb-0">
                <img src={sobre.banner} alt="Imagem do Banner" className="w-full max-w-md h-auto" />
            </div>

            <div className="md:w-7/12 text-center md:text-left">
                <B.StartText className="mb-6">
                    <S.Primario3Text
                        className="text-md flex items-start">
                        Sobre o {sobre.nome}
                    </S.Primario3Text>
                </B.StartText>

                <S.Neutra4Text fontSize="20px">
                    {sobre.texto}
                </S.Neutra4Text>

                <div className="flex flex-wrap items-center justify-end mt-6">
                    <img src={demoIcon} alt="demo_icon" className="mr-6" />
                    <S.Primario3Text>Dashboard de Gerenciamento Empresarial</S.Primario3Text>
                    <div className="w-full mt-4 flex justify-end">
                        <S.Button width="150px" height="50px">
                            Acesse a demo
                        </S.Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Banner2;
