import { useState } from 'react';
import ClubTiLogo from "../../assets/img/club-ti_logo.png";
import MenuIcon from "../../assets/img/menu.png"; // Importe um ícone apropriado para o menu
import * as S from "../../assets/styleds/StyledHeader";
import { Button } from "../../assets/styleds/StyledComponents";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <S.NavHeader className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <a href="/" className="flex items-center">
                    <img src={ClubTiLogo} alt="Logo" width="194" height="76" />
                </a>
                <button
                    className="md:hidden p-2 text-gray-700 focus:outline-none"
                    type="button"
                    onClick={toggleMenu}
                >
                    <img src={MenuIcon} alt="Menu" className="w-6 h-6" /> {/* Substitua com seu ícone */}
                </button>
                <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto bg-white md:bg-transparent">
                        <li className="nav-item">
                            <S.NavLinkHeader className="block py-2 text-gray-700 hover:text-blue-500" href="#beneficios">
                                Benefícios
                            </S.NavLinkHeader>
                        </li>
                        <li className="nav-item">
                            <S.NavLinkHeader className="block py-2 text-gray-700 hover:text-blue-500" href="#quem_somos">
                                Quem somos
                            </S.NavLinkHeader>
                        </li>
                        <li className="nav-item">
                            <S.NavLinkHeader className="block py-2 text-gray-700 hover:text-blue-500" href="#solucoes">
                                Soluções
                            </S.NavLinkHeader>
                        </li>
                        <li className="nav-item">
                            <S.NavLinkHeader className="block py-2 text-gray-700 hover:text-blue-500" href="#cases">
                                Cases
                            </S.NavLinkHeader>
                        </li>
                        <li className="nav-item">
                            <S.NavLinkHeader className="block py-2 text-gray-700 hover:text-blue-500" href="#clientes">
                                Clientes
                            </S.NavLinkHeader>
                        </li>
                        <li className="nav-item">
                            <S.NavLinkHeader className="block py-2 text-gray-700 hover:text-blue-500" href="#">
                                <Button className="bg-blue-500 text-white px-4 py-2 rounded">Entre em contato</Button>
                            </S.NavLinkHeader>
                        </li>
                    </ul>
                </div>
            </div>
        </S.NavHeader>
    );
};

export default Header;
