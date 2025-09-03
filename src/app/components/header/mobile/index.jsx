"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import FlowButton from "@/app/components/flow-button";

export default function MobileHeader({ links }) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="md:hidden">
            {/* Burger Menu Icon */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-accent z-60 relative"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Background Overlay (always rendered for smooth fade) */}
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ease-in-out 
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setMenuOpen(false)}
            ></div>

            {/* Slide-in Menu */}
            <div
                ref={menuRef}
                className={`flex flex-col gap-8 py-20 fixed top-0 right-0 h-full min-w-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Nav Links */}
                <nav className="flex flex-col gap-4 px-6">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            onClick={() => setMenuOpen(false)}
                            className={`px-2 py-1 rounded-sm font-semibold font-montserrat ring-white transition duration-200 text-white
                                ${pathname === link.link ? "ring-2" : "hover:ring-2"}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>

                {/* Contact Us Button */}
                <div className="px-6">
                    <Link href="/contact" onClick={() => setMenuOpen(false)}>
                        <FlowButton text="Contact Us" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
