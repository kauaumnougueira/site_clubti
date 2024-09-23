import React from "react";
import backgroundImage from "../../../assets/img/gradient_bg_3.png";
import * as B from "../../banners/StyledBannerComp";
import Processos from "../../layout/processos/Processos";

interface BannerProps {
    img: JSX.Element;
    children: React.ReactNode;
    processos: Array<{ imgUrl?: string; titulo: string; texto: string }>;
    order: '1-2' | '2-1';
    button?: React.ReactNode;
}

const ProcessoLayout: React.FC<BannerProps> = ({ img, children, processos, order, button }) => {
    const orders = order.split('-');

    return (
        <B.Container backgroundImage={backgroundImage} height="160vh" id="bg">
            <div className="flex flex-col md:flex-row-reverse flex-wrap md:flex-nowrap">
                {/* Coluna do texto com ordem 1 em mobile e ordem 2 em telas maiores */}
                <div className={`order-${orders[0]} w-full md:w-7/12 flex flex-col justify-between mt-4 md:mt-0`}>
                    {children}
                    <Processos processos={processos} />
                    <div className="mt-10 px-8 md:px-0 md:ml-auto">
                        {button}
                    </div>
                </div>
                {/* Coluna da imagem com ordem 2 em mobile e ordem 1 em telas maiores */}
                <div 
                    className={`order-${orders[1]} w-full md:w-5/12 mt-10 md:mt-0 flex justify-center items-center`}
                    style={{ height: '100%' }} // Garante que a div ocupe toda a altura disponível
                >
                    {img}
                </div>
            </div>
        </B.Container>
    );
};

export default ProcessoLayout;