import { useState } from 'react';
import ClubTiLogo from "../../assets/img/club-ti_logo.png";
import * as S from "../../assets/styleds/StyledHeader";
import { Button } from "../../assets/styleds/StyledComponents";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <S.NavHeader className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <a className="ml-3" href="/">
                <img src={ClubTiLogo} alt="Logo" width="194" height="76" />
            </a>
            <button
                className="block md:hidden p-2 text-gray-700"
                type="button"
                onClick={toggleMenu}
            >
                <span className="material-icons">menu</span> {/* Use um ícone ou SVG apropriado */}
            </button>
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } md:flex md:items-center w-full md:w-auto`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 w-full md:w-auto">
                    <li className="nav-item">
                        <S.NavLinkHeader
                            className="block py-2 text-gray-700 hover:text-blue-500"
                            href="#beneficios"
                        >
                            Benefícios
                        </S.NavLinkHeader>
                    </li>
                    <li className="nav-item">
                        <S.NavLinkHeader
                            className="block py-2 text-gray-700 hover:text-blue-500"
                            href="#quem_somos"
                        >
                            Quem somos
                        </S.NavLinkHeader>
                    </li>
                    <li className="nav-item">
                        <S.NavLinkHeader
                            className="block py-2 text-gray-700 hover:text-blue-500"
                            href="#solucoes"
                        >
                            Soluções
                        </S.NavLinkHeader>
                    </li>
                    <li className="nav-item">
                        <S.NavLinkHeader
                            className="block py-2 text-gray-700 hover:text-blue-500"
                            href="#cases"
                        >
                            Cases
                        </S.NavLinkHeader>
                    </li>
                    <li className="nav-item">
                        <S.NavLinkHeader
                            className="block py-2 text-gray-700 hover:text-blue-500"
                            href="#clientes"
                        >
                            Clientes
                        </S.NavLinkHeader>
                    </li>
                    <li className="nav-item">
                        <S.NavLinkHeader
                            className="block py-2 text-gray-700 hover:text-blue-500"
                            href="#"
                        >
                            <Button className="bg-blue-500 text-white px-4 py-2 rounded">Entre em contato</Button>
                        </S.NavLinkHeader>
                    </li>
                </ul>
            </div>
        </S.NavHeader>
    );
};

export default Header;
