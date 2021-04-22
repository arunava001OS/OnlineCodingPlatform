import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://judge0-ce.p.rapidapi.com',
    headers : {
        'x-rapidapi-key' : '7251840a39mshd85c55a22d152fcp15f642jsn945e3e0b6774',
        'x-rapidapi-host' : 'judge0-ce.p.rapidapi.com'
    }
})

export default instance;