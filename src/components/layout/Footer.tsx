import * as B from "../banners/StyledBannerComp";
import * as S from "../../assets/styleds/StyledComponents";
import backgroundImage from "../../assets/img/footer_bg.png";
import mobileBackgroundImage from "../../assets/img/Footer_mobile.png"
import MulherFooter from "../../assets/img/mulher_footer.png";

const Footer = () => {
    return (
        <B.Container
            backgroundImage={backgroundImage}
            mobileBackgroundImage={mobileBackgroundImage}
            mobileHeight="55vh"
            height="40vh"
            className="flex justify-center items-center mt-24 md:mt-48"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 mb-24 md:mb-96 gap-y-8 md:gap-y-0">
                {/* Seção da Imagem */}
                <div className="flex justify-center md:ml-48 mb-8 md:mb-36"
                    style={{
                        background: `linear-gradient(to bottom, transparent 50%, ${S.colors.primario3} 50%)`,
                    }}>
                    <img src={MulherFooter} alt="Mulher no Footer" className="md:-mt-48 w-40 md:w-auto" />
                </div>

                {/* Seção do Texto */}
                <div className="flex flex-col items-center md:items-start md:mr-48 md:mb-36 order-2"
                    style={{
                        background: `linear-gradient(to bottom, transparent 50%, ${S.colors.primario3} 50%)`,
                    }}>
                    <B.StartText className="text-center md:text-left">
                        <S.Primario3Text>
                            Descubra como a ClubTI pode elevar seu negócio
                        </S.Primario3Text>
                    </B.StartText>

                    {/* Nova div para o texto adicional */}
                    <div className="mt-8 md:mt-24 2xl:mt-40 md:pr-10 text-center md:text-left order-1">
                        <S.Neutra1Text className="mb-5">
                            Estamos aqui para ouvir você e oferecer soluções feitas sob medida para sua empresa!
                        </S.Neutra1Text>
                        <S.Button width="150px" height="50px">Entre em Contato</S.Button>
                    </div>
                </div>
            </div>
        </B.Container>
    );
};

export default Footer;
