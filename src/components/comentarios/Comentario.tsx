import React from 'react';
import styled, { css } from 'styled-components';

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
  width: 400px;
  height: 300px;
  color: white;
  gap: 10px;
  text-align: left;
  overflow: hidden;
  margin: 0 20px;
  transition: transform 0.3s, box-shadow 0.3s;

  ${({ active }) =>
    active &&
    css`
      transform: scale(1.05);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
      z-index: 1;
    `}
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
  margin-bottom: 5px;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* Número máximo de linhas */
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const UserRole = styled.div`
  font-size: 0.8rem;
  color: #00d563;
`;

const Comentario: React.FC<ComentarioProps> = ({ avatar, userName, userRole, content, rating, active }) => (
  <Card active={active}>
    <Quote>“</Quote>
    <Stars>
      {Array.from({ length: rating }, (_, i) => (
        <span key={i}>⭐</span>
      ))}
    </Stars>
    <Content>{content}</Content>
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
