import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center'>
        <div className='flex-1 '>
        <h2>আপনার শিশুকে দিন একটি সুন্দর ভবিষ্যৎ</h2>
        <p>Buy Every toy with up to 15% Discount</p>
        <button>Expore Products</button>
        </div>
        <div className='flex-1'>
         <Image
         alt="Buy Every toy with up to 15% Discount" src={"/assets/hero.png"} width={500} height={400}
         ></Image>
        </div>
    </div>
  )
}

export default Banner