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
    width: 70vw;
    height: 370px;
    background-color: ${S.colors.primario3};
    border-radius: 10px;
    display: inline-block; // Mantém os itens em linha
    box-shadow: 0px 2px 15px #052232;
    margin: 0 15px; // Adiciona margem entre os itens no mobile
   

    @media (min-width: 768px) {
        width: ${(props) => (props.tamanho === 1 ? `550px` : `450px`)};
        display: flex;
        height: 180px;
        margin: 20px 20px;
    }
`;

const Imagem = styled.div<ImagemProps>`
    background-image: url(${(props) => props.imgUrl});
    flex: 1;
    background-size: cover;
    background-position: center;
    border-radius: 10px 0 0 10px;

    @media (max-width: 767px) {
        border-radius: 10px 10px 0 0;
        height: 120px;
        flex: none;
        width: 100%;
    }
`;

const Conteudo = styled.div`
    text-align: start;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    @media (max-width: 767px) {
        text-align: center; /* Centraliza o texto no mobile */
        p{
            font-size: 20px;
            line-height: 25px;
        }
    }
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
