import React from 'react'
import './styles/SliderImg.css'
import { useState } from 'react'

const SliderImg = ({hotel}) => {

    const [imgSelected, setImgSelected] = useState(0)
    const objStyle = {
        transform: `translateX(calc((-${imgSelected}/${hotel?.images.length})*100%))`,
        width: `${hotel?.images.length * 100}%`
    }

    const handleNext = () => {
        const lengthImgs = hotel?.images.length - 1
        setImgSelected(state => (state + 1 <= lengthImgs) ? state + 1 : state)
    }

    const handlePrev = () => {
        if (imgSelected -1 >= 0 ){
            setImgSelected(imgSelected - 1)
        }
    }
    
  return (
    <div className='slider'>
        <button onClick={handlePrev}><i className='slider__btn bx bx-chevron-left'></i></button>
        <div className='slider__interior'>
            <div className='slider__movable' style={objStyle} >
                {
                    hotel?.images.map(imgInfo => (
                        <div  className='slider__img-container' key={imgInfo.id}>
                            <img className='slider__img' src={imgInfo.url} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        <button onClick={handleNext}><i className='slider__btn bx bx-chevron-right'></i></button>
    </div>
  )
}

export default SliderImg