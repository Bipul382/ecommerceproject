"use client"
import React from 'react'
import { useEffect, useState } from 'react'


function page({params}) {
    let [products, setProducts]=useState([])
    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${params.id}`)
              .then(res=>res.json())
              .then(json=>setProducts(json))
    },[])
  return (
    <>
      <div className='container lg:flex py-10 items-center gap-10'>
        <div className='lg:w-[40%] w-[100%]'>
            <img className='w-100' src={products.image} alt="" />
        </div>
        <div className='lg:w-[60%] w-[100%]'>
            <h2 className='text-[25px] font-bold py-10 border-b-4'>{products.title}</h2>
            <h3 className='text-[40px] font-bold py-5'>{products.price}</h3>
            <div>
                <h3 className='text-[15px] py-4 font-medium'>Color</h3>
                <div className='flex gap-3'>
                    <div
                    className='rounded-full p-4 bg-red-600'></div>
                     <div
                    className='rounded-full p-4 bg-yellow-300'></div>
                     <div
                    className='rounded-full p-4 bg-green-600'></div>
                     <div
                    className='rounded-full p-4 bg-blue-600'></div>
                     <div
                    className='rounded-full p-4 bg-black'></div>
                    <div
                    className='rounded-full p-4 bg-slate-600'></div>

                </div>
                <h2 className='py-3 text-[25px]'>{products.description}</h2>
                  <div className='flex gap-5'>
                    <button className='py-3 px-5 text-white bg-red-600 hover:bg-black'>Buy Now</button>
                    <button className='py-3 px-5 text-white bg-red-600 hover:bg-black'>Add to Cart</button>
                  </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default page
