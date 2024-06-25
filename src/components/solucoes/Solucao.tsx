import styled from "styled-components";
import * as S from "../../assets/styleds/StyledComponents";

interface ImagemProps {
    imgUrl: string;
}

interface ContainerProps {
    tamanho: number;
}

interface SolucoesProps extends ImagemProps, ContainerProps {
    texto: string;
    titulo: string;
}

const Container = styled.div<ContainerProps>`
    user-select: none;
    cursor: pointer;
    margin: 20px 20px;
    width: ${(props) => (props.tamanho === 1 ? `550px` : `450px`)};
    height: 180px;
    background-color: ${S.colors.primario3};
    border-radius: 10px;
    display: flex;
    box-shadow: 0px 2px 15px #052232;
`;

const Imagem = styled.div<ImagemProps>`
    background-image: url(${(props) => props.imgUrl});
    flex: 1;
    background-size: cover;
    border-radius: 10px 0 0 10px;
`;

const Conteudo = styled.div`
    text-align: left;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
`;

const Solucao = ({ imgUrl, texto, titulo, tamanho }: SolucoesProps) => {
    return (
        <Container tamanho={tamanho}>
            <Imagem imgUrl={imgUrl} />
            <Conteudo>
                <S.Primario1Text fontSize="24px">{titulo}</S.Primario1Text>
                <S.Neutra1Text>{texto}</S.Neutra1Text>
            </Conteudo>
        </Container>
    );
};

export { Solucao };
