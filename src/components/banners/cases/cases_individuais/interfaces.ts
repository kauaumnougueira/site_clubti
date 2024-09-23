export interface Banner1Props {
    chamada: {
        banner: string;
        logo: string;
        texto: string;
    };
}

export interface Banner2Props{
    sobre: {
        nome: string,
        banner: string;
        texto: string;
        link: string;
    }
}

export interface Banner3Props {
    processo: {
        nome: string
        banner:string
        processos: Array<{ imgUrl?: string; titulo: string; texto: string }>
    }
}

export interface Banner4Props{
    comentario: {
        nome: string,
        cargo: string,
        banner: string,
        texto: string
    }
}

export interface Case {
    processo: Banner3Props["processo"]
    sobre: Banner2Props["sobre"]
    chamada: Banner1Props["chamada"]
    comentario: Banner4Props["comentario"]
    bannerFooter: string
}