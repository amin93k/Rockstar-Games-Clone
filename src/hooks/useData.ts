import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig } from "axios"


const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig) => {
    const [data, setData] = useState<T[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>()

    useEffect(() => {
        setLoading(true)
        setError(undefined)

        apiClient.get(endPoint, requestConfig)
            .then(res => {
                if (requestConfig?.params.page > 1) {
                    setData(prevData => [...prevData, ...res.data.results])
                    return
                }
                setData(res.data?.results)
            })
            .catch(err => {
                if (err.response.data?.detail === "Invalid page.") {
                    setError(err.response.data.detail)
                }
                else
                    setError(err.message)
            })
            .finally(() => setLoading(false))
    },
        [JSON.stringify(requestConfig?.params)])

    return { data, loading, error }
}

export default useData