'use client';
import { useRef } from 'react';
import VariableProximity from "@/app/home/about/animatedtext";
import Link from "next/link";
import FlowButton from "@/app/components/flow-button";

export default function AboutCTA() {

    const containerRef = useRef(null);

    return (

        <div className="flex flex-col gap-8 md:gap-16 items-center">
            <div
                ref={containerRef}
                style={{position: 'relative'}}
                className="flex justify-center"
            >
                <VariableProximity
                    label={' Ready to transform your business operations? Contact us today to discover how our AI automation solutions can drive efficiency and growth.'}
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

    )

}
