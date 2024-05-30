import React, { useState } from 'react'

const BookCard = ( {book, deleteReservations, setBookSelected} ) => {

  const initialDate = (new Date(book.checkIn)).getTime()
  const finalDate = (new Date(book.checkOut)).getTime()
  const diffMiliSeccond = (finalDate - initialDate)/(1000 * 60 * 60 * 24)

  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/bookings/${book.id}`
    deleteReservations(url, book.id, true)
  }

  const handleRate = () => {
    setBookSelected(book)
  }

  return (
    <section>
      <header>
        <img className='img__reservation' src={book.hotel.images[0].url} alt="" />
      </header>
      <h3>{book.hotel.name}</h3>
      <div>{book.hotel.city.name}, {book.hotel.city.country}</div>
      <p className='rate__coment' onClick={handleRate}>Rate and comment this visit... ¡CLICK HERE!</p>
      <ul>
        <li><span>Reservations Days</span><span>{diffMiliSeccond}</span></li>
        <li><span>subtotal Price</span><span>{diffMiliSeccond * Number(book.hotel.price)}</span></li>
      </ul>
      <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
    </section>
  )
}

export default BookCard