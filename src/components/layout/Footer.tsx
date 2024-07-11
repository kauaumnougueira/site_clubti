import * as B from "../banners/StyledBannerComp";
import backgroundImage from "../../assets/img/footer_bg.png";
import mobileBackgroundImage from "../../assets/img/Footer_mobile.png";

interface FooterProps {
    grid?: 1 | 2;
    children: any
}

const Footer = ({grid = 2, children} : FooterProps) => {
    return (
        <B.Container
            backgroundImage={backgroundImage}
            mobileBackgroundImage={mobileBackgroundImage}
            mobileHeight="70vh"
            height="70vh"
            className="flex justify-center items-center md:mt-48"
        >
            <div className={`grid grid-cols-1 md:grid-cols-${grid} md:mb-44 md:gap-y-0 -mt-96 px-10 md:px-0`}>
                {children}
            </div>
        </B.Container>
    );
};

export default Footer;
