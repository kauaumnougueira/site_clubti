import { useState } from "react";
import backgroundImage from "../../../assets/img/gradient_bg_2.png";
import * as S from "../../../assets/styleds/StyledComponents";
import * as B from "../StyledBannerComp";

const Banner2 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index : any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <B.Container backgroundImage={backgroundImage} className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl">
                <div className="col-span-1 flex flex-col md:items-start">
                    <B.ColContainer>
                        <B.StyledText style={{ color: "#18FECD" }}>
                            <S.Primario1Text fontSize="48px">
                                Transformando desafios
                                em soluções digitais
                            </S.Primario1Text>
                            <p
                                style={{
                                    marginTop: "40px",
                                    fontSize: "18px",
                                    color: "white",
                                    textAlign: "start",
                                    lineHeight: '25px',
                                    padding: '3px',
                                }}
                            >
                                A ClubTi oferece soluções ágeis e inovadoras
                                para otimizar seu negócio. Cresça com confiança
                                através do desenvolvimento de softwares, onde
                                cada solução é uma parceria para o sucesso
                            </p>
                        </B.StyledText>
                    </B.ColContainer>
                </div>
                <B.StyledAccordion className="col-span-1 mt-10">
                    <div className="accordion mx-2 md:mx-0 mb-32 md:mb-0">
                        {accordionItems.map((item, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    className={`accordion-button ${openIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <S.Primario3Text>{item.title}</S.Primario3Text>
                                    <span
                                        className={`accordion-button-icon ${openIndex === index ? 'rotated' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    <div className="p-4 text-gray-700">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </B.StyledAccordion>
            </div>
        </B.Container>
    );
};


const accordionItems = [
    {
        title: "Soluções Personalizadas",
        content: "Oferecemos expertise técnica e estratégica para orientar sua organização na escolha das melhores tecnologias e práticas de segurança, alinhadas aos objetivos do seu negócio."
    },
    {
        title: "Consultoria Estratégica",
        content: "Desenvolvemos sistemas e sites sob medida para atender às necessidades exclusivas da sua empresa, tornando os processos mais eficientes e eficazes."
    },
    {
        title: "Suporte Contínuo",
        content: "Conte com nosso suporte técnico contínuo, incluindo a manutenção regular e correção de bugs, para garantir a estabilidade e confiabilidade das soluções implementadas."
    }
];

export default Banner2;
