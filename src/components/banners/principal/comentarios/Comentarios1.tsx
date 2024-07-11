import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Comentario from "./Comentario";
import comentarios from "./comentarios.json";

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  padding: 20px;
  width: 100%;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const Comentarios1 = () => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(comentarios.length / 2)
  ); // Começar com o índice do meio
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 420; // card width + margin
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const scrollArea = scrollRef.current;
    if (scrollArea) {
      const cardWidth = 420; // card width + margin
      const startIndex = Math.floor(comentarios.length / 2);
      scrollArea.scrollTo({
        left:
          startIndex * cardWidth -
          (scrollArea.clientWidth - cardWidth) / 2,
        behavior: "smooth",
      });
      scrollArea.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [comentarios.length]);

  return (
    <CarouselContainer ref={scrollRef}>
      <Cards>
        {comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            rating={comentario.rating}
            content={comentario.comentario}
            avatar={comentario.image}
            userName={comentario.autor}
            userRole={comentario.cargo}
            active={index === activeIndex}
          />
        ))}
      </Cards>
    </CarouselContainer>
  );
};

export default Comentarios1;
