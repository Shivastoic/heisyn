import Container from "@/app/components/container/index";
import FlowButton from "@/app/components/flow-button";
import AboutCard from "@/app/home/about/card";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    // DATA
    const data = {
        title: "AI Solutions that fit your Business Needs",
        subtitle: "From idea to implementation",
    }

    // CARD DATA
    const card_data = [
        {
            id: 1,
            title: "Customer Care Agent",
            link: "/services/customer-care",
            description: "24/7 AI-powered customer support that handles inquiries, resolves issues, and provides instant responses to improve customer satisfaction.",
            icon: "/images/services/customer-care-icon.png",
            image: "/images/services/customer-care.png", 
            className: "!bg-white/3 md:col-span-2"
        },
        {
            id: 2,
            title: "Sales Agent",
            link: "/services/sales-agent",
            description: "Intelligent sales automation that qualifies leads, nurtures prospects, and converts visitors into customers with personalized interactions.",
            icon: "/images/services/sales.png",
            className: "!bg-white/3"
        },
        {
            id: 3,
            title: "Lead Generator Agent",
            link: "/services/lead-generator",
            description: "Advanced lead generation system that identifies, captures, and scores potential customers to maximize your sales pipeline.",
            icon: "/images/services/lead.png",
            className: "!bg-white/3"
        },
        {
            id: 4,
            title: "Social Media Marketing Agent",
            link: "/services/social-media-marketing",
            description: "Automated social media marketing that creates, schedules, and analyzes posts to boost engagement and grow your online presence.",
            icon: "/images/services/social.png",
            image: "/images/services/social-media-marketing.jpg", 
            className: "!bg-white/3 md:col-span-2"
        }
    ];

    return (
        <section className="py-12 px-4 md:py-26">
            <Container>
                <div className="flex flex-col items-center justify-center gap-10 lg:gap-14">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-base md:text-xl lg:text-2xl text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                            {data.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                        {card_data.map((card) => (
                            <AboutCard 
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
                                        <div className="space-y-2">
                                            <h3 className="text-neutral-200 text-xl md:text-2xl font-semibold font-poppins">
                                                {card.title}
                                            </h3>
                                            <p className="text-neutral-400 font-poppins text-base">
                                                {card.description}
                                            </p>
                                        </div>
                                        
                                    </div>
                                    
                                    <Link href={card.link}>
                                        <FlowButton text="Learn More">
                    
                                        </FlowButton>
                                    </Link>
                                </div>
                                {card.image && (
                                    <div className="aspect-square h-full overflow-hidden rounded-lg">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={1000}
                                            height={1000}
                                            className="object-cover object-center aspect-square"
                                        />
                                    </div>
                                )}
                            </AboutCard>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6">
                        <p className="text-center max-w-2xl text-gray-400 font-poppins">
                            Discover how our AI-powered agents can transform your business operations, enhance customer experiences, and drive growth. Explore our full range of solutions tailored to your unique needs.
                        </p>
                        <Link href="/services">
                            <FlowButton text="Explore More" />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
