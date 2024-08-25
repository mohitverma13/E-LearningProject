import React from 'react'
import ContactUsForm from '../../ContactPage/ContactUsForm'
import { useSelector } from 'react-redux'

const ContactFormSection = () => {
  const {darkMode} = useSelector((state) => state.mode)
  return (
    <div className='mx-auto border-2 rounded-lg px-4 py-4'

      style={{
        boxShadow: "inset 5px 5px 1px black ",

      }}
    
    >
      <h1 className={` text-2xl text-center text-caribbeangreen-400 font-semibold ${darkMode ? "text-richblack-5" : "text-richblack-600"}`}>
            Get in Touch 
        </h1>
        <p className='text-center text-richblack-100 mt-3'>
            We'd love to here for you, Please fill out this <form action="" className=""></form>
        </p>
        <div className='mt-12 mx-auto'>
            <ContactUsForm />
        </div>
    </div>
  )
}

export default ContactFormSection