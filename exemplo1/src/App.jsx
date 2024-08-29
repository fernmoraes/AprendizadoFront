import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
