import processos from "./processos.json";
import Processo from "./Processo";
import linhaProcessos from "../../assets/img/line_processos.png";

const Processos = () => {
    return (
        <div className="mt-5 relative">
            {/* <img src={linhaProcessos} alt="" width={3} className="absolute ml-7 mt-12" /> */}
            {processos.map((processo, index) => (
                <Processo key={index} imgUrl={processo.imgUrl} titulo={processo.titulo} texto={processo.texto} />
            ))}
        </div>
    );
};

export default Processos;
