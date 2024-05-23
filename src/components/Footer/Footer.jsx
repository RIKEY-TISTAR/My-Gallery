import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import TimeTablework from '/public/assets/images/time-table/dumbbell.png';

export const Footer = () => {
  return (

    <footer className="shadow bg-neutral-900 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">

          {/* <a href="#logo-id-link" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <Image width={1920} height={1080} className='stock-icon-img w-full' src={TimeTablework} alt="-_-" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GYM</span>
          </a> */}
          <ul className="button-section flex items-center justify-center gap-6">
            <li>
              <Link href="#" className="flex flex-shrink-0 items-center">
                <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full">Главная</button>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex flex-shrink-0 items-center">
                <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full">Войти</button>
              </Link>
            </li>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}
