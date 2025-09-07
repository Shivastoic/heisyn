import Container from "@/app/components/container";
import ShuffleGrid from "@/app/components/suffle";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

export default function AboutHero(){

    // DATA
    const data = {
        title: "About Us",
        description: "At Heisyn we're reimagining how businesses work with AI. Our team builds smart automation that actually makes sense — no fluff, just results that matter.",
        subtitle: "What We Do",
        services: [
            "Intelligent workflow automation",
            "Custom AI solutions that scale",
            "Data-driven decision tools",
            "Process optimization & analytics",
            "Smart integration platforms"
        ],
        stats: [
            { number: "500+", label: "Processes Automated" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "60%", label: "Average Time Saved" }
        ],
        users: [
            {
                src: "/images/user-3.jpg",
                alt: "User 3",
            },
            {
                src: "/images/user-1.jpg",
                alt: "User 1",
            },
            {
                src: "/images/user-2.jpg",
                alt: "User 2",
            },
        ],
        percent: "100%",
        percent_text: "Clients Satisfaction",
    }

    const squareData = [
        {
            id: 1,
            src: "/images/about/hero1.jpg",
        },
        {
            id: 2,
            src: "/images/about/hero2.jpg",
        },
        {
            id: 3,
            src: "/images/about/hero3.jpg",
        },
        {
            id: 4,
            src: "/images/about/hero4.jpg",
        },
    ];

    return (
        <section className="flex items-center min-h-[80vh] py-10"> 
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
                    <div className="flex flex-col gap-10 h-full max-">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl text-neutral-100 font-montserrat font-semibold">
                                {data.title}
                            </h2>
                            
                            <p className="text-neutral-100/80 font-poppins leading-relaxed text-sm md:text-base">
                                {data.description}
                            </p>
                        </div>

                        {/* Services Checklist */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl text-neutral-100 font-montserrat font-medium">
                                {data.subtitle}
                            </h3>
                            
                            <ul className="flex flex-col gap-3">
                                {data.services.map((service, index) => (
                                    <li key={index} className="flex items-center gap-3 text-neutral-100/70 text-sm md:text-base font-poppins">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                            <FaCheck className="w-3 h-3 text-white" />
                                        </div>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {data.stats.map((stat, index) => (
                                <div key={index} className="text-center bg-white/10 p-4 rounded-lg">
                                    <div className="text-2xl md:text-3xl font-montserrat font-bold text-neutral-100">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-neutral-100/60 font-poppins">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <ShuffleGrid squareData={squareData} />
                        <div className="flex items-center justify-center gap-3 md:gap-6">
                            <div className="flex items-center">
                                {data.users.map((user, index) => (
                                    <div
                                        key={index}
                                        className={`size-10 md:size-12 rounded-full overflow-hidden border-2 border-neutral-100 ${
                                            index > 0 ? "-ml-4" : ""
                                        }`}
                                    >
                                    <Image
                                        src={user.src}
                                        alt={user.alt}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="font-poppins text-3xl text-neutral-100">{data.percent}</p>
                                <p className="font-poppins font-medium text-xs md:text-xl text-neutral-100">{data.percent_text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
