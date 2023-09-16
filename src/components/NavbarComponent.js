import React from 'react'
import { MdArrowBackIos } from 'react-icons/md'
export default function NavbarComponent() {
  const handleUrl = () => {
    window.location.href = 'https://nagad.islamicservice.net/Landing/DailyIslamic'
  }

  return (
    <div className='top-2 bg-white shadow-md w-full h-20 flex pt-4'>
      <div className='flex-start font-bold ml-16 pt-2'>
        <MdArrowBackIos size={15} onClick={handleUrl} className='bold-icon font-bold cursor-pointer' />
      </div>
      <div className='flex-grow text-center'>
        <h5 className='text-xl font-lato'>পবিত্র কুরআন </h5>
      </div>




    </div>
  )
}



