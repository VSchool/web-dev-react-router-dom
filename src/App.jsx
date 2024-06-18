import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import InventoryPage from './components/InventoryPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inventory' element={<InventoryPage />}/>
      </Routes>
    </>
  )
}

export default App