
import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/slice/products.slice"
import { useDispatch } from "react-redux"

const FilterCity = ({setFromTo, setSearchedHotel}) => {

const [cities, getCities ] = useFetch()

useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/cities'
    getCities(url)
}, [])


const dispatch = useDispatch()
const handleCityFilter = (cityId) =>{
  const url = `https://hotels-api.academlo.tech/hotels${cityId ? `?cityId=${cityId}` : ''}`
  dispatch(getHotelsThunk(url))
  setFromTo({
    from:0,
    to: Infinity
  })
  setSearchedHotel('')
}


  return (
    <article>
        <h4>Cities</h4>
        <ul>
          <li onClick={() => handleCityFilter()} >All Cities</li>
          {
            cities?.map(city => (
                <li onClick={() => handleCityFilter(city.id)} key={city.id}>{city.name}</li>
            ))
          }
        </ul>
    </article>
  )
}

export default FilterCity