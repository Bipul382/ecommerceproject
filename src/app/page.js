"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ProductByCat from './Com/ProductByCat'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { catData, newsData } from './Data';


function page() {
  let [products, setProducts]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  },[])
  let id=products.filter((a)=>a.id=='16')
  let id1=products.filter((a)=>a.id=='10')
  let id2=products.filter((a)=>a.id=='11')
  let [cat, setCat]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>setCat(json))
  },[])
  
  return (
    <>
      <section className='lg:flex'>
        <div className='lg:w-[60%] relative'>
          <img className='w-[100%]' src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/Latest-Women-Clothing-Trends-Shop-Our-Collection-Now1.png'/>
          <div className='absolute top-4 left-3'>
            <button className='bg-[#FFD931] py-2 px-3'>Women Clothing</button>
            <h3 className='lg:text-[35px] text-[20px] py-3 font-bold'>Latest Women Clothing Trends: <br/> Shop Our Collection Now</h3>
            <button className='bg-[#FC1A1A] text-white px-4 py-2 font-bold'>Shop Now</button>
          </div>
        </div>
        <div className=' lg:w-[45%]'>
          <div className=' relative'>
               <img className='w-100' src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/Make-Your-Home-Stand-Out-with-Our-Stylish-Living-Room-Collection.png'/>
               <div className='absolute top-1 right-2'>   
            <h3 className='lg:text-[20px] text-[15px] py-3 font-bold'>Make Your Home Stand Out <br/> with Our Stylish Living Room Collection</h3>
            <button className='bg-transparent py-2 font-bold hover:text-[#FC1A1A]'>Shop Now</button>
               </div>
          </div>
          <div className='relative'>
            <img className='w-100' src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/Our-Selection-of-Bags-and-Accessories2.png'/>
            <div className='absolute top-14 right-7'>   
            <h3 className='lg:text-[25px] text-[15px] py-3 font-bold'>Our Selection of Bags <br/> and Accessories</h3>
            <button className='bg-transparent py-2 font-bold hover:text-[#FC1A1A]'>Shop Now</button>
               </div>
          </div>
        </div>
      </section>
      <section className='bg-[#FBFBFB]'>
        <div className='container lg:flex gap-10 justify-center py-10 '>
        <div className='lg:flex items-center gap-3'>
          <div>
          <img src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/trust-icon-1.png'/>
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Fast and Secure Delivery</h3>
             <p className='py-1'>Get free shipping on orders over <br/> $100 within the 10 to 15 Days</p>
          </div>
        </div>
        <div className='lg:flex items-center gap-3'>
          <div>
          <img src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/trust-icon-2.png'/>
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Money Back Guarantee</h3>
             <p className='py-1'>We’re committed to the perfect fit <br/> get full refund on any our returns</p>
          </div>
        </div>
        <div className='lg:flex items-center gap-3'>
          <div>
          <img src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/trust-icon-3.png'/>
          </div>
          <div>
            <h3 className='text-[20px] font-semibold'>Pro Quality Support</h3>
             <p className='py-1'>Ready to help you with any <br/> questions related to products you've <br/> ordered</p>
          </div>
        </div>
        </div> 
      </section>
      <section>
        <div className='container justify-center text-center '>
           <div className='py-5'>
            <h5 className='text-[#FC1A1A] border-b-2 border-[#FC1A1A] inline-flex font-bold text-[18px]'>Trending Products</h5>
            <h3 className='font-bold text-[35px] py-3'>All Eyes On Me!</h3>
            <p className='text-[#919191]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
            tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='pt-32'>
            <ProductByCat title="women's clothing"/>
            <ProductByCat title="men's clothing"/>
            </div>
            <Link href={`/ProductByCat/`}>
            <button className='bg-[#FC1A1A] py-2 font-bold text-white px-4 mb-32'>Shop Now</button></Link>
           </div>
        </div>
        
         
        
         
        {/* <div className='container flex flex-wrap w-[75%] text-center gap-5 '>
          
          {products.map((a)=>(
            <div className='w-[300px] h-[400px] justify-center container' key={a.id}>
              <img className='w-[200px] h-[200px]' src={a.image} />
              <div className=' text-left bg-white'>
              <h3>
               <Link href={`/details/${a.id}`}> {a.title}</Link></h3>
              <h3>{a.price}</h3>
              </div>
            </div>
          ))}
        
        </div> */}
       
      </section>

      <section>
        <div className='container justify-center text-center  py-10'>
          <h3 className='text-[#FC1A1A] border-b-2 border-[#FC1A1A] inline-flex font-semibold text-[18px]'>Best Seller </h3>
          <h2 className='text-[35px] font-bold py-5'>Top 'O The Mornin' To Ya!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
          tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='lg:flex justify-center items-center py-11 mb-36 mt-10'>
          <div>
            {id.map((a)=>(
              <div className='container justify-center w-[40%]'>
                <img className='w-full' src={a.image}/>
                <div className=' text-left bg-white'>
              <h3 className='font-semibold text-[20px]'>
               <Link href={`/details/${a.id}`}> {a.title}</Link></h3>
              <h3 className='text-[#FC1A1A]'>{a.price}</h3>
              </div>
              </div>
            ))}
          </div>
          <div className='relative overflow-hidden'>
            <img className='w-[600px] h-[500px]  border-2' src='https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'/>
            <div className='text-center absolute left-0 bottom-0 bg-gradient-to-b from-[#fc1a1a67] to to-[#ffd93143] text-white px-5'>
              <h2 className='text-[20px] font-semibold z-40'>Valentine Paul Essential Collection</h2>
              <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className='bg-transparent'>Shop Collection</button>
            </div>
          </div>
          <div>
          {id.map((a)=>(
              <div className='container justify-center w-[40%]'>
                <img className='w-full' src={a.image}/>
                <div className=' text-left bg-white'>
              <h3 className='font-semibold text-[20px]'>
               <Link href={`/details/${a.id}`}> {a.title}</Link></h3>
              <h3 className='text-[#FC1A1A]'>{a.price}</h3>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
      <div className='container justify-center text-center  py-10'>
          <h3 className='text-[#FC1A1A] border-b-2 border-[#FC1A1A] inline-flex font-semibold text-[18px]'>Categories </h3>
          <h2 className='text-[35px] font-bold py-5'>Top 'O The Mornin'</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
          tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='container lg:flex flex flex-wrap justify-between pt-10 pb-32'>
          <div className='text-center'>
            <img className='rounded-full w-[250px] h-[250px] border-2 border-[#421111]' src='https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'/>
            <Link href={`/ProductByCat/`}>
            <h2 className='text-[25px] font-semibold'>Electronics</h2></Link>
          </div>
          <div className='text-center'>
          <img className='rounded-full w-[250px] h-[250px] border-2 border-[#421111]' src='https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'/>
          <h2 className='text-[25px] font-semibold'>Jewellery</h2>
          </div>
          <div className='text-center'>
          <img className='rounded-full w-[250px] h-[250px] border-2 border-[#421111]' src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'/>
          <h2 className='text-[25px] font-semibold'>Men's Clothing</h2>
          </div>
          <div className='text-center'>
          <img className='rounded-full w-[250px] h-[250px] border-2 border-[#421111]' src='https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg'/>
          <h2 className='text-[25px] font-semibold'>Women's Clothing</h2>
          </div>
        </div>
      </section>
      <section className='container mb-14'>
      <div className='container justify-center text-center  py-10'>
          <h3 className='text-[#FC1A1A] border-b-2 border-[#FC1A1A] inline-flex font-semibold text-[18px]'>Limited Deals</h3>
          <h2 className='text-[35px] font-bold py-5'>Go, Going, Gone!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
          tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='lg:flex gap-5'>
          <div className='lg:w-[50%] '>
        {id1.map((a)=>(
          <div className=' border-2 lg:inline-flex py-6 px-4 gap-4 lg:h-[300px] items-center'>
            <div>
             <img className='w-64' src={a.image}/>
            </div>
            <div className='text-center lg:text-start'>
            <Link href={`/details/${a.id}`}>
              <h2 className='text-[25px] font-bold'>{a.title}</h2></Link>
              <h4 className='text-[#FC1A1A] font-medium text-[20px]'>{a.price}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
        ))}
       </div>
       <div className='lg:w-[50%]'>
        {id2.map((a)=>(
          <div className=' border-2 lg:inline-flex py-6 px-4 gap-4 lg:h-[300px] items-center'>
            <div>
             <img className='w-64' src={a.image}/>
            </div>
            <div>
              <Link href={`/details/${a.id}`}>
              <h2 className='text-[25px] font-bold'>{a.title}</h2></Link>
              <h4 className='text-[#FC1A1A] font-medium text-[20px]'>{a.price}</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
          </div>
        ))}
       </div>
        </div>
      </section>
      <section>
      <div className='container justify-center text-center  py-10'>
          <h3 className='text-[#FC1A1A] border-b-2 border-[#FC1A1A] inline-flex font-semibold text-[18px]'>New Arrivals</h3>
          <h2 className='text-[35px] font-bold py-5'>Seen These Before? We Bet!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
          tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className='pt-32'>
            <ProductByCat title="jewelery"/>
            <ProductByCat title="electronics"/>
            
            </div>
            <button className='bg-[#FC1A1A] py-2 font-bold text-white px-4 mb-32'>Shop More</button>
        </div>
       
      </section>
      <section>
        <div className='container justify-center text-center  py-10'>
        <h3 className='text-[#FC1A1A] border-b-2 border-[#FC1A1A] inline-flex font-semibold text-[18px]'>News and Blogs</h3>
          <h2 className='text-[35px] font-bold py-5'>Always on the News</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
          tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <section>
      <div className='container'>
      <Swiper
      spaceBetween={40}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {newsData.map((a)=>(
        <SwiperSlide>
          <img src={a.image}/>
          <h2 className='text-[#393737] py-3'>Admin/ {a.date}</h2>
          <h3 className='font-bold text-[20px]'>{a.title}</h3>
          <p className='text-[#8B8B8B]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
          </p>
          
          <button className='bg-[#FC1A1A] py-2 font-bold text-white px-4 mb-32 my-5'>Read More</button>
          
        </SwiperSlide>
      ))}
      
      
    </Swiper>
      </div>
      </section>
      <section className=' py-52 relative bg-gradient-to-b from-black to to-blue-950'>
        <div className='absolute right-14 bottom-0'>
          <img src='https://preview.wpelemento.com/fashion-shop-storefront/wp-content/uploads/sites/43/2024/06/newsletter-main-img.png'/>
        </div>
        <div className='absolute left-11 top-11 text-white'>
            <h4 className='text-[25px] font-semibold text-white'>Subscribe to Our Newsletter To Never Miss <br/> Out On New Deals</h4>
            <h2 className='text-[18px]'>Get a Sign-up Bonus of 10% off for your next order</h2>
            
            <input className='px-20 py-2' placeholder='Enter your email address here'>
            </input>
            <button className='bg-[#FC1A1A] py-2 font-bold text-white px-4  my-5'>Subscribe</button>
           
            <p className='text-[10px]'>By Subscribing you agree to our "Terms and Conditions" and Privacy policy</p>
          </div>
      </section>
    </>
  )
}

export default page
