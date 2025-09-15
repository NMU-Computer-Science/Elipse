import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Entry from './Blocks/Entry.jsx'

function App() {
  console.log('App rendering...') // Debug log
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route path="/" element={<Entry />} index />
          <Route path="*" element={<Entry />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
