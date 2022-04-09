import React from 'react'

function Thumbnails({ state, dispatch, index }) {
  const style = {
    border: '2px solid hsl(26, 100%, 55%)',
    borderRadius: '10px',
    overflow: 'hidden',
    background: 'linear-gradient(to bottom, white, white)'
  }

  return (
    <div
      onClick={() => {
        dispatch({ type: 'set-currentImg', value: index })
      }}
      style={state.currentImg === index ? style : {}}
    >
      <img
        src={`./images/image-product-${index}-thumbnail.jpg`}
        style={state.currentImg === index ? { opacity: '0.4' } : {}}
        alt='product'
      />
    </div>
  )
}

export default Thumbnails
