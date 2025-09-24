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
            link: "/contact",
            description: "Are your calls reaching customers or getting lost in the noise? Imagine if every sales lead, support call, and follow-up happened automatically — with natural, human-like conversation. Our Voice Calling Agent makes it possible: your team spends less time dialing and more time closing deals.",
            benefits: [
                "Customer support is handled automatically",
                "Automated sales and lead calls",
                "Follow-ups without missed opportunities"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/customer-care-icon.png",
        },
        {
            id: 2,
            title: "Smart Quote Generator",
            link: "/contact",
            description: "How much time do your salespeople spend creating quotes manually? Each quote is an opportunity — but mistakes and delays can lose deals. The Smart Quote Generator creates accurate proposals instantly based on client requirements and historical data, keeping your sales process fast and reliable.",
            benefits: [
                "Accurate quotes every time",
                "Faster proposal generation",
                "Streamlined sales workflow"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 3,
            title: "CRM Integration Suite",
            link: "/contact",
            description: "Is your CRM helping you grow or slowing you down? Manual data entry, fragmented workflows, and missed leads waste time and opportunities. Our CRM Integration Suite automates data entry, creates custom workflows, and ensures your CRM works for your team — not the other way around.",
            benefits: [
                "Automated lead management",
                "Custom team workflows",
                "Seamless integration with existing tools"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/lead.png",
            className: "!bg-white/3"
        },
        {
            id: 4,
            title: "Social Media Automation",
            link: "/contact",
            description: "Is social media taking hours away from your team every week? Posting, scheduling, and tracking performance across platforms is exhausting. Our Social Media Automation handles it all: AI-generated content, smart scheduling, and performance insights — so your brand stays active and consistent without draining your team.",
            benefits: [
                "Automated content posting",
                "AI suggestions for posts",
                "Performance tracking across platforms"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/social.png",            
        },
        {
            id: 5,
            title: "Automated Invoice Management",
            link: "/contact",
            description: "How many hours does your team spend chasing unpaid invoices? Missed payments hurt cash flow and productivity. Our Automated Invoice Management system sends reminders, tracks payments, and keeps billing organized — freeing your team to focus on revenue, not paperwork.",
            benefits: [
                "Automatic follow-ups",
                "Real-time payment tracking",
                "Reduced administrative workload"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 6,
            title: "Lead Scoring & Management",
            link: "/contact",
            description: "Which leads deserve your team's immediate attention? Not all prospects are equal. Our Lead Scoring & Management system prioritizes high-value opportunities automatically, using engagement metrics, demographics, and behavior patterns — so your sales team spends time on the leads most likely to convert.",
            benefits: [
                "Prioritized opportunities",
                "Improved sales efficiency",
                "Data-driven lead decisions"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/lead.png",
        },
        {
            id: 7,
            title: "Inbox Reply Assistant",
            link: "/contact",
            description: "Is your inbox slowing down your day? Every email you ignore or delay is a missed opportunity. The Inbox Reply Assistant drafts intelligent responses, categorizes messages by priority, and automates routine correspondence — giving you back hours each week.",
            benefits: [
                "Automated replies",
                "Smart prioritization",
                "Faster email handling"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/customer-care-icon.png",
            className: "!bg-white/3"
        },
        {
            id: 8,
            title: "Job Profit Tracker",
            link: "/contact",
            description: "Do you really know which projects are profitable? Tracking costs, revenue, and margins manually is risky and time-consuming. Our Job Profit Tracker provides real-time insights, so you know exactly where each project stands — and can make smarter business decisions.",
            benefits: [
                "Real-time profitability insights",
                "Cost tracking automation",
                "Data-driven decisions for better margins"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/sales.png",
        },
        {
            id: 9,
            title: "Review Management System",
            link: "/contact",
            description: "Are you missing opportunities to boost your online reputation? Happy customers don't always leave reviews. Our Review Management System automatically sends follow-ups, monitors your online presence, and helps maintain a positive brand image — driving trust and new business.",
            benefits: [
                "Automated review requests",
                "Reputation monitoring",
                "Improved customer trust"
            ],
            buttonText: "Get In Touch",
            icon: "/images/services/social.png",
            className: "!bg-white/3"
        },
        {
            id: 10,
            title: "Price Monitoring Tool",
            link: "/contact",
            description: "Are you staying competitive in a constantly changing market? Manual price checks are slow and error-prone. Our Price Monitoring Tool tracks competitor pricing and industry trends automatically — so you can react faster, protect margins, and maximize profitability.",
            benefits: [
                "Automatic competitor tracking",
                "Alerts on price changes",
                "Informed pricing decisions"
            ],
            buttonText: "Get In Touch",
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
                            className="hidden md:flex flex-col gap-6 justify-center items-center max-w-[1030px]"
                        >
                            <VariableProximity
                                label={"What's slowing your business down? Repetitive tasks, missed follow-ups, and inconsistent engagement. Our AI automation clears these bottlenecks so your team can focus on growth and customer success. Explore our Services."}
                                className={'text-neutral-100 lg:text-4xl text-center leading-tight cursor-default'}
                                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={100}
                                falloff='linear'
                            />
                            <span className=' lg:text-5xl'>👇</span>
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
                                            <div className="space-y-3">
                                                <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold font-poppins">
                                                    {card.title}
                                                </h3>
                                                <div className="flex flex-col gap-4">
                                                    <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                        {card.description}
                                                    </p>
                                                    <div className="space-y-2">
                                                        <h4 className="text-neutral-300 font-poppins text-lg font-medium">Key Benefits:</h4>
                                                        <ul className="space-y-1">
                                                            {card.benefits.map((benefit, index) => (
                                                                <li key={index} className="text-neutral-400 font-poppins text-sm md:text-base flex gap-2 items-center">
                                                                    <span className="text-pink-500 text-lg">•</span>
                                                                    <span>{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <Link href={card.link}>
                                            <FlowButton text={card.buttonText}>
                        
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
                                            <div className="space-y-3">
                                                <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold font-poppins">
                                                    {card.title}
                                                </h3>
                                                <div className="flex flex-col gap-4">
                                                    <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                        {card.description}
                                                    </p>
                                                    <div className="space-y-2">
                                                        <h4 className="text-neutral-300 font-poppins text-lg font-medium">Key Benefits:</h4>
                                                        <ul className="space-y-1">
                                                            {card.benefits.map((benefit, index) => (
                                                                <li key={index} className="text-neutral-400 font-poppins text-sm md:text-base flex gap-2 items-center">
                                                                    <span className="text-pink-500 text-lg">•</span>
                                                                    <span>{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <Link href={card.link}>
                                            <FlowButton text={card.buttonText}>
                        
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
                                            <div className="flex flex-col gap-3">
                                                <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                    {card.description}
                                                </p>
                                                <div className="space-y-2">
                                                    <h4 className="text-neutral-300 font-poppins text-sm font-medium">Key Benefits:</h4>
                                                    <ul className="space-y-1">
                                                        {card.benefits.map((benefit, index) => (
                                                            <li key={index} className="text-neutral-400 font-poppins text-sm flex items-center">
                                                                <span className="text-pink-500 mr-2">•</span>
                                                                <span>{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Link href={card.link}>
                                        <FlowButton text={card.buttonText}>
                    
                                        </FlowButton>
                                    </Link>
                                </div>
                            </ServiceCard>
                        ))}
                    </div>
                </div>

                <Container>
                    <div className="flex flex-col gap-8 md:gap-14 items-center">
                        <div className='flex flex-col justify-center items-center lg:flex-col gap-6 lg:gap-8 px-4 py-8 lg:px-6 lg:py-12 max-w-[800px] rounded-2xl  mt-10'>
                            <p className='text-xl text-neutral-300 lg:text-3xl text-center font-medium font-montserrat leading-tight cursor-default'>
                                Know your way around AI Automation? Explore our ready-to-use workflows.
                            </p>
                            <Link href="/workflows" className="w-fit">
                                <FlowButton text="Buy Workflows" />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-8 md:gap-14 items-center  pt-20 md:pt-32'>
                            <div
                                ref={containerRef}
                                style={{position: 'relative'}}
                                className="flex justify-center"
                            >
                                <VariableProximity
                                    label={" Which of these solutions could make the biggest impact for your business right now? You don’t have to guess — we’ll help you map the most valuable automations for your team. Let’s start with a free consultation and design an automation strategy that actually moves the needle."}
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
                        
                    </div>
                </Container>
            </section>
        </ReactLenis>
    );
});

export default ServicesHero;
