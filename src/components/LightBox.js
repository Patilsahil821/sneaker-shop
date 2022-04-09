import React, { useContext } from 'react'
import { context } from '../Context'
import Thumbnails from './Thumbnails'

function LightBox() {
  const { state, dispatch } = useContext(context)
  const backgroundStyle = {
    backgroundImage: `url(./images/image-product-${state.currentImg}.jpg)`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='layer d-flex justify-content-center align-items-center flex-column'>
      <div className='position-relative'>
        <button
          className='close-btn'
          onClick={() => {
            dispatch({ type: 'lightbox1' })
          }}
        >
          <svg width='14' height='15' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
              fill='#69707D'
              fill-rule='evenodd'
            />
          </svg>
        </button>
        <div style={backgroundStyle} className='main-img'></div>
        <div className='thumbnails-container d-flex justify-content-between align-items-center'>
          {[1, 2, 3, 4].map((element, key) => {
            return (
              <Thumbnails
                key={key}
                index={element}
                state={state}
                // style={style}
                dispatch={dispatch}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LightBox
