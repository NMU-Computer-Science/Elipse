import { useState } from 'react'
import '../App.css'
import Card from './Weather.jsx'

function Main() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <Card />
      </div>
    </>
  )
}

export default Main
