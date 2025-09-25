import React from "react";

export default function Socials() {
    return (
        <section className="flex flex-col w-full gap-10">
            <h2 className="text-white/60 text-xl font-montserrat">Connect with us </h2>
            <div className="flex flex-col gap-4">
                <FlipLink href="https://www.linkedin.com/company/heisyn/" color="linkedin">Linkedin</FlipLink>
                <FlipLink href="https://wa.me/918074730610" color="whatsapp">Whatsapp</FlipLink>
                <FlipLink href="mailto:help.heisyn@gmail.com" color="email">Gmail</FlipLink>
                <FlipLink href="https://www.instagram.com/heisyn.automation/" color="instagram">Instagram</FlipLink>
                <FlipLink href="https://discord.gg/9MNvsdme" color="discord">Discord</FlipLink>
            </div>
        </section>
    );
};

const FlipLink = ({ children, href, color }) => {
    const colorClasses = {
        linkedin: "group-hover:text-blue-400",
        whatsapp: "group-hover:text-green-400",
        email: "group-hover:text-red-400",
        instagram: "group-hover:text-pink-400",
        discord: "group-hover:text-indigo-400",
    };

    const hoverColorClass = colorClasses[color] || "group-hover:text-neutral-200";

    return (
        <a
            href={href}
            className="group relative block overflow-hidden whitespace-nowrap text-neutral-100/95 font-robotoflex text-5xl font-black uppercase sm:text-7xl"
            style={{
                lineHeight: 0.75,
            }}
            target="_blank"
        >
            <div className="flex">
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
            <div className="absolute inset-0 flex">
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
