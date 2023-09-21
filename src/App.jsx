import { useEffect, useState } from "react"
import Loader from "./Loader"
import getData from "./services/getData"
import Info from "./components/Info"


export default function App() {


    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData(setData, setIsLoading)
    }, [])

    const handleGetData = () => {
        getData(setData, setIsLoading)
    }

    return (
        <main>
            <h1 className="main__h1-title">are you bored?</h1>
            <div className="main__div-content">
                {isLoading ? <Loader /> :
                    <>
                        <h3 className="main__h3-content">{data?.activity}</h3>
                        <div className="main__content-info">
                            <Info data={data}/>
                        </div>
                        <button onClick={handleGetData} className="btn">
                            <figure>
                                <img src="./Images/icon-dice.svg" alt="" />
                            </figure>
                        </button>
                    </>}
            </div>
        </main>
    )
}