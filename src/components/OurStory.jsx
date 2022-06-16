import React from 'react'
import ourstory from '../assets/ourstory.png'
import Seperation from './Seperation'

function OurStory() {
  return (
    <div id='about' className='mb-5'>
        <Seperation/>
        <div  className='d-flex container my-5 flex-column flex-lg-row'>
            <div className='w-100 w-lg-50 d-flex align-items-center order-2 order-lg-1 px-4 px-lg-0'>
                <div>
                    <p className='fs-1 text-uppercase text-center text-lg-start'>our story</p>
                    <p className='text-center text-lg-start'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam illum deserunt voluptatem. Omnis, accusantium.
                    Dolor nostrum aliquid pariatur! Fugit pariatur accusantium aliquam ab repudiandae, modi quaerat accusamus ipsa sint magnam tempore,
                    quam minus fugiat aut, vero animi! Dolorum nemo, provident non, aut officia sapiente sunt eius doloremque amet quo tempore ratione asperiores
                    delectus molestias esse illum pariatur animi cum distinctio, laudantium rerum adipisci error quibusdam quasi. Eum quas dolore mollitia.
                    </p>
                </div>

            </div> 
            <div className='w-100 w-lg-50 order-1 order-lg-2 mb-5 mb-lg-0'>
                <img className='w-75' src={ourstory} alt=''/>
            </div> 
        </div>
    </div>

  )
}

export default OurStory