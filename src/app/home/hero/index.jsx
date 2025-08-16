'use client';

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    const [active, setActive] = useState("start");

    const data = {
        sub_1: "Deliver on point answers with AI Automation",
        title: "Smart & Advance AI Agents and Web Solutions",
        sub_2:
        "Get the best of ChatGPT, Claude and Gemini with our AI Agents, creating workflows that automate your tasks and deliver Solutions.",
        first_bg: "/images/hero-bg-3.jpg",
        second_bg: "/images/hero-bg-2.png",
        web: "/images/web.jpg",
        users: [
            {
                src: "/images/user-3.jpg",
                alt: "User 3",
            },
            {
                src: "/images/user-1.jpg",
                alt: "User 1",
            },
            {
                src: "/images/user-2.jpg",
                alt: "User 2",
            },
        ],
        percent: "100%",
        percent_text: "Clients Satisfaction",
    };

    return (
        <section className="w-full px-4 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white">
                {/* FIRST SECTION */}
                <div className="flex flex-col gap-8 px-6 md:px-20 items-center justify-center rounded-3xl overflow-hidden bg-[url('/images/hero-bg-3.jpg')] bg-cover bg-center min-h-[85vh] relative">
                    <p className="text-white text-base md:text-lg text-center font-jetbrainsmono font-medium">{data.sub_1}</p>
                    <h1 className="text-4xl md:text-6xl text-center font-semibold text-white font-montserrat">
                        {data.title}
                    </h1>
                    <p className="text-white text-base md:text-lg text-center font-jetbrainsmono font-medium">{data.sub_2}</p>

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
                            className={`px-6 py-3 rounded-full font-jetbrainsmono font-semibold relative z-10 transition-colors duration-300 ${
                                active === "start" ? "text-black" : "text-white"
                        }`}
                        >
                            Interested
                        </button>

                        {/* Learn More */}
                        <a
                            href="/docs"
                            onMouseEnter={() => setActive("learn")}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-jetbrainsmono font-semibold relative z-10 transition-colors duration-300 ${
                                active === "learn" ? "text-black" : "text-white"
                        }`}
                        >
                            Learn More <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* SECOND SECTION */}
                <div className="hidden md:block rounded-2xl overflow-hidden bg-[url('/images/hero-bg-4.jpg')] bg-cover bg-center relative">
                    {/* White rectangle with rounded top-right */}
                    <div className="flex items-center gap-6 p-4 rounded-tr-2xl absolute bottom-0 left-0 bg-white">
                        <div className="flex items-center">
                            {data.users.map((user, index) => (
                                <div
                                    key={index}
                                    className={`size-12 rounded-full overflow-hidden border-2 border-white ${
                                        index > 0 ? "-ml-4" : ""
                                    }`}
                                >
                                <Image
                                    src={user.src}
                                    alt={user.alt}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-poppins text-3xl">{data.percent}</p>
                            <p className="font-poppins font-medium text-xl">{data.percent_text}</p>
                        </div>
                    </div>

                    {/* Extra white block */}
                    <div className="aspect-video w-52 rounded-2xl absolute top-[50%] right-[50%] bg-white">
                        
                    </div>

                    {/* White triangle in bottom-left corner */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[80px] border-b-white border-l-[80px] border-l-transparent"></div>


                </div>
            </div>
        </section>
    );
}
