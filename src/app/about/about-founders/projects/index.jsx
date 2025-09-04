'use client';
import Link from 'next/link';
import React from 'react'

export default function FounderProject({index, title, setModal, mainLink}) {

    return (
        <div 
            onMouseEnter={() => {setModal({active: true, index})}} 
            onMouseLeave={() => {setModal({active: false, index})}} 
            className="w-full px-2 sm:px-10 py-6 md:px-20 md:py-10 lg:px-24 lg:py-14 border-t-3 border-white/10 last:border-b-3 group"
        >
            <Link 
                href={mainLink} 
                target="_blank" 
                className="flex items-center justify-between transition-all duration-200 group-hover:opacity-50 cursor-pointer"
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-neutral-100 font-poppins font-light transition-all duration-500 group-hover:-translate-x-2">
                    {title}
                </h2>
                <div className="flex items-center gap-4">
                    <p className="text-neutral-100 hidden md:block text-sm md:text-base font-montserrat transition-all duration-500 group-hover:translate-x-2">
                        Co Founder
                    </p>
                </div>
            </Link>
        </div>
    )
}
