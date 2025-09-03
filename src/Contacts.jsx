import React from 'react';
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <>    
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <h1 className='text-4xl md:text-5xl font-bold text-center text-white mb-10'>Contacts</h1>
    <p className='m-5 text-3xl'>Have a project in mind? Get in touch </p>
    <p className='m-5 text-2xl'>Maina Kamweru</p>
    <p className='m-5 text-2xl'>Phone: 0706553306</p>
    <p className='m-5 text-2xl'>Email: mainakamweru@gmail.com</p>
    <p className='m-5 text-2xl'>Location: Nairobi</p>
    </div>

    </>
  )
}

export default Contacts