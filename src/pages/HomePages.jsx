import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from '../store/slice/products.slice'
import HotelCard from '../components/HomePage/HotelCard'
import FilterName from '../components/HomePage/FilterName'
import FilterCity from '../components/HomePage/FilterCity'
import FilterPrice from '../components/HomePage/FilterPrice'

const HomePages = () => {

  const [searchedHotel, setSearchedHotel] = useState('')
  const [fromTo, setFromTo] = useState({
    from:0,
    to:Infinity
  })
  const cbFilter = (hotel) => {
    //FILTER BY NAME
    const filterName  = hotel.name.toLowerCase().includes(searchedHotel)
    //FILTER BY PRICE
    const price = Number(hotel.price)
    const filterByPrice = price >= fromTo.from && price <= fromTo.to
    return filterName && filterByPrice
  }

  const dispatch = useDispatch()
  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url)) 
  }, [])


  
  

  const products = useSelector( states => states.products )
  console.log(products, searchedHotel)



 

  return (
    <div>

      <FilterName
        setSearchedHotel={setSearchedHotel}
      />
      
      <FilterPrice
        setFromTo={setFromTo}
      />          

      <section>
        <h1>Filters</h1>
        <FilterCity
          setFromTo={setFromTo}
          setSearchedHotel={setSearchedHotel}
        />  
      </section>
      <div className='card__container'>
        {
          products?.filter(cbFilter).map(hotel => (
            <HotelCard
            key={hotel.id}
            hotel={hotel}
            />
          ))
        }
      </div>
    </div>
  )
}

export default HomePages