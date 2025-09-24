'use client';
import Container from "@/app/components/container";

import { useRef } from 'react';
import VariableProximity from "@/app/home/about/animatedtext";
import Link from "next/link";
import FlowButton from "@/app/components/flow-button";

export default function About() {

    const containerRef = useRef(null);

    return (
        <section className="py-20 md:py-28">
            <Container>
                <div className="flex flex-col gap-8 md:gap-16 items-center">
                    <div
                        ref={containerRef}
                        style={{position: 'relative'}}
                        className="flex justify-center"
                    >
                        <VariableProximity
                            label={' Is now the right time to free your team from repetitive work? The companies that move fastest with automation are the ones that gain the biggest edge. You don’t need to guess where to start — we’ll map it out for you.'}
                            className={'text-neutral-200 text-2xl md:text-4xl lg:text-4xl text-center leading-tight cursor-default'}
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
    );
}
