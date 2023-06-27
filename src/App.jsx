import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

function App() {

  return (
    <main className='min-h-screen font-["Roboto_Condensed"]'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </main>
  )
}

export default App
