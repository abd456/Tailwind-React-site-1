import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>

      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#00df9a] hover:font-bold '>HOME</li>
        <li className='p-4 hover:text-[#00df9a] hover:font-bold '>COMPANY</li>
        <li className='p-4 hover:text-[#00df9a] hover:font-bold '>RESOUCES</li>
        <li className='p-4 hover:text-[#00df9a] hover:font-bold '>ABOUT</li>
        <li className='p-4 hover:text-[#00df9a] hover:font-bold '>CONTACT</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      
      <div className={!nav? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%] '}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className=' uppercase  p-4'>
          <li className='p-4 border-b border-gray-600'>HOME</li>
          <li className='p-4 border-b border-gray-600'>COMPANY</li>
          <li className='p-4 border-b border-gray-600'>RESOUrCES</li>
          <li className='p-4 border-b border-gray-600'>ABOUT</li>
          <li className='p-4'>CONTACT</li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar;
