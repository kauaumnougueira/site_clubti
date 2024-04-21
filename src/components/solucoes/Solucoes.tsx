import desImg from "../../assets/img/solucoes_medias/desenvolvimento_media.png";
import consImg from "../../assets/img/solucoes_medias/consultoria_media.png";
import solucoesData from "./solucoes.json";
import { Solucao } from "./Solucao";

const Solucoes = () => {
    const linhaSuperior = solucoesData.filter(
        (solucao) => solucao.tamanho === 1
    );
    const linhaInferior = solucoesData.filter(
        (solucao) => solucao.tamanho === 2
    );

    return (
        <div> 
            {/* Renderize os componentes Solucao para a linha superior */}
            <div style={{ display: "flex" }}>
                {linhaSuperior.map((solucao, index) => (
                    <Solucao
                        key={index}
                        imgUrl={solucao.imgUrl}
                        titulo={solucao.titulo}
                        texto={solucao.texto}
                        tamanho={solucao.tamanho}
                    />
                ))}
            </div>
            {/* Renderize os componentes Solucao para a linha inferior */}
            <div style={{ display: "flex" }}>
                {linhaInferior.map((solucao, index) => (
                    <Solucao
                        key={index}
                        imgUrl={solucao.imgUrl}
                        titulo={solucao.titulo}
                        texto={solucao.texto}
                        tamanho={solucao.tamanho}
                    />
                ))}
            </div>
        </div>
    );
};

export { Solucoes };