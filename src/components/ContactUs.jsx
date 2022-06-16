import React from 'react'
import contactUs from '../assets/contact-us.png'
import Seperation from './Seperation'
import "../css/ContactUs.css"

function ContactUs() {
  return (
    <div id='contact'  >
        <Seperation/>
        <div  className='contact-us d-flex container my-5 flex-column flex-lg-row py-5'>
        <div className='w-100 w-lg-50 d-flex text-start align-items-center order-2 order-lg-1 px-4 px-lg-0'>
            <div>
                <p className='fs-2 text-uppercase'>Contact form</p>

                <form className='d-flex flex-wrap '>

                    <div className='w-50 px-2'>
                        <label>Your name</label>
                        <input type='text' className='form-control'/>  
                    </div>
                    <div className='w-50 px-2'>
                        <label>Email</label>
                        <input type='email' className='form-control'/>  
                    </div>
                    <div className='w-100 p-2'>
                        <label>Message</label>
                        <textarea type='email' className='form-control w-100'></textarea>
                    </div>
                    <input type='submit' className='btn btn-dark px-4 m-2' value="Send"/>

                </form>

            </div>

        </div>

        <div className='w-100 w-lg-50 order-1 order-lg-2 mb-5 mb-lg-0'>
            <img className='w-75' src={contactUs} alt=''/>
        </div>

    </div>
    </div>

  )
}

export default ContactUs