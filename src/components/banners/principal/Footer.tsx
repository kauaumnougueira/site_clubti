import FooterLayout from "../../layout/Footer";
import MulherFooter from "../../../assets/img/mulher_footer.png";
import * as B from "../StyledBannerComp"; // Preservando os estilos de banners se necessário
import * as S from "../../../assets/styleds/StyledComponents";

const Footer = () => {

    return (
        <FooterLayout>
            {/* Seção da Imagem */}
            <div className="flex justify-center md:ml-48 md:mb-36 md:order-1 order-2 gradient">
                <img src={MulherFooter} alt="Mulher no Footer" className="md:-mt-48 w-40 md:w-auto" />
            </div>

            {/* Seção do Texto */}
            <div className="flex flex-col items-center md:items-start md:mr-48 md:mb-36 md:order-2 order-1 -mt-48 md:mt-0"
                style={{
                    background: `linear-gradient(to bottom, transparent 50%, ${S.colors.primario3} 50%)`
                }}>
                <B.StartText className="text-center md:text-left">
                    <S.Primario3Text>
                        Descubra como a ClubTI pode elevar seu negócio
                    </S.Primario3Text>
                </B.StartText>

                {/* Nova div para o texto adicional */}
                <div className="mt-8 md:mt-24 2xl:mt-40 md:pr-10 text-center md:text-left mt-20 px-10">
                    <S.Neutra1Text className="mb-5">
                        Estamos aqui para ouvir você e oferecer soluções feitas sob medida para sua empresa!
                    </S.Neutra1Text>
                    <a
                        href="https://wa.me/559891314044?text=Olá%2C%20bom%20dia!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20sistema.%20Poderia%20me%20ajudar%3F"
                        target='_blank'>
                        <S.Button width="150px" height="50px">Entre em Contato</S.Button>
                    </a>
                </div>
            </div>
        </FooterLayout>
    )

}

export default Footer