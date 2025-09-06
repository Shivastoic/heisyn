import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PillNavbar({ links }) {
    const pathname = usePathname();
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });
    const [activePosition, setActivePosition] = useState({
        left: 0,
        width: 0,
        opacity: 1,
    });

    // Find the active link index
    const activeIndex = links.findIndex(link => link.link === pathname);

    // Set active position on mount and route change
    useEffect(() => {
        if (activeIndex !== -1) {
            // Small delay to ensure DOM is ready
            const timer = setTimeout(() => {
                const activeElement = document.querySelector(`[data-index="${activeIndex}"]`);
                if (activeElement) {
                    const { width } = activeElement.getBoundingClientRect();
                    setActivePosition({
                        left: activeElement.offsetLeft,
                        width,
                        opacity: 1,
                    });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [activeIndex, pathname]);

    return (
        <nav
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="hidden relative md:flex w-fit rounded-full"
        >
            {links.map((item, index) => (
                <Link href={item.link} key={index}>
                    <Tab 
                        setPosition={setPosition} 
                        isActive={index === activeIndex}
                        dataIndex={index}
                    >
                        {item.title}
                    </Tab>
                </Link>
            ))}

            {/* Active state cursor - always visible */}
            <motion.li
                animate={activePosition}
                className="absolute z-0 rounded-full bg-white h-[34px] list-none"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />

            {/* Hover cursor - only visible on hover */}
            <Cursor position={position} />
        </nav>
    );
}

const Tab = ({ children, setPosition, isActive, dataIndex }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            data-index={dataIndex}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className={`relative z-10 block cursor-pointer text-[15px] font font-poppins px-4 py-1.5 ${
                isActive 
                    ? "text-black font-semibold" // Active text color
                    : "text-white mix-blend-difference" // Inactive text color
            }`}
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 rounded-full bg-white h-[34px] list-none"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
    );
};
