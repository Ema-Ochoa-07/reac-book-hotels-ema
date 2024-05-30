import React from 'react'
import { Map, Marker } from 'pigeon-maps'

const MapHotel = ({lat, lon}) => {
  return (
    <div>
        <Map center={[+lat, +lon]} width={( '100%'*100)/100} height={300}>
            <Marker
                width={60}
                anchor={[+lat, +lon]}
                color="#fa4040"
            />            
        </Map>
    </div>
  )
}

export default MapHotel