import { useState, useEffect } from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Projects from './projects'
import Skills from './skills'
import Footer from './footer'
import Contact from './contact'
import { Link } from "react-scroll"

function App() {
  const [openNav, setOpenNav] = useState(false)
  const [backToTop, setBackToTop] = useState(false)

  // useEffect(()=>{
  //   window.addEventListener(scroll, () => {
  //     setBackToTop(!backToTop)
  //     const scrollHeight = window.pageYOffset
  //     console.log(scrollHeight)
  //   })
  // }, [backToTop])

  function remove() {
    setOpenNav(false)
  }

  return (
    <div className="App bg-stone-100  flex flex-col">
      <div className="font-bold text-4xl fixed top-2 right-5 md:hidden">
         <button 
            onClick={() => setOpenNav(!openNav)} 
            className={`${openNav? 'text-red-600' : 'text-teal-800'}`}>{openNav ?  <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
      </div>

      <Link 
          to="home" spy={true} smooth={true} offset={50} duration={500} 
          className="scroll-link top-link p-3 bg-teal-400 fixed h-10 w-10 flex items-center justify-center rounded-full text-[#f5f5f5] bottom-12 right-5">
        <i className="fas fa-arrow-up"></i>
      </Link>
      
      <Navbar openNav={openNav} remove={remove}/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
