import React from 'react'
import '../index.css'
import image2 from '../images/image2.jpg'

const Navbar = () => {
  return (
    <section>
        <img src={image2} alt='dogimage' className='w-screen h-96 object-top'/>

        <nav className='container text-base bg-navcolor p-10 mx-auto'>
          <ul className='flex justify-center mx-auto '>
            <li className='mr-16 text-navtext'><a href='#hello'>Home</a></li>
            <li className='mr-16 text-navtext'><a href='#hi'>Reviews</a></li>
            <li className='mr-16 text-navtext'><a href='#yep'>Social</a></li>
            <li className='mr-16 text-navtext'><a href='#lol'>Contact</a></li>
          </ul>

        </nav>
       
    </section>
  )
}

export default Navbar