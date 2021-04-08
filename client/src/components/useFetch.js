import { useState, useEffect } from 'react'

const useFetch = (api) =>{
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch(api)
            .then(res => {
                if (!res.ok) {
                    throw Error ('could not collect resources')
                }
                return res.json()
            })
            .then(data => setBlogs(data))
            .catch(err => console.log(err))
    },[api])
    return blogs
}

export default useFetch