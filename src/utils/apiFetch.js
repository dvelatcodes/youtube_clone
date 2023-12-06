import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.Rapid - Api_Key
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const dataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}