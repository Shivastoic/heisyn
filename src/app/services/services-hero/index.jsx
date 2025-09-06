// component.jsx
'use client';
import GridBG from '@/app/components/gridbg';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, useRef } from 'react';
import VariableProximity from '@/app/home/about/animatedtext';
import Link from 'next/link';
import FlowButton from '@/app/components/flow-button';
import Container from '@/app/components/container';

import ServiceCard from '@/app/home/services/card';
import Image from 'next/image';

import OrbitingSkills from "@/app/components/orbit";


const ServicesHero = forwardRef((props, ref) => {

    // DATA
    const card_data = [
        {
            id: 1,
            title: "Voice Calling Agent",
            link: "/services/voice-calling-agent",
            description: "AI-powered voice communication system that handles customer support calls, conducts sales outreach, and manages follow-up conversations with natural speech recognition and response capabilities.",
            icon: "/images/services/customer-care-icon.png",
        },
        {
            id: 2,
            title: "Smart Quote Generator",
            link: "/services/smart-quote-generator",
            description: "Intelligent quotation system that automatically generates accurate pricing proposals based on client requirements, project scope, and historical data to streamline your sales process.",
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 3,
            title: "CRM Integration Suite",
            link: "/services/crm-integration-suite",
            description: "Comprehensive CRM automation platform that seamlessly integrates with existing tools, automates data entry, and creates custom workflows to optimize your customer relationship management.",
            icon: "/images/services/lead.png",
            className: "!bg-white/3"
        },
        {
            id: 4,
            title: "Social Media Automation",
            link: "/services/social-media-automation",
            description: "Complete social media management solution featuring automated content posting, intelligent scheduling, and AI-generated post suggestions with comprehensive performance analytics across all platforms.",
            icon: "/images/services/social.png",            
        },
        {
            id: 5,
            title: "Automated Invoice Management",
            link: "/services/automated-invoice-management",
            description: "Streamlined invoicing system that automatically sends follow-up reminders, tracks payment status, and manages billing cycles to improve cash flow and reduce manual administrative tasks.",
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 6,
            title: "Lead Scoring & Management",
            link: "/services/lead-scoring-management",
            description: "Advanced lead qualification system that automatically scores prospects based on engagement metrics, demographic data, and behavioral patterns to prioritize high-value opportunities.",
            icon: "/images/services/lead.png",
        },
        {
            id: 7,
            title: "Inbox Reply Assistant",
            link: "/services/inbox-reply-assistant",
            description: "AI-powered email management tool that drafts intelligent responses, categorizes messages by priority, and automates routine correspondence to enhance communication efficiency.",
            icon: "/images/services/customer-care-icon.png",
            className: "!bg-white/3"
        },
        {
            id: 8,
            title: "Job Profit Tracker",
            link: "/services/job-profit-tracker",
            description: "Comprehensive project profitability analysis system that monitors costs, tracks revenue, and provides real-time insights into job margins to optimize business performance.",
            icon: "/images/services/sales.png",
        },
        {
            id: 9,
            title: "Review Management System",
            link: "/services/review-management-system",
            description: "Automated Google review management platform that sends follow-up requests to satisfied customers, monitors online reputation, and helps maintain positive brand presence.",
            icon: "/images/services/social.png",
            className: "!bg-white/3"
        },
        {
            id: 10,
            title: "Price Monitoring Tool",
            link: "/services/price-monitoring-tool",
            description: "Intelligent market analysis system that tracks competitor pricing, monitors industry trends, and provides automated alerts to help maintain competitive positioning and maximize profitability.",
            icon: "/images/services/lead.png",
        }
    ];

    const top_5_cards = card_data.slice(0, 5);
    const bottom_5_cards = card_data.slice(5, 10);

    const containerRef = useRef(null);

    return (
        <ReactLenis root>
            <section className='pb-16 md:pb-20 relative' ref={ref}>
                <GridBG />
                <div className=''>
                    <div className='h-screen w-full grid place-content-center sticky top-0 overflow-hidden px-4'>
                        
                        <h1 className='text-white text-4xl md:hidden font-medium font-montserrat text-center tracking-tight leading-[120%] relative z-10 cursor-default'>
                            Transform Your Business
                            
                            With AI Automation Solutions
                            Discover Our Services <br />👇
                        </h1>
                        <div
                            ref={containerRef}
                            style={{position: 'relative'}}
                            className="hidden md:flex flex-col gap-6 justify-center items-center max-w-[1000px]"
                        >
                            <VariableProximity
                                label={'Transform Your Business With AI Automation Solutions Discover Our Services'}
                                className={'text-neutral-100 lg:text-6xl text-center leading-tight cursor-default'}
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={100}
                                falloff='linear'
                            />
                            <span className=' lg:text-6xl'>👇</span>
                        </div>
                    </div>
                </div>

                {/* Desktop animated cards (above md screens) */}
                <div className='w-full p-4 hidden md:block'>
                    <div className='grid grid-cols-12 gap-3'>
                        <div className='grid gap-3 col-span-4'>
                            {top_5_cards.map((card) => (
                                <ServiceCard 
                                    key={card.id} 
                                    className={`!bg-white/3 backdrop-blur-xs`}
                                >
                                    <div className="flex flex-col gap-4 justify-between md:gap-6 p-2 md:p-4">
                                        <div className="flex flex-col gap-6 md:gap-8">
                                            <Image 
                                                src={card.icon}
                                                alt={card.title}
                                                width={40}
                                                height={40}
                                                className="object-contain size-16"
                                            />
                                            <div className="space-y-4">
                                                <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold font-poppins">
                                                    {card.title}
                                                </h3>
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                        {card.description}
                                                    </p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                        <Link href={card.link}>
                                            <FlowButton text="Learn More">
                        
                                            </FlowButton>
                                        </Link>
                                    </div>
                                </ServiceCard>
                            ))}
                        </div>
                        <div className='sticky top-0 h-screen w-full col-span-4 gap-3 flex items-center justify-center'>
                            <OrbitingSkills />
                        </div>
                        <div className='grid gap-3 col-span-4'>
                            {bottom_5_cards.map((card) => (
                                <ServiceCard 
                                    key={card.id} 
                                    className={`!bg-white/3 backdrop-blur-xs`}
                                >
                                    <div className="flex flex-col gap-4 justify-between md:gap-6 p-2 md:p-4">
                                        <div className="flex flex-col gap-6 md:gap-8">
                                            <Image 
                                                src={card.icon}
                                                alt={card.title}
                                                width={40}
                                                height={40}
                                                className="object-contain size-16"
                                            />
                                            <div className="space-y-4">
                                                <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold font-poppins">
                                                    {card.title}
                                                </h3>
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                        {card.description}
                                                    </p>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                        <Link href={card.link}>
                                            <FlowButton text="Learn More">
                        
                                            </FlowButton>
                                        </Link>
                                    </div>
                                </ServiceCard>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile static cards (below md screens) */}
                <div className='w-full p-4 md:hidden'>
                    <div className='flex flex-col gap-4'>
                        {card_data.map((card) => (
                            <ServiceCard 
                                key={card.id} 
                                className={`!bg-white/5 md:!bg-white/3 backdrop-blur-xs`}
                            >
                                <div className="flex flex-col gap-4 justify-between md:gap-6 p-2 md:p-4">
                                    <div className="flex flex-col gap-6 md:gap-8">
                                        <Image 
                                            src={card.icon}
                                            alt={card.title}
                                            width={40}
                                            height={40}
                                            className="object-contain size-16"
                                        />
                                        <div className="space-y-4">
                                            <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold font-poppins">
                                                {card.title}
                                            </h3>
                                            <div className="flex flex-col gap-1">
                                                <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                    {card.description}
                                                </p>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <Link href={card.link}>
                                        <FlowButton text="Learn More">
                    
                                        </FlowButton>
                                    </Link>
                                </div>
                            </ServiceCard>
                        ))}
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
