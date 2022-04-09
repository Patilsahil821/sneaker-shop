import React, { useReducer } from 'react'

const initialState = {
  menuClick: false,
  width: window.innerWidth,
  badgeNumber: 0,
  quantity: 0,
  currentImg: 1,
  mainPrice: 250,
  discount: 50,
  discountedPrice: function () {
    return ((this.mainPrice * this.discount) / 100).toFixed(2)
  },
  lightBox: false,
  lightBox1: false
}

function reducer(state, { type, value }) {
  switch (type) {
    case 'menu-click':
      console.log('value is ' + value)
      return { ...state, menuClick: value }
    case 'window-width':
      return { ...state, width: value }
    case 'badge-number':
      return { ...state, badgeNumber: value }
    case 'set-quantity':
      return { ...state, quantity: value }
    case 'set-currentImg':
      return { ...state, currentImg: value }
    case 'increment':
      if (value > 50) {
        return { ...state, quantity: 50 }
      }
      return { ...state, quantity: value }
    case 'decrement':
      if (value < 0) {
        return { ...state, quantity: 0 }
      }
      return { ...state, quantity: value }
    case 'lightbox':
      return { ...state, lightBox: value }
    case 'next-img':
      if (state.currentImg === 4) {
        return { ...state, currentImg: 1 }
      }
      return { ...state, currentImg: state.currentImg + 1 }
    case 'previous-img':
      if (state.currentImg === 1) {
        return { ...state, currentImg: 4 }
      }
      return { ...state, currentImg: state.currentImg - 1 }
    case 'lightbox1':
      return { ...state, lightBox1: !state.lightBox1 }
    default:
      return state
  }
}
export const context = React.createContext()
const Provider = context.Provider

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(children)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export default Context
