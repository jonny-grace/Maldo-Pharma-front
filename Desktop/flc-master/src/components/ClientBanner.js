import Image from 'next/image'
import React from 'react'

function ClientBanner({logoss}) {
 
  return (
    <div className="xl:py-8 lg:py-8 md:py-16 sm:py-16 px-2 ">
        <div className="flex  md:gap-5 my-5 xxl:w-[1525.87px] justify-center mx-auto">
          {logoss.length!=0 ? <Image src={logoss} alt="logos" width={1000} height={1000}  className=' xl:w-[1100px] xxl:w-[1400px] ' />:<h2>No Image found</h2>}
        </div>
      </div>
  )
}

export default ClientBanner