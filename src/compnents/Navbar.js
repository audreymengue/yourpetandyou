import React from 'react'
import '../index.css'
import image2 from '../images/image2.jpg'

const Navbar = () => {
  return (
    <section >
        <img src={image2} alt='dogimage' className='w-screen h-96 object-top'/>

        <nav className='text-base bg-navcolor p-10 '>
          <ul className='flex items-center mx-auto '>
            <li className='mr-4'>Home</li>
            <li className='mr-4'>Reviews</li>
            <li className='mr-4'>Social</li>
            <li className='mr-4'>Contact</li>
          </ul>

        </nav>
       
    </section>
  )
}

export default Navbar