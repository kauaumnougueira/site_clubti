import React from 'react';
import styled, { css } from 'styled-components';
import quoteImage from "../../../../assets/img/comentario_icon.png"

interface ComentarioProps {
  avatar: string;
  userName: string;
  userRole: string;
  content: string;
  rating: number;
  active: boolean;
}

const Card = styled.div<{ active: boolean }>`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  background-color: #0b273b;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  height: 250px;
  color: white;
  gap: 10px;
  text-align: left;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

const Quote = styled.div`
  font-size: 3rem;
  line-height: 1rem;
  margin-bottom: -10px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  color: blue;
`;

const Content = styled.div<{ active: boolean }>`
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -20px;
  padding: 5px 20px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: -15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const UserRole = styled.div`
  font-size: 0.8rem;
  color: #00d563;
`;

const Comentario: React.FC<ComentarioProps> = ({
  avatar,
  userName,
  userRole,
  content,
  rating,
  active,
}) => (
  <Card active={active}>
    <Stars>
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>⭐</span>
      ))}
    </Stars>
    <Content active={active}>{content}</Content>
    <Footer style={{ borderTop: 'solid 1px'}}>
      <Avatar src={avatar} alt={userName} />
      <UserInfo>
        <UserName>{userName}</UserName>
        <UserRole>{userRole}</UserRole>
      </UserInfo>
    </Footer>
  </Card>
);

export default Comentario;
