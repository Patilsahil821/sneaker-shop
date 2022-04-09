import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Banner() {
  return (
    <div className='container-fluid container-md  p-0'>
      <div className='row banner'>
        <div className='col-md-6 p-0 d-flex flex-column justify-content-center align-items-center left-side'>
          <LeftSide />
        </div>
        <div className='col-md-6 p-4 d-flex justify-content-start align-items-center'>
          <RightSide />
        </div>
      </div>
    </div>
  )
}

export default Banner
