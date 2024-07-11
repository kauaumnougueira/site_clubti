import styled from "styled-components";
import * as S from "../../../../assets/styleds/StyledComponents"
import logos from "./logos.json"

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
      {logos.map((logo, index) => (
        <Logo key={index} src={logo.imgUrl} alt={logo.titulo} />
      ))}
    </Fita>
  );
};

export default fitaEmserh;
