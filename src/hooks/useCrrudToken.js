import axios from 'axios'
import React, { useState } from 'react'
import getConfigToken from '../services/getConfigToken'

const useCrrudToken = () => {

    const [response, setResponse] = useState()

    //READ  
    const getApi = (url, withToken) => {
        axios.get(url, withToken ? getConfigToken() : {})
        .then(res => setResponse(res.data))
        .catch(err => {
            if(err?.response.status === 401 || err?.response.status === 403){
                localStorage.removeItem('token')
                localStorage.removeItem('userLogged')
            }

        })
    }

    //CREATE
    const postApi = (url, data, withToken) => {
        axios.post (url,data, withToken ? getConfigToken() : {})
        .then(res => {
            console.log(res.data)
            setResponse(response ? [...response, res.data] : [res.data])
        })
        .catch(err => {
            if(err?.response.status === 401 || err?.response.status === 403){
                localStorage.removeItem('token')
                localStorage.removeItem('userLogged')
            }

        })
    }

    //DELETE
    const deleteApi = (url, id, withToken) => {
        axios.delete(url, withToken ? getConfigToken() : {})
        .then( res => {
            console.log(res)
            setResponse(response.filter(elm => id !== elm.id ))
        })
        .catch(err => {
            if(err?.response.status === 401 || err?.response.status === 403){
                localStorage.removeItem('token')
                localStorage.removeItem('userLogged')
            }

        })


    }

    return [response, getApi, postApi ,deleteApi]

}

export default useCrrudToken