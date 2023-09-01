import axios from axios

export const foodAdvisorClient = axios.create(
    {
        baseURL: 'localhost:8080/api',
    }
)