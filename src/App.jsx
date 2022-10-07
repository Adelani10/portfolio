import { useState} from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Utility } from './ToggleContext'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Projects from './projects'
import Skills from './skills'
import Footer from './footer'
import Contact from './contact'
import { Link } from "react-scroll"

function App() {
  const [isShown, setIsShown] = useState(false)

  const {openNav, handleClick, remove} = useContext(Utility)

  useEffect(()=>{
    function handleScroll () {
      const scrollHeight = window.pageYOffset
      if (scrollHeight >= 1500){
        setIsShown(true)
      }
      else{
        setIsShown(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener(scroll, handleScroll)
  }, [])


  return (
    <div className="App bg-stone-100  flex flex-col">
      <div className="font-bold text-4xl fixed top-2 right-5 md:hidden">
         <button 
            onClick={handleClick} 
            className={`${openNav? 'text-red-600' : 'text-teal-800'}`}>{openNav ?  <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
      </div>

      {isShown && <Link 
          to="home" spy={true} smooth={true} offset={50} duration={500} 
          className="p-3 bg-teal-800 fixed h-10 w-10 flex items-center justify-center rounded-full text-[#f5f5f5] bottom-16 right-5">
        <i className="fas fa-arrow-up"></i>
      </Link>}
      
      <Navbar/>
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
