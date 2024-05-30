import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotel = ( {city, id} ) => {

  const [hotelByCity, getHotelByCity] = useFetch()

  useEffect(() => {
    if(city){
      const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
      getHotelByCity(url)
    }  
  }, [city])

  // console.log(hotelByCity)
  

  return (
    <section>
      <h3>Other Hotels in <span>{city?.contry}</span> </h3>

      <div>
        {
          hotelByCity?.filter(hotel => hotel.id !== Number(id)).map(hotel => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))
        }
      </div>

    </section>
  )
}

export default OtherHotel