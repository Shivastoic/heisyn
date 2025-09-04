"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }) {
    const router = useRouter();
    const pathname = usePathname();

    const blocksRef = useRef([]);
    const textRef = useRef(null);
    const isTransitioning = useRef(false);

    // Handle route change animation
    const handleRouteChange = (url) => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        coverPage(url);
    };

    // Animate covering page
    const coverPage = (url) => {
        const tl = gsap.timeline({
            onComplete: () => router.push(url),
        });

        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left",
        })
        .fromTo(
            textRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2"
        );
    };

    // Animate revealing new page
    const revealPage = () => {
        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

        gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
                isTransitioning.current = false;
            },
        });

        gsap.to(textRef.current, {
            opacity: 0,
            y: -40,
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    // Set up click listeners with stable callback
    useEffect(() => {
        const handleClick = (e) => {
            const href = e.currentTarget.href;
            if (!href) return;

            const url = new URL(href).pathname;
            if (url !== pathname) {
                e.preventDefault();
                handleRouteChange(url);
            }
        };

        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach((link) => link.addEventListener("click", handleClick));

        return () => {
            links.forEach((link) =>
                link.removeEventListener("click", handleClick)
            );
        };
    }, [pathname]);

    // Trigger reveal when route changes
    useEffect(() => {
        if (isTransitioning.current) {
            revealPage();
        }
    }, [pathname]);

    return (
        <>
            {/* Transition overlay */}
            <div className="fixed inset-0 z-50 pointer-events-none flex">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (blocksRef.current[i] = el)}
                        className="flex-1 bg-bg-color scale-x-0 origin-left"
                    />
                ))}

                {/* Page name text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1
                        ref={textRef}
                        className="text-white text-3xl font-bold opacity-0"
                    >
                        {pathname.replace("/", "") || "Home"}
                    </h1>
                </div>
            </div>

            {/* Actual page content */}
            {children}
        </>
    );
}
