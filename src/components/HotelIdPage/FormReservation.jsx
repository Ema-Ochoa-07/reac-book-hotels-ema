import React from 'react'
import { useForm } from 'react-hook-form'
import useCrrudToken from '../../hooks/useCrrudToken'

const FormReservation = ({ hotelId }) => {

  const {register, handleSubmit, reset} = useForm()

  const [, , createBooking] = useCrrudToken()

  const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    const objData = {...data, hotelId}
    createBooking(url, objData, true)
    reset({
      checkIn:'',
      checkOut:''
    })
  }

  return (
    <div>
      <h3>If you want to book, please give me your:</h3>
      <form onSubmit={handleSubmit(submit)} >
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')}  type="date" />
        </label>

        <label>
          <span>Check-out</span>
          <input {...register('checkOut')}  type="date" />
        </label>

        <button>Book now!</button>
      </form>
    </div>
  )
}

export default FormReservation