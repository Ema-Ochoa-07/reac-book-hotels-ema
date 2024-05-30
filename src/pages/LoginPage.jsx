import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'

const LoginPage = () => {

  const {register, handleSubmit, reset} = useForm()
  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email:'',
      password:''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Login User</h2>
        <div>
          <label>
            <span>Email</span>
            <input  {...register('email')} type="email" />
          </label>
          <label>
            <span>Password</span>
            <input {...register('password')} type="password" />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginPage