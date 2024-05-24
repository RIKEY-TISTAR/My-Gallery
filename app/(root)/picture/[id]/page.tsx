"use client";
import useSinglePictures from '@/Hooks/useSinglePictures';
import { ArrowLeft, Check, CircleUserRound, Search } from 'lucide-react';
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

export default function page({ params }) {

    const detailArticle = useSinglePictures(params.id);

    const { user } = useKindeBrowserClient();
    useEffect(() => {
      console.log(user)
    }, [user])

    return (
        <section className='relative w-full h-screen py-16'>
            <Link href={'/'} className='color-white left-36 absolute top-0  hover:underline flex' ><ArrowLeft color='#ffffff' strokeWidth={0.5} />На главную</Link>
            <div className="container mx-auto">
                <div className=" flex items-center justify-center gap-44 mb-60">

                    <img src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailArticle?.attributes?.image?.data.attributes?.url)} width={500} height={500} alt='' className='object-cover group-hover:opacity-50 transition-all duration-150' />
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-40">
                            <div className="flex items-center gap-7">
                                <img src="/assets/img/author/photo-author.png" width={70} height={70} alt="" className='width-[70px] height-[70px] rounded-full' />
                                <div className="">
                                    <p className='text-xl'>Иоан Вазовский</p>
                                    <p className='text-sm colorText' >26 апреля - 2024 года</p>
                                </div>
                            </div>
                            <div className="">
                                <Link href={'/profile'} className='color-white bg-but p-2 rounded opacity-80 hover:opacity-100' >Больше работ</Link>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center pt-12 w-[600px]">
                            <h3 className='text-2xl pb-2.5 text-center'>« {detailArticle?.attributes?.name} »</h3>
                            <p className=''>{detailArticle?.attributes?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-rrr"></div>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='text-2xl my-8'>Комментарии</h3>
                    <div className="w-[1370px] h-[680px] flex flex-col justify-between bg-com rounded-3xl p-12">

                        <div className="">
                            

                            <div className="flex items-center">
                                <div className="items-center gap-2 py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[open]:bg-gray-700 data-[focus]:outline-10 ">
                                    <CircleUserRound strokeWidth={0.5} color="#6A6A6A" className='w-[50px] h-[50px]' />
                                </div>
                                <div className="">
                                    <h3 className="text-white">{user?.given_name}</h3>
                                    <p className="text-gray-600">Time of comm</p>
                                </div>
                            </div>

                            <div className="comm px-3">
                                <p>Патриотичный Комментарий</p>
                            </div>
                        </div>


                        <div className="">
                            <div className="relative w-full ">
                                <input type="search" placeholder='Комментарий' className={clsx(
                                    'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white h-[50px]',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                )} />
                                <button className='group absolute top-3 right-3 '><Check className='' strokeWidth={0.5} absoluteStrokeWidth /></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    )
}
