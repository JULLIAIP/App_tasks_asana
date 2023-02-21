import { useState, useEffect } from 'react';


export default function useAsanaRequest(request) {
    const { axiosInstance, method, path, param, data } = request

    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {

        const requestAxios = async () => {
            try {
                const res = await axiosInstance[method](path, param, data)
                setResponse(res)

            } catch (error) {
                console.log(error)
                setErro(error)
            }finally{
                setIsLoading(false)
            }
        }
        requestAxios()

    }, [])


    return [response, isLoading, erro]

}