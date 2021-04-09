import { useState, useEffect } from 'react'

const useGetData = (api) => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch(api)
            .then(res => {
                if (!res.ok) {
                    throw Error ('could not collect resources')
                }
                return res.json()
            })
            .then(data => setData(data))
            .catch(err => console.log(err))
    },[api])
    return data
}

export default useGetData