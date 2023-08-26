import React from 'react'
import "../index.css"
import { AiFillGithub } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className=' bg-gray-200 flex justify-center py-4'>
      <div className='flex items-center text-gray-700 text-3xl py-1'>
        <AiFillGithub className='pr-2' size={35}/>
        <p>Git Finder</p>
      </div>
    </nav>
  )
}

export default Navbar