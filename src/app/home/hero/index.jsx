'use client';

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
    const [active, setActive] = useState("start");

    const data = {
        sub_1: "Smarter. Faster. Automated",
        title: "Transform Your Business with AI Automation",
        sub_2:
        "From repetitive tasks to complex operations, we build automation systems that let you focus on what truly matters.",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {/* FIRST SECTION */}
                <div className="flex flex-col gap-8 px-6 md:px-20 py-14 md:py-20 items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden relative border border-white/10 bg-white/3 backdrop-blur-lg min-h-[80vh]">
                    <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-base md:text-lg text-center font-jetbrainsmono font-medium">{data.sub_1}</p>
                    <h1 className="text-4xl md:text-6xl text-center font-semibold text-neutral-100 font-montserrat">
                        Transform Your Business with<br/><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">AI Automation</span>
                    </h1>
                    <p className="text-neutral-100 text-base md:text-lg text-center font-jetbrainsmono font-medium">{data.sub_2}</p>

                    {/* Button group with moving background */}
                    <div
                        className="relative flex items-center justify-center gap-4 w-full max-w-[400px] rounded-full p-4"
                        onMouseLeave={() => setActive("start")}
                    >
                        {/* Moving pill */}
                        <span
                            className="hidden md:block absolute bg-neutral-100 rounded-full transition-all duration-300 ease-in-out"
                            style={{
                                width: "160px",
                                height: "48px",
                                transform:
                                    active === "start" ? "translateX(-90px)" : "translateX(72px)",
                            }}
                        ></span>

                        {/* Fixed white pill for < md */}
                        <span
                            className="hidden absolute bg-neutral-100 rounded-full"
                            style={{
                                width: "160px",
                                height: "48px",
                                transform: "translateY(0px)", // fixed behind Learn More
                            }}
                        ></span>

                        {/* Get Started (hidden below md) */}
                        <button
                            onMouseEnter={() => setActive("start")}
                            className={`hidden md:block px-6 py-3 rounded-full font-jetbrainsmono font-semibold relative z-10 transition-colors duration-300 ${
                            active === "start" ? "text-black" : "text-white"
                            }`}
                        >
                            Interested
                        </button>

                        {/* Learn More */}
                        <a
                            href="/docs"
                            onMouseEnter={() => setActive("learn")}
                            className={`flex items-center gap-2 px-6 py-3 text-nowrap max-md:text-black max-md:bg-white rounded-full font-jetbrainsmono font-semibold relative z-10 transition-colors duration-300 ${
                            active === "learn" ? "text-black" : "text-white"
                            }`}
                        >
                            Learn More <FaArrowRight />
                        </a>
                    </div>
                </div>

                {/* SECOND SECTION */}
                <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10 bg-white/3 backdrop-blur-lg relative">
                    {/* White rectangle with rounded top-right */}
                    <div className="flex items-center gap-6 p-4 rounded-tr-2xl absolute bottom-0 left-0">
                        <div className="flex items-center">
                            {data.users.map((user, index) => (
                                <div
                                    key={index}
                                    className={`size-12 rounded-full overflow-hidden border-2 border-neutral-100 ${
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
                            <p className="font-poppins text-3xl text-neutral-100">{data.percent}</p>
                            <p className="font-poppins font-medium text-xl text-neutral-100">{data.percent_text}</p>
                        </div>
                    </div>

                    {/* Extra white block */}
                    {/* <div className="aspect-video w-52 rounded-2xl absolute top-[50%] right-[50%] bg-white">
                        
                    </div> */}

                    {/* White triangle in bottom-left corner */}
                    {/* <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[80px] border-b-white border-l-[80px] border-l-transparent"></div> */}


                </div>
            </div>
        </section>
    );
}
