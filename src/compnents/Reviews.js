import React, { useState } from 'react'
import reviews from '../data'
import { FaChevronLeft , FaChevronRight} from 'react-icons/fa'


const Reviews = () => {
  const [index, setIndex] = useState(0);
  const {name, job, text} = reviews[index];

  const checkNumber = (number) => {
    if(number > reviews.length - 1) {
      return 0;
    }
    if (number < 0 ) {
      return reviews.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  return (
    <section className='container mt-10 p-10 mx-auto font-semibold text-xl text-blacktext'>

    <h1 className='text-center pb-10'>Take a look at our customer's reviews</h1>
     <div className='flex text-center  bg-reviewbg p-10 rounded-xl'>
         <button onClick={prevPerson}>
             <FaChevronLeft className='text-2xl'/>
          </button>
          <div className='mx-auto'>
            <h2 className='m-2'>{name}</h2>
            <h3 className='m-2'>{job}</h3>
            <p className='m-2'>{text}</p>
          </div>
          <button  onClick={nextPerson}>
             <FaChevronRight className='text-2xl'/>
          </button>
     </div>
         
    
    </section>
  )
}

export default Reviews