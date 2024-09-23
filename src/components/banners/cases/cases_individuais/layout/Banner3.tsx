import ProcessoLayout from 'src/components/layout/processos/ProcessoLayout'
import React from 'react'
import * as S from "src/assets/styleds/StyledComponents";
import * as B from "../../../StyledBannerComp";
import {Banner3Props} from "../interfaces"

const Banner3 = ({processo} : Banner3Props) => {
    
    return (
        <ProcessoLayout
            processos={processo.processos}
            img={
                <img
                    src={processo.banner}
                    alt="processo"
                    className="max-w-full h-auto md:max-w-none"
                    style={{ width: "100%", maxWidth: "557px", height: "auto" }}
                />
            }
            order={'2-1'}
        >
            <B.StartText>
                <S.Neutra1Text
                    fontSize="40px"
                    className="font-bold ml-10"
                >
                    Descubra o poder do sistema <span style={{color: S.colors.primario1}}>{processo.nome}</span>: Soluções em ação
                </S.Neutra1Text>
            </B.StartText>
        </ProcessoLayout>
    )
}

export default Banner3