import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserHome from './pages/userHome/userHome'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<UserHome/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
