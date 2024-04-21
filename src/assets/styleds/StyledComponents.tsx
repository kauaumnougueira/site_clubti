import styled from "styled-components";

export const colors = {
    primario1: "#18FECD",
    primario2: "#18B8CD",
    primario3: "#052232",
    secundario: "#8BFF8C",
    neutra1: "#F5FFFA",
    neutra2: "#CFE7DA",
    neutra3: "#99A8A5",
    neutra4: "#0A0F11",
    reacao1: "#42C943",
    reacao2: "#F44040",
    reacao3: "#F4B740",
};

interface FontProps {
    fontSize?: string,
}
interface EstilosProps extends FontProps {
    width?: string,
    height?: string,
}

export const Button = styled.button<EstilosProps>`
    background-color: ${colors.primario1};
    color: ${colors.primario3};
    font-weight: bold;
    border-color: transparent;
    margin-top: -5px;
    ${(props) => props.width ? `width: ${props.width};` : ' '}
    ${(props) => props.height ? `height: ${props.height};` : ' '}
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ' '}

    /* transition: transform 0.3s ease; */
    border-radius: 5px;

    &:hover {
        /* transform: translateY(
            -5px
        );  */
        background-color: ${colors.primario2};
        color: ${colors.primario3};
    }

    &:active {
        background-color: ${colors.primario3};
        color: ${colors.neutra1};
        border-color: transparent;
        outline: none;
    }

    &:disabled {
        backgroundcolor: ${colors.neutra3};
        color: ${colors.primario3};
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const ButtonSecundario = styled.button<EstilosProps>`
    background-color: ${colors.neutra1};
    color: ${colors.primario3};
    font-weight: bold;
    border-color: ${colors.primario1};
    margin-top: -5px;
    ${(props) => props.width ? `width: ${props.width};` : ' '}
    ${(props) => props.height ? `height: ${props.height};` : ' '}
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ' '}
    /* transition: transform 0.3s ease; */
    border-radius: 5px;

    &:hover {
        /* transform: translateY(
            -5px
        );  */
        background-color: ${colors.neutra1};
        color: ${colors.primario2};
        border-color: ${colors.primario2};
    }

    &:active {
        background-color: ${colors.neutra1};
        color: ${colors.primario3};
        border-color: ${colors.primario3};
        outline: none;
    }

    &:disabled {
        backgroundcolor: ${colors.neutra1};
        color: ${colors.neutra3};
        border-color: ${colors.neutra3};
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

export const ButtonSucesso = styled.button<EstilosProps>`
    background-color: ${colors.reacao1};
    color: ${colors.neutra1};
    font-weight: bold;
    border-color: transparent;
    margin-top: -5px;
    ${(props) => props.width ? `width: ${props.width};` : ' '}
    ${(props) => props.height ? `height: ${props.height};` : ' '}
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ' '}
    /* transition: transform 0.3s ease; */
    border-radius: 5px;
`;

export const ButtonErro = styled.button<EstilosProps>`
    background-color: ${colors.reacao2};
    color: ${colors.neutra1};
    font-weight: bold;
    border-color: transparent;
    margin-top: -5px;
    ${(props) => props.width ? `width: ${props.width};` : ' '}
    ${(props) => props.height ? `height: ${props.height};` : ' '}
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ' '}
    /* transition: transform 0.3s ease; */
    border-radius: 5px;
`;

export const ButtonAtencao = styled.button<EstilosProps>`
    background-color: ${colors.reacao3};
    color: ${colors.neutra1};
    font-weight: bold;
    border-color: transparent;
    margin-top: -5px;
    ${(props) => props.width ? `width: ${props.width};` : ' '}
    ${(props) => props.height ? `height: ${props.height};` : ' '}
    ${(props) => props.fontSize ? `font-size: ${props.fontSize};` : ' '}
    /* transition: transform 0.3s ease; */
    border-radius: 5px;
`;

export const Primario1Text = styled.p<FontProps>`
    margin-bottom: 10px;
    color: ${colors.primario1};
    font-size: ${(props) => props.fontSize || '48px'};
`;

export const Primario2Text = styled.p<FontProps>`
    margin-top: 20px;
    color: ${colors.primario2};
    font-size: ${(props) => props.fontSize || '24px'};
`;

export const Primario3Text = styled.p<FontProps>`
    color: ${colors.primario3};
    font-weight: bold;
    font-size: ${(props) => props.fontSize || '20px'};
    margin: auto 0;
`;

export const Neutra1Text = styled.p<FontProps>`
    color: ${colors.neutra1};
    font-size: ${(props) => props.fontSize || '16px'};
`; 

export const Neutra2Text = styled.p<FontProps>`
    color: ${colors.neutra2};
    font-size: ${(props) => props.fontSize || '16px'};
`; 

export const Neutra3Text = styled.p<FontProps>`
    color: ${colors.neutra3};
    font-size: ${(props) => props.fontSize || '16px'};
`; 

export const SecundarioText = styled.p<FontProps>`
    color: ${colors.secundario};
    font-size: ${(props) => props.fontSize || '20px'};
`