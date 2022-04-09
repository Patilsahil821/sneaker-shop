import React, { useContext } from 'react'
import { context } from '../Context'

function RightSide() {
  const { state, dispatch } = useContext(context)

  return (
    <div className='right-side'>
      <h5 className='company-name'>SNEAKER COMPANY</h5>
      <h1 className='company-heading'>Fall Limited Edition Sneakers</h1>
      <p className='company-content'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className='d-flex justify-content-start align-items-center'>
        <span className='discounted-price'>${state.discountedPrice()}</span>
        <span className='discount'>{state.discount}%</span>
      </div>
      <p className='main-price'>${state.mainPrice.toFixed(2)}</p>
      <div className='quantity d-md-flex justify-content-md-start align-items-md-center'>
        <div className='d-flex justify-content-center align-items-center'>
          <button
            className='d-flex justify-content-center align-items-center'
            onClick={() => {
              dispatch({ type: 'decrement', value: state.quantity - 1 })
            }}
            style={{ color: 'orange', fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            -
          </button>
          <button>{state.quantity}</button>
          <button
            className='d-flex justify-content-center align-items-center'
            style={{ color: 'orange', fontSize: '1.5rem', fontWeight: 'bold' }}
            onClick={() => {
              dispatch({ type: 'increment', value: state.quantity + 1 })
            }}
          >
            +
          </button>
        </div>
        <button
          className='add-to-cart d-flex justify-content-center align-items-center '
          onClick={() => {
            dispatch({ type: 'badge-number', value: state.quantity })
          }}
        >
          <svg width='30' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill='white'
              fill-rule='nonzero'
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default RightSide
