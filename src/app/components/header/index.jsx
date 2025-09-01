"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MobileHeader from "./mobile";

import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Header() {
    const pathname = usePathname();
    const [hovered, setHovered] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false); // New state to track scroll

    // HEADER DATA
    const headerData = {
        logo: "/logos/logo-white.png",
        alt: "Company Logo",
    };

    // HEADER LINKS
    const links = [
        { link: "/", title: "Home" },
        { link: "/services", title: "Services" },
        { link: "/work", title: "Our Work" },
        { link: "/about", title: "About Us" },
        { link: "/career", title: "Career" },
    ];

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const border = useMotionTemplate`2px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    // scroll hide / show and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Logic to show/hide the header
            if (currentScrollY > lastScrollY) {
                // scrolling down
                setShowHeader(false);
            } else {
                // scrolling up
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);

            // Logic to change background color
            if (currentScrollY > 10) { // You can adjust this value
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: showHeader ? 0 : -100 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-6 transition-colors duration-300 ${isScrolled ? "bg-bg-color" : "bg-transparent"}`}
        >
            <Link href="/">
                <Image
                    src={headerData.logo}
                    alt={headerData.alt}
                    width={800}
                    height={300}
                    className="w-24 md:w-36"
                />
            </Link>
            <div className="flex items-center gap-10">
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
                                className={`px-2 py-0.5 rounded-md font-semibold font-poppins transition duration-200 ring-neutral-100 text-neutral-100
                                    ${
                                        isHovered
                                            ? "ring-2"
                                            : !hovered && isActive
                                            ? "ring-2"
                                            : ""
                                    }`}
                            >
                                {link.title}
                            </Link>
                        );
                    })}
                </nav>
                <Link href={"/services"} className="hidden md:block">
                    <motion.button
                        style={{
                            border,
                            boxShadow,
                        }}
                        whileHover={{
                            scale: 1.015,
                        }}
                        whileTap={{
                            scale: 0.985,
                        }}
                        className="cursor-pointer group relative flex items-center gap-2 rounded-full bg-gray-950/10 px-6 py-2 text-gray-50 font-semibold font-montserrat transition-colors hover:bg-gray-950/50"
                    >
                        Contact Us
                        <FaArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                    </motion.button>
                </Link>
            </div>

            <MobileHeader links={links} />
        </motion.header>
    );
}
