import React from 'react'
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';


function page() {
  return (
    <>
    <section className='container'>
      <div>
        <h2 className='text-[30px] font-semibold'>Contact Us</h2>
        <div className='flex gap-4 items-center'>
        <h3> <Link href="/"> Home </Link> </h3>
        <h2 className='text-[20px] uppercase'>Contact us</h2>
        </div>
      </div>
      <div className='my-10 lg:flex justify-around border-b-4 border-x-2 border-r-4' >
        <div>
            <h2 className='text-[40px] font-semibold'>Contact Information</h2>
            <h4>Fill up the contact form and our team will get back in touch with you <br/> within 24 hours.</h4>
            <p className='flex items-center gap-3'><IoCall />
            +9779843588165
            </p>
            <p className='flex items-center gap-3'><CiMail />
            acharyabipul3@gmail.com
            </p>
            <img className='w-[75%] my-4' src='https://www.google.com/maps/d/thumbnail?mid=1auXYxrmrFbh4HPpGxZ9qi0qSmns'/>
        </div>
        <div>
            <div>
                <h2 className='font-semibold'>Name</h2>
                <input className='px-10 py-2 my-2 border-2' type='text' placeholder='Enter your Name'></input>
            </div>
            <div>
                <h2 className='font-semibold'>Email</h2>
                <input className='px-10 py-2 my-2 border-2' type='mail' placeholder='Enter your Email'></input>
            </div>
            <div>
                <h2 className='font-semibold'>Message</h2>
                <input className='px-10 py-11 my-2 border-2' type='text' placeholder='Enter your Message'></input>
            </div>
            <button className='bg-[#FC1A1A] text-white px-4 py-2 font-bold'>Submit</button>
        </div>
      </div>
      </section>
    </>
  )
}

export default page
