import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-[#f2f6de]  via-[#bec29f] to-[#adbe15] px-2 py-8  '>
    
        <h1 className='font-bold text-3xl text-center'>Contact Us</h1>
        <form action="" className='space-y-4'>
            <div>
                <label htmlFor="name" className='block text-black font-medium mb-2'>Name:</label>
                <input type="text" id='name' className='w-full shadow-lg rounded-lg border-2 border-black p-3 focus:outline-none focus:border-black' placeholder='Enter Your Name' />
            </div>
            <div>
              <label htmlFor="email" className='block text-black font-medium mb-2'>Email:</label>
              <input type="email" id="email" className='w-full shadow-lg rounded-lg border-2 border-black p-3 focus:outline-none focus:border-black ' placeholder='Enter Your Email'/>
            </div>
            <div>
              <label htmlFor="Message" className='block text-black font-medium mb-2'>Message:</label>
              <textarea name="" id="message" rows={5} className='w-full shadow-lg rounded-lg border-2 border-black p-3 focus:outline-none focus:border-black  ' placeholder='Write Your Message'></textarea>
            </div>
            <div className='flex justify-center'>
              <button type="submit" className='bg-black text-white font-semibold p-3 shadow-lg rounded-md   hover:border-2 hover:border-black hover:bg-white hover:text-black'>Submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default Contact
