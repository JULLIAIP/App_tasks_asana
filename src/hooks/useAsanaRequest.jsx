import { useState, useEffect } from 'react';
import {instanceAxios} from '../global/api'

export default function useAsanaRequest(request) {

    const { method, path, param, data } = request

    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {

        //usando o axios instancia
        instanceAxios [method](path, param, data)

            //acontece no sucesso
            .then((res) => setResponse(res))

            //acontece no erro
            .catch((error) => {
                console.log(error)
                setErro(error)
            })

            //tanto no sucesso quanto no erro
            .finally(() => setIsLoading(false))

    }, [])


    return [response, isLoading, erro]

}