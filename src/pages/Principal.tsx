import Banner1 from "../components/banners/principal/Banner1";
import Banner2 from "../components/banners/principal/Banner2";
import Banner3 from "../components/banners/principal/Banner3";
import Banner4 from "../components/banners/principal/Banner4";
import Banner5 from "../components/banners/principal/Banner5";
import LogoRibbon from "../components/banners/principal/Faixa/LogoRibbon";

const Principal = () => {
    return (
        <>
            <div>
                <Banner1 />
            </div>
            <LogoRibbon />
            <div id="beneficios">
                <Banner2 />
            </div>
            <div id="quem_somos">
                <Banner3 />
            </div>
            <div id="banner4">
                <Banner4 />
            </div>

            <Banner5 />
        </>
    )
}

export default Principal