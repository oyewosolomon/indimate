import React from 'react'

const MidNav = () => {
  return (
    <div className='w-11/12'>
        <div className='flex justify-between place-items-center w-full px-12 py-2'>
            <div className='flex gap-10'>
                <a href="">About us</a>
                <a href="">Portfolio</a>
            </div>
           
           <div>
                <a href="">
                    <img className='w-28 h-28' src="/assets/images/logo.png" alt="Logo" />
                </a>
            </div>

            <div className='flex gap-10'>
                <a href="">Testimonial</a>
                <a href="">Blog</a>
            </div>
        </div>
    </div>
  )
}

export default MidNav