import styled from "styled-components";
import * as S from "../../assets/styleds/StyledComponents";
import * as B from "../banners/StyledBannerComp";

interface ProcessoProps {
    imgUrl: string;
    titulo: string;
    texto: string;
}

const Container = styled.div``;

const Processo = ({ imgUrl, titulo, texto }: ProcessoProps) => {
    return (
        <Container className="row mt-3">
            <div className="col-2 mx-auto">
                <img src={imgUrl} alt={titulo} className="ml-5"/>
            </div>
            <B.StyledText className="col-10">
                <S.SecundarioText className="mb-2" fontSize="24px">{titulo}</S.SecundarioText>
                <S.Neutra1Text>{texto}</S.Neutra1Text>
            </B.StyledText>
        </Container>
    );
};

export default Processo;