import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Banner from './components/Banner'

import { context } from './Context'
import LightBox from './components/LightBox'

function App() {
  const { state, dispatch } = useContext(context)

  const backgroundStyle = {
    backgroundImage: `url(./images/image-product-${state.currentImg}.jpg)`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <main>
      <Navbar />
      <Banner />
      {state.menuClick && state.width < 992 ? (
        <div className='layer'></div>
      ) : (
        state.lightBox1 && <LightBox />
      )}
    </main>
  )
}

export default App
