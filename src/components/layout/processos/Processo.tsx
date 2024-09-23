import React from "react";
import styled from "styled-components";
import * as S from "../../../assets/styleds/StyledComponents";

interface ProcessoProps {
    imgUrl?: string;
    titulo: string;
    texto: string;
}

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`;

const ImageContainer = styled.div`
    width: auto;
    margin-right: 1rem;
    margin-left: 1rem;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const TextContainer = styled.div`
    flex: 1;
    text-align: left;
`;

const Processo: React.FC<ProcessoProps> = ({ imgUrl, titulo, texto }) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={imgUrl} alt={titulo} />
            </ImageContainer>
            <TextContainer>
                <S.SecundarioText className="text-xl">{titulo}</S.SecundarioText>
                <S.Neutra1Text className="pr-3">{texto}</S.Neutra1Text>
            </TextContainer>
        </Container>
    );
};

export default Processo;
