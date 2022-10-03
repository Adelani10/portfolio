import { useState } from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Projects from './projects'
import Skills from './skills'

function App() {
  const [openNav, setOpenNav] = useState(false)

  return (
    <div className="App bg-stone-100  flex flex-col">
      <div className="font-bold text-4xl fixed top-2 right-5 md:hidden">
         <button 
            onClick={() => setOpenNav(!openNav)} 
            className={`${openNav? 'text-red-600' : 'text-teal-800'}`}>{openNav ?  <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
      </div>
      
      <Navbar openNav={openNav}/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
