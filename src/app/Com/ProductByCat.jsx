"use client"
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'

function ProductByCat({title}) {
    let [products, setProducts]=useState([])
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${title}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
  },[])
  return (
    <>
      <div className='container flex flex-wrap w-[100%] text-center gap-5 '>
          
          {products.slice(0,4).map((a)=>(
            <div className='w-[300px] h-[400px] justify-center container' key={a.id}>
              <img className='w-[200px] h-[200px]' src={a.image} />
              <div className=' text-left bg-white'>
              <h3>
               <Link href={`/details/${a.id}`}> {a.title}</Link></h3>
              <h3>{a.price}</h3>
              </div>
            </div>
          ))}
        
        </div>
    </>
  )
}

export default ProductByCat
