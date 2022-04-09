import React, { useContext } from 'react'
import { context } from '../Context'
import Thumbnails from './Thumbnails'

function LeftSide() {
  const { state, dispatch } = useContext(context)

  const backgroundStyle = {
    backgroundImage: `url(./images/image-product-${state.currentImg}.jpg)`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
  return (
    <>
      <div style={backgroundStyle} className='d-flex  justify-content-center'>
        <img
          onClick={() => {
            dispatch({ type: 'lightbox1' })
          }}
          className='main-img d-none d-md-block'
          src={`./images/image-product-${state.currentImg}.jpg`}
          alt={`product-${state.currentImg}`}
        />
        <button
          className='previous'
          onClick={() => {
            dispatch({ type: 'next-img' })
          }}
        >
          <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11 1 3 9l8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <button
          className='next'
          onClick={() => {
            dispatch({ type: 'previous-img' })
          }}
        >
          <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m2 1 8 8-8 8'
              stroke='#1D2026'
              stroke-width='3'
              fill='none'
              fill-rule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='thumbnails-container d-none d-md-flex justify-content-md-between align-items-md-center'>
        {[1, 2, 3, 4].map((element, key) => {
          return (
            <Thumbnails
              key={key}
              index={element}
              state={state}
              dispatch={dispatch}
            />
          )
        })}
      </div>
    </>
  )
}

export default LeftSide
