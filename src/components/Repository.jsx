import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { PiGitFork } from 'react-icons/pi';

const Repository = ({ repo }) => {
  return (
    <div className='bg-white shadow-md border p-6 rounded-xl mb-6'>
        <div className=" ">
          <a href={repo.html_url} className=' text-sky-500 font-semibold text-xl hover:underline'>
            {repo.name}
          </a>
        </div>

        <p className=" text-gray-600 text-lg flex items-center mt-2">
            <span className="circle bg-red-400 rounded-full mr-2 h-4 w-4"></span>
            {repo.language}
            <AiOutlineEye className='text-xl ml-4'/>
            {repo.watchers_count}
            <PiGitFork className='text-xl ml-4'/>
            {repo.forks_count}
        </p>
      
    </div>
  )
}

export default Repository;