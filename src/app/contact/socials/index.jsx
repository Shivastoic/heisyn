import React from "react";

export default function Socials() {
    return (
        <section className="lg:col-span-2 grid justify-center w-full gap-16">
            <h2 className="text-white/60 text-2xl text-center font-semibold font-montserrat">Get In Touch With Us !</h2>
            <div className="grid justify-center gap-4">
                <FlipLink href="https://linkedin.com/in/vaib215" color="linkedin">. Linkedin</FlipLink>
                <FlipLink href="https://wa.me/918074730610" color="whatsapp">Whatsapp .</FlipLink>
                <FlipLink href="mailto:shivapandey9898@gmail.com" color="email">. Gmail</FlipLink>
                <FlipLink href="https://instagram.com/thisis_vaib" color="instagram">Instagram .</FlipLink>
            </div>
        </section>
    );
};

const FlipLink = ({ children, href, color }) => {
    const colorClasses = {
        linkedin: "group-hover:text-blue-400",
        whatsapp: "group-hover:text-green-400",
        email: "group-hover:text-red-400",
        instagram: "group-hover:text-pink-400"
    };

    const hoverColorClass = colorClasses[color] || "group-hover:text-neutral-200";

    return (
        <a
            href={href}
            className="group relative block overflow-hidden whitespace-nowrap text-neutral-100/85 font-robotoflex text-5xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
            style={{
                lineHeight: 0.75,
            }}
            target="_blank"
        >
            <div className="flex justify-center">
                {children.split("").map((letter, i) => (
                    <span
                        key={i}
                        className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
                        style={{
                            transitionDelay: `${i * 25}ms`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <div className="absolute inset-0 flex justify-center">
                {children.split("").map((letter, i) => (
                    <span
                        key={i}
                        className={`inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 ${hoverColorClass}`}
                        style={{
                            transitionDelay: `${i * 25}ms`,
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </a>
    );
};
