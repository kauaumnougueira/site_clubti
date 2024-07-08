import { useState } from 'react';
import ClubTiLogo from "../../assets/img/club-ti_logo.png";
import MenuIcon from "../../assets/img/menu.png"; // Ícone do menu
import * as S from "./StyledHeader"; // Certifique-se de que este caminho está correto
import { Button } from "../../assets/styleds/StyledComponents";

interface HeaderProps {
    setPage: (page: string) => void;
}

const Header = ({ setPage }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Função para lidar com clique no item "cases"
    const handleMenuClick = (section: string) => {
        setIsOpen(false);
        if (section === 'cases') {
            setPage(section);
        }else{
            setPage('principal')
        }
    };

    return (
        <S.NavHeader>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
                <S.Menu isOpen={isOpen} className={`md:block ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {['beneficios', 'quem_somos', 'solucoes', 'cases', 'clientes'].map((section) => (
                            <li key={section}>
                                <S.NavLinkHeader
                                    href={`#${section}`}
                                    data-section={section} 
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    onClick={() => handleMenuClick(section)}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1).replace('_', ' ')}
                                </S.NavLinkHeader>
                            </li>
                        ))}
                        <li>
                            <S.NavLinkHeader
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                onClick={() => setIsOpen(false)}
                            >
                                <Button className={`text-white px-4 py-2 rounded ${isOpen && `outline bg-transparent`}`}>Entre em contato</Button>
                            </S.NavLinkHeader>
                        </li>
                    </ul>
                </S.Menu>
            </div>
        </S.NavHeader>
    );
};

export default Header;
