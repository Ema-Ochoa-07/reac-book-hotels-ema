import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'
const HotelCard = ({ hotel }) => {

  
  const navigate = useNavigate()
  const handleNavHotelId = () => {
    navigate(`/hotel/${hotel.id}`)
  }

  return (
    <article className="card">
      <header className="card__header">
        <img className="card__img" src={hotel.images[0].url} alt="" />
      </header>
      <section className="card__section">
        <h3 className="card__section-title">{hotel.name}</h3>

        <div className="card__section-score">

          <div className="card__stars">
            <label className="card__stars-4"><i className='bx bxs-star'></i></label>
            <label className="card__stars-5"><i className='bx bxs-star'></i></label>
            <label className="card__stars-3"><i className='bx bxs-star'></i></label>
            <label className="card__stars-2"><i className='bx bxs-star'></i></label>
            <label className="card__stars-1"><i className='bx bx-star' ></i></label>          
          </div>

          <h3 className="card__rating">{hotel.rating}</h3>
        </div>
        
        <div className="card__location">
          <span className="card__location-country">{hotel.city.name}, {hotel.city.country}</span>
          <span className="card__location-city"></span>
        </div>
        <h2 className="card__price">$ {hotel.price}</h2>
      </section>
      <footer className="card__footer">
        <button className="card__footer-btn" onClick={handleNavHotelId}>See more...</button>
      </footer>
    </article>
  )
}

export default HotelCard