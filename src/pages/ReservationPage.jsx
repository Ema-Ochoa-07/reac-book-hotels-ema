import React, { useEffect, useState } from 'react'
import useCrrudToken from '../hooks/useCrrudToken'
import BookCard from '../components/ReservationPage/BookCard'
import FormRating from '../components/ReservationPage/FormRating'

const ReservationPage = () => {

  const [reservations, getReservations, ,deleteReservations] = useCrrudToken()
  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getReservations(url, true)  
  }, [])

  const [bookSelected, setBookSelected] = useState()
  
  console.log(reservations)
  return (
    <div>
      <h2>Active Reservations</h2>
      <FormRating
        bookSelected={bookSelected}
        setBookSelected={setBookSelected}
      />

      <div>
        {
          reservations?.map(book => (
            <BookCard
            key={book.id}
            book={book}
            deleteReservations={deleteReservations}
            setBookSelected={setBookSelected}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ReservationPage