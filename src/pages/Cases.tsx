import Banner1 from "../components/banners/cases/Banner1"
import Banner2 from "../components/banners/cases/Banner2"

interface CasesProps{
    setPage: (page:string) => void
}

const Cases = ({setPage}:CasesProps) => {
    return (
        <>
            <Banner1/>
            <Banner2 setPage={setPage}/>
        </>
    )
}

export default Cases