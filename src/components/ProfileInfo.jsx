import React from 'react';
import { IoBusinessOutline,IoPeople } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'

const ProfileInfo = ({ profile }) => {
  return (
    <div className=' w-1/3 m-4 text-gray-800 text-2xl md:text-lg sm:text-base'>
        <img src={profile.avatar_url} alt="user-avatar" className='w-full rounded-xl mb-4' />
        <p className=" text-4xl font-bold mb-2 sm:text-1xl">{profile.name}</p>
        <p className=" text-gray-800 text-xl mb-4 sm:text-base">@{profile.login}</p>

        <div className=' flex mb-4 '>
            <p className="flex items-center">
                <IoPeople size={26}/>
                <span className='font-bold ml-2 '>{profile.followers}</span> followers
            </p>

            <span className='mx-2 text-gray-400'>.</span>
            
            <p className='flex items-center'>
                <span className='font-bold'>{profile.following}</span> following
            </p>
        </div>

        <p className=" text-gray-700 flex items-center text-xl mb-4 sm:text-base">
            <IoBusinessOutline size={22} className='text-xl mr-2'/>
            {profile.company}
        </p>

        <p className="text-gray-700 flex items-center text-xl sm:text-base">
            <FaLocationDot size={22} className='text-xl mr-2'/>
            {profile.location}
        </p> 

        <p className=" text-xl leading-7 mt-4 sm:text-base">
            {profile.bio}
        </p>       
    </div>
  )
}

export default ProfileInfo;