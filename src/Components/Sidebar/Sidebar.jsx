import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
        <div>
            <div>
                <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"/>
            </div>
            <div>

            </div>
        </div>
        <div className='flex items-center cursor-pointer'>
            <IoReorderThreeOutline />
            <p className='ml-5'>More</p>
        </div>
    </div>
  )
}

export default Sidebar