import styled from "styled-components"
import * as S from './StyledComponents'

export const NavHeader = styled.nav`
    background-color: ${S.colors.primario3};
    height: 113px;
`
export const NavLinkHeader = styled.a`
    text-align: center;
    margin-right: 50px;
    color: ${S.colors.neutra1};
    font-size: 16px;

    &:hover{
        outline:none;
        color: ${S.colors.neutra1};
    }

    &:focus {
        outline: none;
        color: ${S.colors.neutra1};
    }
`