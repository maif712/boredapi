import axios from "axios";

async function getData(setData, setIsLoading) {
    setIsLoading(true)
    const url = "https://www.boredapi.com/api/activity"
    await axios.get(url)
            .then(res => setData(res.data))
    setIsLoading(false)
}

export default getData