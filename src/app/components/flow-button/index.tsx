'use client';
import { FaArrowRight } from "react-icons/fa";

export default function FlowButton({ text = "Modern Button" }: { text?: string }) {
    return (
        <div className="relative p-[2px] rounded-full w-fit bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-pink-500/60 group-hover:rounded-full transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:animate-none">
            {/* Animated gradient border background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-pink-500/60 opacity-100 animate-spin-slow group-hover:rounded-full transition-all duration-[600ms]"></div>
            
            {/* Static gradient for smoother transition */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/60 via-red-500/60 to-blue-500/60 opacity-0 animate-pulse group-hover:rounded-full transition-all duration-[600ms]"></div>
            
            <button className="group relative flex items-center gap-1 overflow-hidden rounded-full bg-bg-color/90 py-2 px-8 md:py-3 text-sm font-poppins font-medium text-neutral-200 cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-black hover:rounded-full active:scale-[0.95] w-full">
                {/* Left arrow (arr-2) */}
                <FaArrowRight 
                    className="absolute w-4 h-4 left-[-25%] z-[9] group-hover:left-4 transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
                />

                {/* Text */}
                <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                    {text}
                </span>

                {/* Circle */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-100 rounded-full opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

                {/* Right arrow (arr-1) */}
                <FaArrowRight 
                    className="absolute w-4 h-4 right-4 z-[9] group-hover:right-[-25%] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
                />
            </button>
        </div>
    );
}
