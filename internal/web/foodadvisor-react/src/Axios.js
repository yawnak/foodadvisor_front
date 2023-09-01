import axios from 'axios'

export const foodAdvisorClient = axios.create(
    {
        baseURL: 'http://localhost:8080/api',
    }
)