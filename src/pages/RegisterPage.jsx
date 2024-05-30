import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import '../components/RegisterPage/styles/RegisterPage.css'

const RegisterPage = () => {

  const {register, handleSubmit, reset} = useForm()
  const { registereUser} = useAuth()

  const submit = data => {
    registereUser(data)

    reset({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      gender:'male'
    })
  }
  return (
    <article className='register__container'>
      <form  className='register__form' onSubmit={handleSubmit(submit)}>
        <h2 className='register__title'>Register</h2>
        <hr className='register__hr' />  

        <div className='register__main'>

          <label className='register__label'>
            <span className='register__span'>First name</span>
            <input className='register__input' {...register('firstName')} type="text" />
          </label>

          <label className='register__label'>
            <span className='register__span'>Last name</span>
            <input className='register__input' {...register('lastName')}  type="text" />
          </label>

          <label className='register__label'>
            <span className='register__span'>Email</span>
            <input className='register__input' {...register('email')}  type="email" required />
          </label>

          <label className='register__label'>
            <span className='register__span'>Password</span>
            <input className='register__input' {...register('password')}  type="password" required />
          </label>
          
          <label className='register__label'>
            <span className='register__span'>Gender</span>
            <select className='register__input' {...register('gender')} >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div className='register__btn'>
          <button className='register__btn-submit'>Submit</button>
        </div>
      </form>
    </article>
  )
}

export default RegisterPage