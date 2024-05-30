import React, { useRef } from 'react'

const FilterName = ({ setSearchedHotel}) => {
    
    const inputSearch = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        setSearchedHotel(inputSearch.current.value.trim().toLowerCase())
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={inputSearch} type="text" />
            <button>Search</button>
        </form>
    </div>
  )
}

export default FilterName