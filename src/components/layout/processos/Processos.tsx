import React from "react";
import Processo from "./Processo";

interface ProcessosProps {
    processos: Array<processo>;
}

type processo  = {
    imgUrl?: string;
    titulo: string;
    texto: string;
}

const Processos: React.FC<ProcessosProps> = ({ processos }) => {
    return (
        <div className="mt-5 relative ml-10">
            {/* <img src={linhaProcessos} alt="" width={3} className="absolute ml-7 mt-12" /> */}
            {processos.map((processo, index) => (
                <Processo key={index} imgUrl={processo.imgUrl} titulo={processo.titulo} texto={processo.texto} />
            ))}
        </div>
    );
};

export default Processos;
