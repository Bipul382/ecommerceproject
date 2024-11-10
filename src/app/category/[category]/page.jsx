"use client"
import React, { useEffect, useState } from 'react'

function page({params}) {
    let [products, setProducts]= useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.category}`)
                .then(res=>res.json())
                .then(json=>setProducts(json))
      },[])
  return (
    <>
      {products.map((a)=>(
        <div>
            <img src={a.img}/>
        </div>
      ))}
    </>
  )
}

export default page
