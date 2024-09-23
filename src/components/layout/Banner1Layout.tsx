import React from "react";
import backgroundImage from "../../../src/assets/img/gradient_bg_1.png";
import * as B from "../banners/StyledBannerComp";

interface BannerProps {
    img: JSX.Element;
    children: React.ReactNode;
    height?: string;
    mobileHeight?: string;
}

const Banner1Layout: React.FC<BannerProps> = ({ img, children, height, mobileHeight }) => {
    return (
        <B.Container
            backgroundImage={backgroundImage}
            height={height}
            mobileHeight={mobileHeight}
            className="flex items-center justify-center"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0 w-full max-w-6xl">
                <div className="col-span-1 flex flex-col items-center md:items-start">
                    <B.ColContainer className="text-center md:text-left flex flex-col items-center md:items-start">
                        <B.StyledText className="flex flex-col items-center md:items-start">
                            {children}
                        </B.StyledText>
                    </B.ColContainer>
                </div>
                <div className="col-span-1 flex justify-center">
                    {img}
                </div>
            </div>
        </B.Container>
    );
};

export default Banner1Layout;
