"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import MobileHeader from "./mobile";

export default function Header() {

    const pathname = usePathname();
    const [hovered, setHovered] = useState(null);

    // HEADER DATA
    const headerData = {
        logo: "/logos/logo-black.png",
        alt: "Company Logo",
    }

    // HEADER LINKS
    const links = [

        {   
            color: "",
            link: "/",
            title: "Home",
        },
        {   
            color: "",
            link: "/services",
            title: "Services",
        },
        {   
            color: "",
            link: "/work",
            title: "Our Work",
        },
        {   
            color: "",
            link: "/about",
            title: "About Us",
        },
        {   
            color: "",
            link: "/career",
            title: "Career",
        },

    ]

    return (
        <header className="flex items-center justify-between px-4 md:px-10 py-4 bg-white">
            <div className="flex items-center gap-10 md:gap-24 lg:gap-32">
                <Link href="/">
                    <Image
                        src={headerData.logo}
                        alt={headerData.alt}
                        width={800}
                        height={300}
                        className="w-24 md:w-36"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-4">
                    {links.map((link, index) => {
                        const isActive = pathname === link.link;
                        const isHovered = hovered === link.link;

                        return (
                            <Link
                                key={index}
                                href={link.link}
                                onMouseEnter={() => setHovered(link.link)}
                                onMouseLeave={() => setHovered(null)}
                                className={`px-2 py-0.5 rounded-sm font-semibold font-montserrat transition duration-200 ring-black
                                    ${
                                        isHovered
                                            ? "ring-2" // show ring on hovered
                                            : !hovered && isActive
                                            ? "ring-2" // show ring on active only if nothing is hovered
                                            : ""
                                    }`}
                            >
                                {link.title}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <Link href="/contact" className="hidden md:block">
                <button className="group flex items-center gap-2 px-4 py-2 font-montserrat font-medium bg-black text-white rounded-lg hover:ring-2 ring-offset-2 ring-black cursor-pointer transition duration-200">
                    Contact Us
                    <FaArrowRight className="group-hover:-rotate-45 duration-150" />
                </button>
            </Link>

            <MobileHeader links={links} />
        </header>
    );
}
