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
            link: "/services",
            description: [
                "Handle every lead instantly without your team lifting a finger",
                "Sales calls, customer support & feedback collection 24/7",
                "Follow-up reminders that never miss a beat",
                "Free up your team to focus on closing deals"
            ],
            icon: "/images/services/customer-care-icon.png",
            image: "/images/services/customer-care.png", 
            className: "!bg-white/3 md:col-span-2"
        },
        {
            id: 2,
            title: "Business Task Automation",
            link: "/services",
            description: [
                "Stop chasing invoices manually - automate follow-ups",
                "Track profit margins without spreadsheet headaches",
                "Generate smart quotes in seconds, not hours",
                "Never worry about the little things slowing you down"
            ],
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 3,
            title: "CRM Automation Integration",
            link: "/services",
            description: [
                "Make your CRM work FOR you, not against you",
                "Automated data entry - no more hours wasted",
                "Leads scored and tasks created automatically",
                "Sales team focuses only on closing deals"
            ],
            icon: "/images/services/lead.png",
            className: "!bg-white/3"
        },
        {
            id: 4,
            title: "Social Media Automation",
            link: "/services",
            description: [
                "Keep your brand active everywhere without the time drain",
                "Smart scheduling across all platforms",
                "AI-generated content that actually engages",
                "Performance reports delivered automatically"
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
                <div className="flex flex-col items-center justify-center gap-10 lg:gap-16">
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
                                                        <div key={index} className="flex items-start gap-2">
                                                            <span className="text-pink-500 font-bold text-base md:text-base flex-shrink-0">•</span>
                                                            <p className="text-neutral-400 font-poppins text-sm md:text-base">
                                                                {item}
                                                            </p>
                                                        </div>
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
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                )}
                            </ServiceCard>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <p className="text-center max-w-2xl text-gray-400 font-poppins">
                            Where would automation make the biggest impact for you?<br/>
                            Some teams use Heisyn to reduce costs. Others to scale faster. Others aim to improve customer experience. The right solution depends on where your bottlenecks are today.
                        </p>
                        <p className="text-center max-w-2xl text-gray-400 font-poppins">
                            👉 Let’s explore together which automation<br/>could help your business to grow faster.
                        </p>
                        <Link href="/services">
                            <FlowButton text="Explore Solutions" />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
