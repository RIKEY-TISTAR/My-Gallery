import React from 'react'
import Image from 'next/image';
import Heroimg from '/public/assets/images/hero/bg.jpg';

export const Hero = () => {
  return (
    <section className='hero'>

      <div className="hero-inner relative w-full flex justify-center items-center ">

        {/* <div className="hero-img-section w-full object-cover absolute mix-blend-owerlay -z-10">
          <Image width={1920} height={1080} className='hero-img w-full' src={Heroimg} alt="-_-" />
        </div> */}

        <div className="text-section container mx-auto w-full flex flex-col justify-center items-center py-36 md:py-36">

          <div className="hero-title-section full mb-16 w-auto xl:w-1/2">
            <h2 className="hero-title text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Моя галерея
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            <div className="h-auto max-w-full rounded-lg">
              <Image width={1920} height={1080} className="h-auto max-w-full rounded-lg" src={Heroimg} alt="" />
            </div>

            <div className="h-auto max-w-full rounded-lg">
              <Image width={1920} height={1080} className="h-auto max-w-full rounded-lg" src={Heroimg} alt="" />
            </div>

            <div className="h-auto max-w-full rounded-lg">
              <Image width={1920} height={1080} className="h-auto max-w-full rounded-lg" src={Heroimg} alt="" />
            </div>

            <div className="h-auto max-w-full rounded-lg">
              <Image width={1920} height={1080} className="h-auto max-w-full rounded-lg" src={Heroimg} alt="" />
            </div>

            <div className="h-auto max-w-full rounded-lg">
              <Image width={1920} height={1080} className="h-auto max-w-full rounded-lg" src={Heroimg} alt="" />
            </div>

            <div className="h-auto max-w-full rounded-lg">
              <Image width={1920} height={1080} className="h-auto max-w-full rounded-lg" src={Heroimg} alt="" />
            </div>

          </div>

        </div>

      </div>


    </section>
  )
}
