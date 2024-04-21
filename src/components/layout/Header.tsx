import ClubTiLogo from "../../assets/img/club-ti_logo.png";
import * as S from "../../assets/styleds/StyledHeader"
import {Button} from "../../assets/styleds/StyledComponents"


const Header = () => {
  return (
    <S.NavHeader className="navbar navbar-expand-lg">
      <a className="navbar-brand ml-3" href="#">
        <img src={ClubTiLogo} alt="" width="194" height="76" />
      </a>{" "}
      {/* Logo na extrema esquerda */}
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <S.NavLinkHeader className="nav-link" href="#">
              Benefícios
            </S.NavLinkHeader>
          </li>
          <li className="nav-item">
            <S.NavLinkHeader className="nav-link" href="#">
              Quem somos
            </S.NavLinkHeader>
          </li>
          <li className="nav-item">
            <S.NavLinkHeader className="nav-link" href="#">
              Soluções
            </S.NavLinkHeader>
          </li>
          <li className="nav-item">
            <S.NavLinkHeader className="nav-link" href="#">
              Cases
            </S.NavLinkHeader>
          </li>
          <li className="nav-item">
            <S.NavLinkHeader className="nav-link" href="#">
              Clientes
            </S.NavLinkHeader>
          </li>
          <li className="nav-item">
            <S.NavLinkHeader className="nav-link" href="#">
              <Button className="btn">Entre em contato</Button>
            </S.NavLinkHeader>
          </li>
        </ul>
      </div>
    </S.NavHeader>
  );
};

export default Header;
