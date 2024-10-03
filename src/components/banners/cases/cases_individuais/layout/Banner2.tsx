import React from 'react';
import demoIcon from "../../../../../assets/img/demo_icon.png";
import { FaChartLine } from "react-icons/fa"; // Ícone para "Dashboard de Gerenciamento Empresarial"
import { Banner2Props } from '../interfaces';
import * as S from "../../../../../assets/styleds/StyledComponents";
import * as B from "../../../StyledBannerComp";

const Banner2 = ({ sobre }: Banner2Props) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 md:p-12 lg:p-16">
            {/* Imagem do banner */}
            <div className="flex justify-center w-full md:w-5/12 mb-6 md:mb-0">
                <img src={sobre.banner} alt="Imagem do Banner" className="w-full max-w-sm md:max-w-md h-auto" />
            </div>

            {/* Conteúdo textual */}
            <div className="w-full md:w-7/12 text-center md:text-left">
                <B.StartText className="mb-4 md:mb-6">
                    <S.Primario3Text className="text-lg md:text-xl flex items-start">
                        Sobre o {sobre.nome}
                    </S.Primario3Text>
                </B.StartText>

                <S.Neutra4Text fontSize="18px" className="mt-6 md:mt-4 px-4 md:px-0 text-justify text-base md:text-lg leading-[24px] md:leading-[28px]">
                    {sobre.texto}
                </S.Neutra4Text>

                {/* Ícone e botão */}
                <div className="flex flex-wrap items-center justify-center md:justify-end mt-6">
                    <img src={demoIcon} alt="demo_icon" className="mr-4 md:mr-6 w-8 h-8" />
                    <S.Primario3Text className="text-md md:text-lg">Dashboard de Gerenciamento Empresarial</S.Primario3Text>
                    <div className="w-full md:w-auto mt-4 flex justify-center md:justify-end">
                        <S.Button width="150px" height="50px" className="w-40 h-12 md:w-44 md:h-14 md:ml-5">
                            Acesse a demo
                        </S.Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner2;
