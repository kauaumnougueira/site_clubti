import FooterLayout from "../../layout/Footer";
import MulherFooter from "../../../assets/img/mulher_footer.png";
import * as B from "../StyledBannerComp"; // Preservando os estilos de banners se necessário
import * as S from "../../../assets/styleds/StyledComponents";

const Footer = () => {
    return (
        <FooterLayout grid={1}>
            {/* Seção do Texto */}
            <div className="flex flex-col justify-center items-center w-full rounded-2xl" style={{ background: `${S.colors.primario3}` }}>
                <div className="flex flex-col justify-center items-center text-center md:text-left md:px-10 md:my-16 my-10 mx-10">
                    <S.Neutra1Text className="mb-5 md:w-10/12 text-center" fontWeight="bold" fontSize="24px">
                        Conquiste seus objetivos com soluções inovadoras
                        em software
                    </S.Neutra1Text>
                    <a href="https://wa.me/559891314044?text=Olá%2C%20bom%20dia!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20sistema.%20Poderia%20me%20ajudar%3F"
                        target='_blank'>
                        <S.Button width="150px" height="50px" >Entre em Contato</S.Button>
                    </a>
                </div>
            </div>
        </FooterLayout>
    );
};

export default Footer;
