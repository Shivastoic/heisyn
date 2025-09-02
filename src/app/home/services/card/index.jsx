"use client";

import { useEffect, useState } from "react";
import GlowCard from "@/app/components/glowcard";

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsDesktop(window.innerWidth >= 768); // md breakpoint
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return isDesktop;
}

export default function ServiceCard({ children, className }) {
    const isDesktop = useIsDesktop();

    return isDesktop ? (
        <GlowCard customSize className={className}>
            {children}
        </GlowCard>
    ) : (
        <div className={`${className} rounded-xl p-4`}>
            {children}
        </div>
    );
}
