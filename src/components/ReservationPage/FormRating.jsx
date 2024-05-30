import React from 'react'
import { useForm } from 'react-hook-form'
import useCrrudToken from '../../hooks/useCrrudToken'

const FormRating = ({bookSelected, setBookSelected}) => {

    const {register, handleSubmit, reset} = useForm()

    const [, ,createReview] =  useCrrudToken()

    const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'
        const bodyData = {
            ...data,
            hotelId: bookSelected.hotelId
        }
        createReview(url, bodyData, true)
        reset({
            rating: '5',
            comment: ''
        })
        setBookSelected()
    }


  return (
    <div>
     <article>
        <h3>Book</h3>
        <section>
            <img src={bookSelected?.hotel.images[0].url} alt="" />
            <h4>{bookSelected?.hotel.name}</h4>
        </section>
        <form onSubmit={handleSubmit(submit)}>
            <label>
                <span>Rating</span>
                <select {...register('rating')} >                   
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                </select>
                <input type="text" />
            </label>

            <label>
                <span>Comment</span>
                <textarea {...register('comment')} />
            </label>
        </form>
     </article>
        
    </div>
  )
}

export default FormRating