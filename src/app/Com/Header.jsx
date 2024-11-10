"use client"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

import Link from "next/link";
import { useState } from "react";

function Header() {
  let [cats, setCats]=useState(false);
  let [menus, setMenus]=useState(false);
 
  return (
    <>
    <section>
        <div className='border-b-2 py-3'>
        <div className='container lg:flex items-center text-center justify-center'>
            <div className='border-r-2 lg:flex items-center gap-7 px-8'>
           <div className='flex gap-3 p-3 lg:w-[20%] w-[100%] justify-between'> 
            <div className='text-[20px] rounded-full bg-[#EBEAEA] p-2 hover:bg-[#FC1A1A] hover:text-white'><FaFacebookF /></div>
           <div className='text-[20px] rounded-full bg-[#EBEAEA] p-2 hover:bg-[#FC1A1A] hover:text-white'><FaTwitter /></div>
           <div className='text-[20px] rounded-full bg-[#EBEAEA] p-2 hover:bg-[#FC1A1A] hover:text-white'><FaInstagram /></div>
           <div className='text-[20px] rounded-full bg-[#EBEAEA] p-2 hover:bg-[#FC1A1A] hover:text-white'><FaPinterestP /></div>
           </div>
           <div>
            <h3>Summer Sale For All Products and Free Express International Delivery – OFF 50%! Shop Now</h3>
           </div>
           <div>
          <h3 className='font-semibold'>USD, $</h3>
           </div>
           </div>
           <div className='px-7'>
            <h3>English</h3>
           </div>
           <div>
         
           </div>
        </div>
        </div>
        <div className='border-b-2'>
        <div className=' lg:flex container'>
            <div className='container py-3 items-center flex gap-28 border-r-2 justify-center'>
            <div>
              <Link href="/">
                <img className='w-[200px]' src="https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/logo.png" alt="" />
                </Link>
            </div>
            <div className='relative'>
              
                <input className='bg-[#EBEAEA] px-32 py-4 lg:block hidden' type="text" placeholder='Search for Products...'/>
                
                <button className='lg:absolute right-2 top-4 text-[20px] font-bold'>
                <CiSearch />
                </button>
              
            </div>
            </div>
            <div className='flex gap-6 px-20 items-center lg:w-[30%] w-[100%] justify-center lg:p-0 py-2'>
            <div className='text-[30px]'>
            <CgProfile />
            </div>
            <div className='text-[30px]'>
            <CiHeart />
            </div>
            <div className='text-[30px]'>
            <CiMobile1 />
            </div>
        </div>
        </div>
       
        </div>
        <div>
            <div className='container py-4 flex gap-32 items-center justify-center font-bold relative'>
              <div>

                <button  className='flex items-center gap-4 bg-[#FC1A1A] text-white px-3 py-5 my-0' onClick={()=>setCats(!cats)}>
                  {cats ? '' : ''}
               
                  <CiMenuBurger /> Browse Categories</button>
                  {cats && (
                    <div className="shadow-xl list-none absolute left-10 top-24 z-20 bg-white px-4">
                      <li className="py-2">Electronics</li>
                      <li className="py-2">Jewellery</li>
                      <li className="py-2">Men's Clothing</li>
                      <li className="py-2">Women's Clothing</li>
                    </div>
                  )}
                        </div>
              <div className="lg:block hidden">
              <nav className='flex gap-6 items-center font-bold'>
                <ul className='flex gap-10 uppercase0'>
                  <li className='text-[#FC1A1A]'>
                  <Link href='/'> Home</Link>
                    </li>
                  <li className='hover:text-[#FC1A1A]'>
                  <Link href="/pages"> Pages</Link> </li>
                  <li className='hover:text-[#FC1A1A]'>
                 <Link href="/shop"> Shop</Link> </li>
                  <li className='hover:text-[#FC1A1A]'>
                  <Link href="/blog"> Blog</Link> </li>
                  <li className='hover:text-[#FC1A1A]'>
                  <Link href="/contact"> Contact us </Link> </li>
                </ul>
                <button className='bg-[#FC1A1A] text-white py-3 px-5'>Buy Now</button>
              </nav>
            </div>
            <div className="lg:block hidden">
              <a href="tel:+977 9843588165">Call Us: +977 9843588165</a>
            </div>
            <div className="lg:hidden block text-[30px] relative" onClick={()=>setMenus(!menus)}>{menus ? '' : ''}
            <IoMenu />
              {menus && (
                <div className="absolute right-0 -top-3 bg-white px-10 py-2 z-20 list-none text-[25px] ">
                  <li className="py-2 px-3">Home</li>
                  <li className="py-2 px-3">Pages</li>
                  <li className="py-2 px-3">Shop</li>
                  <li className="py-2 px-3">Blog</li>
                  <li className="py-2 px-3">Contact us</li>
                  <button className='bg-[#FC1A1A] text-white py-3 px-5'>Buy Now</button>
                </div>
              )}
            </div>
            </div>
            
        </div>
      </section>
      <script>
      
      </script>
    </>
  )
}

export default Header
