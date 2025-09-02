"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import MobileHeader from "./mobile";

import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
    AnimatePresence,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Header() {
    const pathname = usePathname();
    const [hovered, setHovered] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const dropdownTimeoutRef = useRef(null);

    // HEADER DATA
    const headerData = {
        logo: "/logos/logo-white.png",
        alt: "Company Logo",
    };

    // HEADER LINKS WITH DROPDOWNS
    const links = [
        { link: "/", title: "Home" },
        { 
            link: "/services", 
            title: "Services",
            hasDropdown: true,
            dropdownItems: [
                { link: "/services/web-development", title: "Web Development" },
                { link: "/services/mobile-apps", title: "Mobile Apps" },
                { link: "/services/ui-ux-design", title: "UI/UX Design" },
                { link: "/services/digital-marketing", title: "Digital Marketing" },
                { link: "/services/e-commerce", title: "E-commerce Solutions" },
                { link: "/services/consulting", title: "IT Consulting" },
            ]
        },
        { 
            link: "/work", 
            title: "Our Work",
            hasDropdown: true,
            dropdownItems: [
                { link: "/work/portfolio", title: "Portfolio" },
                { link: "/work/case-studies", title: "Case Studies" },
                { link: "/work/testimonials", title: "Client Testimonials" },
                { link: "/work/success-stories", title: "Success Stories" },
                { link: "/work/industries", title: "Industries We Serve" },
            ]
        },
        { link: "/about", title: "About Us" },
        { 
            link: "/career", 
            title: "Career",
            hasDropdown: true,
            dropdownItems: [
                { link: "/career/openings", title: "Job Openings" },
                { link: "/career/internships", title: "Internships" },
                { link: "/career/culture", title: "Company Culture" },
                { link: "/career/benefits", title: "Benefits" },
                { link: "/career/apply", title: "Apply Now" },
                { link: "/career/growth", title: "Career Growth" },
            ]
        },
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
                setActiveDropdown(null); // Close dropdown when scrolling down
            } else {
                // scrolling up
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);

            // Logic to change background color
            if (currentScrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleMouseEnter = (link) => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setHovered(link.link);
        if (link.hasDropdown) {
            setActiveDropdown(link.link);
        }
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setHovered(null);
            setActiveDropdown(null);
        }, 150);
    };

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
    };

    const handleDropdownMouseLeave = () => {
        setHovered(null);
        setActiveDropdown(null);
    };

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: showHeader ? 0 : -100 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-4 transition-colors duration-300 ${isScrolled ? "bg-bg-color" : "bg-transparent"}`}
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
                <nav className="hidden md:flex items-center gap-4 relative">
                    {links.map((link, index) => {
                        const isActive = pathname === link.link;
                        const isHovered = hovered === link.link;
                        const isDropdownActive = activeDropdown === link.link;

                        return (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(link)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    href={link.link}
                                    className={`px-2 py-0.5 rounded-md font-medium font-poppins transition duration-200 ring-neutral-100 text-neutral-100 text-sm flex items-center gap-1
                                        ${
                                            isHovered || isDropdownActive
                                                ? "ring-2"
                                                : !hovered && isActive
                                                ? "ring-2"
                                                : ""
                                        }`}
                                >
                                    {link.title}
                                    {link.hasDropdown && (
                                        <motion.div
                                            animate={{ 
                                                rotate: isDropdownActive ? 180 : 0 
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FaChevronDown className="text-xs" />
                                        </motion.div>
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.hasDropdown && (
                                    <AnimatePresence>
                                        {isDropdownActive && (
                                            <motion.div
                                                initial={{ 
                                                    opacity: 0, 
                                                    y: -10,
                                                    scale: 0.95
                                                }}
                                                animate={{ 
                                                    opacity: 1, 
                                                    y: 0,
                                                    scale: 1
                                                }}
                                                exit={{ 
                                                    opacity: 0, 
                                                    y: -10,
                                                    scale: 0.95
                                                }}
                                                transition={{ 
                                                    duration: 0.2,
                                                    ease: "easeOut"
                                                }}
                                                className="absolute top-full left-0 mt-4 w-64 bg-bg-color/40 backdrop-blur-lg rounded-lg shadow-2xl border border-gray-700/50 overflow-hidden"
                                                onMouseEnter={handleDropdownMouseEnter}
                                                onMouseLeave={handleDropdownMouseLeave}
                                            >
                                                <div className="py-2">
                                                    {link.dropdownItems.map((item, itemIndex) => (
                                                        <motion.div
                                                            key={itemIndex}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ 
                                                                delay: itemIndex * 0.05,
                                                                duration: 0.2
                                                            }}
                                                        >
                                                            <Link
                                                                href={item.link}
                                                                className="block px-4 py-2 text-neutral-200 hover:bg-gray-800/50 hover:text-white transition-colors duration-150 text-sm font-medium font-poppins"
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        );
                    })}
                </nav>
                <Link href={"/contact"} className="hidden md:block">
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
                        className="cursor-pointer group relative flex items-center gap-2 rounded-full bg-bg-color/50 px-6 py-2 text-gray-50 text-sm font-medium font-poppins transition-colors hover:bg-gray-950/50"
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
