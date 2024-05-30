import React from 'react'
import { Link } from 'react-router-dom'
import '../share/GeneralHeader.css'

const GeneralHeader = () => {

  return (
    <div className='cont'>    
      <header className='general__header'>
        <nav className='general__nav'>
        {/* <h1 className='generla__logo'>  <Link className='general__logo-link' to='/'> HotelsApp </Link></h1> */}
        <Link className='general__logo-link' to='/'> <img className='general__logo' src="../images/hotels.png" alt="" /> </Link>
          <ul className='general__list'>
            <li className='general__item'> <Link className='general__item-link' to='/reservation'  >Reservations</Link> </li>
            <li className='general__item' > <Link className='general__item-link' to='/register'  >Register</Link> </li>
            <li className='general__item' > <Link className='general__item-link' to='/login'  >Login</Link> </li>
          </ul>
          <button className='general__btn'>Logout</button>
        </nav>        
      </header>



    </div>
    
  )
}

export default GeneralHeader