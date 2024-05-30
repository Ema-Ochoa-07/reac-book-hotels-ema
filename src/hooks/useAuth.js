import axios from 'axios'
import React from 'react'

const useAuth = () => {

    const registereUser = (data) => {
        const url = 'https://hotels-api.academlo.tech/users'
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    //login
    const loginUser = (data) => {
        const url = 'https://hotels-api.academlo.tech/users/login'
        axios.post(url, data)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userLogged', JSON.stringify(res.data.user))
        })
        .catch(err => console.log(err))
    }

    return { registereUser, loginUser }

}

export default useAuth