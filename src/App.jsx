import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Contact from './Page/Contact/Contact'
import NotFound from './Page/NotFound/NotFound'
import Header from './Componentes/Header/Header'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact/:title' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
