import React from 'react';
// import nav data
import { nav } from "../data"


const Nav = () => {
  return <nav className='hidden lg:flex '>
    <ul className='flex xl:gap-x-8 gap-5 text-white'>
      {nav.map((item, index) =>{
        return <li key={index}> 
          <a className='hover:text-primary-200 transition-all border-primary-200 hover:border-b' href={item.href}> {item.name} </a>
        </li>
      })}
    </ul>
  </nav>;
};

export default Nav;
