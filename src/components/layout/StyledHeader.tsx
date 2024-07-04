import styled from "styled-components"
import * as S from '../../assets/styleds/StyledComponents'

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


interface MenuProps {
    isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
    background-color: ${S.colors.primario3};
    z-index: 999;
    margin-left: auto;
    a{
        text-align: start;
    }
    ${(props) => props.isOpen && 
        `button{
            background-color: transparent;
            color: white;
            border: 1px solid ${S.colors.primario1}
        }`
    }
`