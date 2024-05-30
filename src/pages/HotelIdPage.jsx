import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import OtherHotel from '../components/HotelIdPage/OtherHotel'
import MapHotel from '../components/MapHotel'
import FormReservation from '../components/HotelIdPage/FormReservation'
import '../components/HotelIdPage/styles/HotelIdPage.css'
import SliderImg from '../components/HotelIdPage/SliderImg'

const HotelIdPage = () => {

  const { id } = useParams()

  const [hotel, getHotel] = useFetch()

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
  }, [id])

  // console.log(hotel)
  

  return (
    <article>
      <header className='hotel__header'>
        <h2 className='hotel__header-name'>{hotel?.name}</h2>
        <div className="hotel__stars">
            <label className="hotel__stars-4"><i className='bx bxs-star'></i></label>
            <label className="hotel__stars-5"><i className='bx bxs-star'></i></label>
            <label className="hotel__stars-3"><i className='bx bxs-star'></i></label>
            <label className="hotel__stars-2"><i className='bx bxs-star'></i></label>
            <label className="hotel__stars-1"><i className='bx bx-star' ></i></label>          
          </div>
        <span className='hotel__header-rating'>{hotel?.rating}</span>
      </header>
      
      <section className='hotel__section-galery'>
      <SliderImg
      hotel={hotel}/>
        <div className='hotel__map'>
          {
            hotel && (
              <MapHotel
                lat={hotel?.lat}
                lon={hotel?.lon}
              />
            )
          }
        </div>
      </section>

      <div>{hotel?.city.name}, {hotel?.country}</div>
      
      <div>
        <i className='bx bx-map'></i>
        <address>{hotel?.address}</address>
      </div>
      <p>{hotel?.description}</p>

      <section>
        {
          localStorage.getItem('token')
          ? (<FormReservation
            hotelId={hotel?.id}
            />)
          :
          <p>If you want to book, please <Link to ='/login'>Login</Link> </p>
        }
        
      </section>

      <OtherHotel
        city={hotel?.city}
        id={id}
      />

    </article>
  )
}

export default HotelIdPage