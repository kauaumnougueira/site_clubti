import Cards from "./cards/Cards"
import Footer from "./Footer"

interface Banner2Props {
    setPage: (page: string) => void
}

const Banner2 = ({ setPage }: Banner2Props) => {
    return (
        <>
            <Cards setPage={setPage} />
            <Footer />
        </>
    )
}

export default Banner2