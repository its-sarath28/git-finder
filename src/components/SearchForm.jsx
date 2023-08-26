import React from 'react'
import { BsSearch } from 'react-icons/bs';

const SearchForm = ({ handleSubmit }) => {
  return (
    <div className=' bg-gray-200 py-10 px-4'>
      <form onSubmit={handleSubmit} className=' max-w-4xl mx-auto flex'>
        <div className=" w-full">
            <input 
                type="text" 
                name="username" 
                id="userName"
                placeholder='Enter a Github username'
                autoComplete='off'
                className='border border-gray-400 rounded-l py-2 px-4 w-full text-lg' 
            />
        </div>

        <div className=" bg-gray-900">
            <button className='px-4 py-3 text-white rounded-r'>
                <BsSearch className='text-xl'/>
            </button>
        </div>
      </form>
    </div>
  )
}

export default SearchForm;