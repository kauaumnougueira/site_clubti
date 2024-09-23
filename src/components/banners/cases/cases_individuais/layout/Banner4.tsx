import { Banner4Props } from "../interfaces"
import * as S from "../../../../../assets/styleds/StyledComponents";
import ComentarioIcon from "../../../../../assets/img/comentario_icon.png"

const Banner4 = ({ comentario }: Banner4Props) => {
    return (
        <div className="flex items-center justify-between px-24 py-10 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg">
            {/* Seção de Texto */}
            <div className="max-w-md">
                <img src={ComentarioIcon} alt="icone_comentario" />
                <S.Primario3Text fontSize="30px">{comentario.nome}</S.Primario3Text>
                <S.Primario2Text fontSize="20px">{comentario.cargo}</S.Primario2Text>
                <S.Neutra4Text fontSize="20px">
                    {comentario.texto}
                </S.Neutra4Text>
                <div className="mt-10">
                    <S.Button width="150px" height="40px">
                        Acesse a demo
                    </S.Button>
                </div>
            </div>

            {/* Imagem do Produto */}
            <div className="w-1/2">
                <img src={comentario.banner} alt="Demo do Produto" className="rounded-lg shadow-lg" />
            </div>
        </div>
    )
}

export default Banner4