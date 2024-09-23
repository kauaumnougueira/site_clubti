import Banner1Layout from "../../../../layout/Banner1Layout";
import {Banner1Props} from "../interfaces"

const Banner1 = ({ chamada }: Banner1Props) => {
    return (
        <Banner1Layout height="80vh" mobileHeight="80vh" img={<img src={chamada.banner} alt="Banner" width="553" height="497" className="max-w-full h-auto" />}>
            <img src={chamada.logo} width="393" height="102" className="mb-5" />
            <p className="font-bold text-4xl"> {chamada.texto}</p>
        </Banner1Layout>
    );
};

export default Banner1;
