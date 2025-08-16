'use client';

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
    const [active, setActive] = useState("start");

    const data = {
        sub_1: "Deliver on point answers with AI Automation",
        title: "Smart & Advance AI Agents and Web Solutions",
        sub_2:
        "Get the best of ChatGPT, Claude and Gemini with our AI Agents, creating workflows that automate your tasks and deliver on point answers.",
        first_bg: "/images/hero-bg-one.png",
        second_bg: "/images/hero-bg-two.png",
    };

    return (
        <section className="w-full px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white">
                {/* FIRST SECTION */}
                <div className="flex flex-col gap-8 px-6 md:px-20 items-center justify-center rounded-3xl overflow-hidden bg-[url('/images/hero-bg-one.png')] bg-cover bg-center min-h-[85vh] relative">
                    <p className="text-white text-center font-montserrat">{data.sub_1}</p>
                    <h1 className="text-4xl md:text-6xl text-center font-semibold text-white font-montserrat">
                        {data.title}
                    </h1>
                    <p className="text-white text-center font-montserrat">{data.sub_2}</p>

                    {/* Button group with moving background */}
                    <div
                        className="relative flex items-center justify-center gap-4 w-full max-w-[400px] rounded-full p-1"
                        onMouseLeave={() => setActive("start")}
                    >
                        {/* Moving white pill */}
                        <span
                            className="absolute bg-white rounded-full transition-all duration-300 ease-in-out"
                            style={{
                                width: active === "start" ? "160px" : "160px",
                                height: "48px",
                                transform:
                                active === "start"
                                    ? "translateX(-90px)"
                                    : "translateX(72px)",
                        }}
                        ></span>

                        {/* Get Started */}
                        <button
                            onMouseEnter={() => setActive("start")}
                            className={`px-6 py-3 rounded-full font-montserrat font-semibold relative z-10 transition-colors duration-300 ${
                                active === "start" ? "text-black" : "text-white"
                        }`}
                        >
                            Interested
                        </button>

                        {/* Learn More */}
                        <a
                            href="/docs"
                            onMouseEnter={() => setActive("learn")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-montserrat font-semibold relative z-10 transition-colors duration-300 ${
                                active === "learn" ? "text-black" : "text-white"
                        }`}
                        >
                            Learn More <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* SECOND SECTION */}
                <div className="rounded-2xl overflow-hidden bg-[url('/images/hero-bg-two.png')] bg-cover bg-center relative">
                    {/* White rectangle with rounded top-right */}
                    <div className="w-72 h-20 rounded-tr-2xl absolute bottom-0 left-0 bg-white"></div>

                    {/* Extra white block */}
                    <div className="w-72 h-20 rounded-2xl absolute top-[50%] right-[50%] bg-white"></div>

                    {/* White triangle in bottom-left corner */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[80px] border-b-white border-l-[80px] border-l-transparent"></div>


                </div>
            </div>
        </section>
    );
}
