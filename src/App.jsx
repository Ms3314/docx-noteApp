import React from 'react'
window.React = React
import Background from './components/background'
import Foreground from './components/foreground'

function App() {
  
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App
