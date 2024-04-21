import processos from "../processos/processos.json"
import Processo from "./Processo"
import linhaProcessos from "../../assets/img/line_processos.png"

const Processos = () => {
    return (
        <div className="mt-5" style={{position: "relative"}}>
            <img src={linhaProcessos} alt="" width={3} style={{position: "absolute", top: "5vh", left: "10%"}}/>
            {processos.map((processo, index) => (
                <Processo key={index} imgUrl={processo.imgUrl} titulo={processo.titulo} texto={processo.texto}/>
            ))}
        </div>
    )
}

export default Processos