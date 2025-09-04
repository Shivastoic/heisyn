// component.jsx
'use client';
import GridBG from '@/app/components/gridbg';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, useRef } from 'react';
import VariableProximity from '@/app/home/about/animatedtext';
import Link from 'next/link';
import FlowButton from '@/app/components/flow-button';
import Container from '@/app/components/container';

const ServicesHero = forwardRef((props, ref) => {

    const containerRef = useRef(null);

    return (
        <ReactLenis root>
            <section className='pb-16 md:pb-20 relative' ref={ref}>
                <GridBG />
                <div className='wrapper'>
                    <section className='h-screen w-full grid place-content-center sticky top-0 overflow-hidden'>
                        
                        <h1 className='text-white 2xl:text-7xl text-5xl hidden md:block px-8 font-medium font-montserrat text-center tracking-tight leading-[120%] relative z-10 cursor-default'>
                            Transform Your Business
                            <br />
                            With AI Automation Solutions <br />
                            Discover Our Services 👇
                        </h1>
                        <h1 className='text-white text-5xl md:hidden px-8 font-medium font-montserrat text-center tracking-tight leading-[120%] relative z-10 cursor-default'>
                            Transform Your Business
                            With AI Automation Solutions
                            Discover Our Services 👇
                        </h1>
                    </section>
                </div>

                {/* Desktop animated cards (above md screens) */}
                <div className='w-full p-4 hidden md:block'>
                    <div className='grid grid-cols-12 gap-3'>
                        <div className='grid gap-3 col-span-4'>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        </div>
                        <div className='sticky top-0 h-screen w-full col-span-4 gap-3 grid grid-rows-3'>
                            <div className='w-full h-full bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-full bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-full bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        </div>
                        <div className='grid gap-3 col-span-4'>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                            <div className='w-full h-96 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        </div>
                    </div>
                </div>

                {/* Mobile static cards (below md screens) */}
                <div className='w-full p-4 md:hidden'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-64 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        <div className='w-full h-64 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        <div className='w-full h-64 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        <div className='w-full h-64 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        <div className='w-full h-64 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                        <div className='w-full h-64 bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300'></div>
                    </div>
                </div>

                <Container>
                    <div className="flex flex-col gap-8 md:gap-16 items-center pt-20 md:pt-32">
                        <div
                            ref={containerRef}
                            style={{position: 'relative'}}
                            className="flex justify-center"
                        >
                            <VariableProximity
                                label={'“Ready to scale smarter with AI? Connect with our team today for a free consultation and let’s build an automation strategy tailored to your needs.”'}
                                className={'text-neutral-200 text-2xl md:text-4xl lg:text-5xl text-center leading-tight cursor-default'}
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={100}
                                falloff='linear'
                            />
                        </div>
                        <Link href="/contact" className="w-fit">
                            <FlowButton text="Get In Touch" />
                        </Link>
                    </div>
                </Container>
            </section>
        </ReactLenis>
    );
});

export default ServicesHero;
