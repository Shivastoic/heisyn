import Container from "@/app/components/container/index";
import FlowButton from "@/app/components/flow-button";
import ServiceCard from "@/app/home/services/card";
import Image from "next/image";
import Link from "next/link";

import GridBG from "@/app/components/gridbg";


export default function Services() {

    // DATA
    const data = {
        title: "AI Solutions that fit your Business Needs",
        subtitle: "From idea to implementation",
    }

   // CARD DATA
    const card_data = [
        {
            id: 1,
            title: "Voice Calling Agent",
            link: "/services/voice-calling-agent",
            description: [
                "Voice-based customer support",
                "Sales and lead calls",
                "Cold calling outreach",
                "Customer feedback collection",
                "Follow-up reminders",
            ],
            icon: "/images/services/customer-care-icon.png",
            image: "/images/services/customer-care.png", 
            className: "!bg-white/3 md:col-span-2"
        },
        {
            id: 2,
            title: "Business Task Automation",
            link: "/services/business-task-automation",
            description: [
                "Smart quote generator",
                "Automated invoice follow-ups",
                "Job profit tracker",
                "Inbox reply assistant",
                "Google review follow-ups",
                "Price monitoring tool",
            ],
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 3,
            title: "CRM Automation Integration",
            link: "/services/crm-automation",
            description: [
                "CRM tool integration",
                "Automated data entry",
                "Lead scoring system",
                "Email & task automation",
                "Custom team workflows",
            ],
            icon: "/images/services/lead.png",
            className: "!bg-white/3"
        },
        {
            id: 4,
            title: "Social Media Automation",
            link: "/services/social-media-automation",
            description: [
                "Automated content posting",
                "Smart scheduling",
                "AI post suggestions",
                "Performance reports",
                "Cross-platform management",
            ],
            icon: "/images/services/social.png",
            image: "/images/services/social-media-marketing.jpg", 
            className: "!bg-white/3 md:col-span-2"
        }
    ];



    return (
        <section className="py-12 px-4 md:py-26 relative">

            <GridBG />

            <Container>
                <div className="flex flex-col items-center justify-center gap-10 lg:gap-14">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-base md:text-lg text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                            {data.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                        {card_data.map((card) => (
                            <ServiceCard 
                                key={card.id} 
                                className={`${card.className} ${card.image ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : ''} `}
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
                                                {
                                                    card.description.map((item, index) => (
                                                        <p key={index} className="text-neutral-400 font-poppins text-sm md:text-base before:content-['•'] before:text-pink-500 before:font-bold before:mr-2">
                                                            {item}
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                    
                                    <Link href={card.link}>
                                        <FlowButton text="Learn More">
                    
                                        </FlowButton>
                                    </Link>
                                </div>
                                {card.image && (
                                    <div className="aspect-square overflow-hidden rounded-lg">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={1000}
                                            height={1000}
                                            className="object-cover object-center"
                                        />
                                    </div>
                                )}
                            </ServiceCard>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <p className="text-center max-w-2xl text-gray-400 font-poppins">
                            Discover how our AI-powered agents can transform your business operations, enhance customer experiences, and drive growth. Explore our full range of solutions tailored to your unique needs.
                        </p>
                        <Link href="/services">
                            <FlowButton text="Explore More Solutions" />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
