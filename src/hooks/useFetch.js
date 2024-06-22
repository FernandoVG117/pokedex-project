import axios from "axios";
import { useState } from "react"

const useFetch = () => {
    const [apiData, setApiData] = useState();

    const getApi = (url) => {
        axios.get(url)
            .then((answer) => setApiData(answer.data))
            .catch((err) => console.log(err))
    }

    const getType = (url) => {
        axios.get(url)
            .then((answer) => setApiData({
                results: answer.data.pokemon.map(
                    (poke) => poke.pokemon
                ),
            }))
            .catch((err) => console.log(err))
    }
    return [apiData, getApi, getType];
}

export default useFetch