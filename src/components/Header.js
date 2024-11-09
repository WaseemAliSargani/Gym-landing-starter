import React, { useState, useEffect } from 'react';

//  import header  data
import { header, nav } from "../data"

// import components
import Nav from "../components/Nav"
import NavMobile from "../components/NavMobile"

// import icon
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri"

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false)
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false)

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  }, [])
  



  // destructure header data
  const { logo, btnLoginText, btnSignupText } = header;
  return <header className={`${isActive ? "bg-neutral-500 py-[16px] " : "bg-transparent py-[20px]"

    } fixed max-w-[1440px z-30 left-0 right-0 mx-auto flex justify-between  items-center px-[20px] lg:px-[80px] transition-all duration-200`}
  >
    {/* logo */}
    <a href="#">
      <img className='h-[30px]' src={logo} alt="" />
    </a>

    {/* nav - intially hidden - show on desktop */}
    <Nav />

    {/* btns -initially hide - show on desktop */}
    <div className='hidden lg:flex space-x-4'>
      <button className='btn btn-sm text-white hover:text-green-500 transition'> {btnLoginText} </button>
      <button className='btn btn-sm btn-primary'> {btnSignupText} </button>
    </div>

    {/* nav menu btn - hide on desktop */}
    <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden absolute right-4 '>
      {navMobile ? (
        <RiCloseFill className='text-primary-200 text-4xl cursor-pointer' />
      ) : (
        <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />
      )}
    </div>

    {/* nav mobile - hide on desktop */}
    <NavMobile navMobile={navMobile} />
  </header>
};

export default Header;
