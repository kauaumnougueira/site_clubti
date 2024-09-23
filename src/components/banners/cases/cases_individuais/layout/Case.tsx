import Banner1 from "./Banner1";
import Banner3 from "./Banner3";
import Banner2 from "./Banner2";
import Banner4 from "./Banner4";
import { useEffect, useState } from "react";
import { Case as CaseInterface } from "../interfaces"; // Importa a interface 'Case' e renomeia para 'CaseInterface' para evitar conflito de nomes.
import Footer from "./Footer";

const Case = () => {
    const route = localStorage.getItem('route');

    // Inicializa `data` com a estrutura correta conforme a interface `CaseInterface`
    const [data, setData] = useState<CaseInterface>({
        processo: {
            nome: "",
            banner: "", // Inicializa banner como string vazia
            processos: [] // Inicializa processos como array vazio
        },
        chamada: {
            banner: "",
            logo: "",
            texto: "" // Inicializa texto como string vazia
        },
        sobre: {
            nome: "",
            banner: "",
            texto: "",
            link: ""
        },
        comentario: {
            nome: "",
            cargo: "",
            banner: "",
            texto: "",
        },
        bannerFooter: ""
    });

    const carregarDados = async () => {
        try {
            const [processo, chamada, sobre, comentario, bannerFooter] = await Promise.all([
                import(`../${route}/processos.json`),
                import(`../${route}/chamada.json`),
                import(`../${route}/sobre.json`),
                import(`../${route}/comentario.json`),
                import(`../../../../../assets/img/cases/${route}/banner_footer.png`)
            ]);

            setData({
                processo: {
                    nome: processo.default.nome,
                    banner: processo.default.banner, // Atualiza o banner corretamente
                    processos: tratarProcessos(processo.default.processos) // Atualiza os processos usando a função tratarProcessos
                },
                chamada: chamada.default,
                sobre: sobre.default,
                comentario: comentario.default,
                bannerFooter: bannerFooter.default
            });

            console.log(data.bannerFooter)
        } catch (error) {
            console.error('Error loading JSON files:', error);
        }
    };

    useEffect(() => {
        if (route) {
            carregarDados();
        }
    }, [route]);

    const tratarProcessos = (processos: any[]) => {
        // Retorna um novo array com as propriedades modificadas
        return processos.map((processo: any) => ({
            ...processo,
            imgUrl: "/processos_medias/funcionalidade_media.png" // Define a propriedade imgUrl
        }));
    };

    return (
        <>
            <div>
                <Banner1 chamada={data.chamada} />
            </div>
            <div>
                <Banner2 sobre={data.sobre} />
            </div>
            <div>
                <Banner3 processo={data.processo} />
            </div>
            <div>
                <Banner4 comentario={data.comentario} />
            </div>
            <div className="mt-96">
                <Footer img={data.bannerFooter} />
            </div>
        </>
    );
};

export default Case;
