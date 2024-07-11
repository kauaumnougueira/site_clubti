import { useState } from "react";
import { motion } from "framer-motion";
import Comentario from "./Comentario";
import comentarios from "./comentarios.json";
import * as S from "../../../../assets/styleds/StyledComponents";


const Comentarios = () => {
  const [positionIndexes, setPositionIndexes] = useState(() => {
    return Array.from({ length: comentarios.length }, (_, i) => i);
  });

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => (prevIndex + 1) % comentarios.length);
    });
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      return prevIndexes.map(
        (prevIndex) => (prevIndex + comentarios.length - 1) % comentarios.length
      );
    });
  };

  const determinePositions = (index: number, total: number) => {
    if (total <= 5) {
      // Para menos de 5 comentários, mantenha os cinco visíveis
      const visiblePositions = ["center", "left1", "left", "right", "right1"];
      const halfVisible = Math.floor(visiblePositions.length / 2);
      return visiblePositions[
        (index + total - halfVisible) % visiblePositions.length
      ];
    } else {
      // Para mais de 5 comentários, ajuste dinamicamente
      const centralIndex = Math.floor(total / 2);
      if (index === centralIndex) return "center";
      if (index < centralIndex) return index === centralIndex - 1 ? "left1" : "left";
      if (index > centralIndex) return index === centralIndex + 1 ? "right1" : "right";
    }
  };

  const cardVariants = {
    center: { x: "0%", scale: 1, zIndex: 3, opacity: 1 },
    left1: { x: "-50%", scale: 0.8, zIndex: 2, opacity: 1 },
    left: { x: "-100%", scale: 0.6, zIndex: 1, opacity: 1 },
    right1: { x: "50%", scale: 0.8, zIndex: 2, opacity: 1 },
    right: { x: "100%", scale: 0.6, zIndex: 1, opacity: 1 },
    hidden: {zIndex: 0, scale: 0.5, x: "200%" }, // para comentários que estão fora da tela
  };

  return (
    <div className="w-full flex flex-col items-center justify-between h-screen overflow-hidden mb-1 md:mb-96 pb-96 md:pb-40">
      <div className="relative w-full flex justify-center items-center flex-1 overflow-hidden">
        {comentarios.map((comentario, index) => (
          <motion.div
            key={index}
            className="absolute w-[90%] sm:w-[35%] flex justify-center"
            initial="hidden"
            animate={determinePositions(positionIndexes[index], comentarios.length)}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <Comentario
              rating={comentario.rating}
              content={comentario.comentario}
              avatar={comentario.image}
              userName={comentario.autor}
              userRole={comentario.cargo}
              active={positionIndexes[index] === 0}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row gap-2 pb-4 md:pb-8">
        <button
          className="text-white hover:text-black shadow-md rounded-full py-2 px-4 text-sm sm:text-base"
          onClick={handleBack}
          style={{backgroundColor: S.colors.primario2}}
        >
          Anterior
        </button>
        <button
          className="text-white hover:text-black shadow-md rounded-full py-2 px-4 text-sm sm:text-base"
          onClick={handleNext}
          style={{backgroundColor: S.colors.primario2}}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Comentarios;
