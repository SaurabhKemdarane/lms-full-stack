import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16 overflow-hidden'>
      <p className='text-gray-500 text-base'>
        Trusted by companies of all sizes
      </p>
      <div  className='flex mt-10' style={{ animation: 'marquee 15s linear infinite' }}>
        <div className='flex gap-6'>
          <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' />


          <img src={assets.walmart_logo} alt="Walmart" className='w-20 md:w-28' />
          <img src={assets.paypal_logo} alt="PayPal" className='w-20 md:w-28' />
          <img src={assets.adobe_logo} alt="Adobe" className='w-20 md:w-28' />
          <img src={assets.accenture_logo} alt="Accenture" className='w-20 md:w-28' />
        </div>
      </div>
    </div>
  )
}

export default Companies