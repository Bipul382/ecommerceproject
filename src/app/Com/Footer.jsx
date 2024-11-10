import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className='container mt-20'>
        <div className='lg:flex gap-32 justify-center'>
        <div>
          <div>
            <img className='w-[200px]' src="https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/logo.png" alt="" />
          </div>
          <div className='my-5'>
            <h3 className='text-[25px] font-semibold'>
              About us
            </h3>
            <p className='py-5 text-[#787878]'>
            Lorem Ipsum is simply dummy text of the <br /> printing and types ting industry Lorem Ipsum is <br /> text. Lorem ipsum dolor sit amet.
            </p>
            <button className='bg-[#FC1A1A] text-white py-3 px-7'>
              Buy Now
            </button>
          </div>
        </div>
        <div>
           <nav>
           <h3 className='text-[25px] font-semibold pb-7'>Information</h3>
            <ul className='text-[#787878]'>
              
              <li>About us</li>
              <li className='py-4'>Return Policy</li>
              <li className='pb-4'>Shipping POlicy</li>
              <li>Dropshipping</li>
            </ul>
           </nav>
        </div>
        <div>
           <nav>
           <h3 className='text-[25px] font-semibold pb-7'>Account</h3>
            <ul className='text-[#787878]'>
              
              <li>Dashboard</li>
              <li className='py-4'>My Orders</li>
              <li className='pb-4'>My Wishlist</li>
              <li className='pb-4'>Account Details</li>
              <li>Track my order</li>
            </ul>
           </nav>
        </div>
        <div>
           <nav>
           <h3 className='text-[25px] font-semibold pb-7'>Shop</h3>
            <ul className='text-[#787878]'>
              
              <li>Affiliate</li>
              <li className='py-4'>Bestsellers</li>
              <li className='pb-4'>Discount</li>
              <li className='pb-4'>Latest Products</li>
              <li>Sale Products</li>
            </ul>
           </nav>
        </div>
        </div>
       <div className='flex gap-6 justify-start pl-20 py-5 mt-6 border-b-2'>
        <h3 className='text-[#787878]'>Legal terms and information :</h3>
        <h3>Privacy Policy</h3>
        <h3>Terms and Conditions</h3>
       </div>
       <h3 className='flex items-center gap-2 mt-4'>
       <FaRegCopyright /> E-commerce WordPress Theme 2023. All Rights Reserved
       </h3>
      </div>

    </>
  )
}

export default Footer
