'use client';

import { useRef } from 'react';
import VariableProximity from "@/app/home/about/animatedtext";

export default function AboutIntro(){

    const containerRef = useRef(null);

    return (

        <div className='min-h-[70vh] flex flex-col gap-10 justify-center items-center relative'>
            <div
                ref={containerRef}
                style={{position: 'relative'}}
                className="flex max-w-screen-lg px-6 md:px-0"
            >
                <VariableProximity
                    label={'“We’re a team of Tech brains and coffee addicts, building AI Automations that do the boring stuff so you don’t have to”'}
                    className={'text-neutral-200 text-3xl md:text-4xl lg:text-5xl text-center leading-tight cursor-default'}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                />
            </div>
            <h3 className='text-2xl md:text-3xl font-robotoflex font-medium text-neutral-200 absolute bottom-4'>
                Meet The Team 👇
            </h3>
        </div>
        

    )

}
