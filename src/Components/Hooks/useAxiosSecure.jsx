import axios from "axios"
import { useContext, useEffect } from "react"
import { Contex } from "../ContexApi/Contex"
import { useNavigate } from "react-router-dom"


const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut } = useContext(Contex)
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response
        }, error => {
            if (error.status === 401 || error.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
            }
        })
    }, [])
    return axiosInstance
}

export default useAxiosSecure