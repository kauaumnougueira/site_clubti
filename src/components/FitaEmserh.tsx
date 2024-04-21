import logoImage from "../assets/img/emserh_logo.png";
import styled from "styled-components";
import * as S from "../assets/styleds/StyledComponents"

const Logo = styled.img`
  width: 210px;
  height: 46px;
  margin-left: 55px;
  
  opacity: 70%;
`;

const Fita = styled.div`
  background-color: ${S.colors.neutra1};
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
`;

const fitaEmserh = () => {
  return (
    <Fita className="row">
      {[1, 2, 3, 4, 5].map((index) => (
        <Logo key={index} src={logoImage} alt="Logo" />
      ))}
    </Fita>
  );
};

export default fitaEmserh;
