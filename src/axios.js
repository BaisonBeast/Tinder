import axios from "axios"

const instance = axios.create({
    baseURL: "https://project-tinder-backend-1.herokuapp.com",
})

export default instance;