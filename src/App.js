import React from 'react'


// components
import Navbar from './components/Navbar/Navbar'
import CartContainer from './components/Cart/CartContainer'
import { useGlobalContext } from './Hooks/context'
// items

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
