'use client';

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import ShuffleGrid from "@/app/home/hero/suffle/index";

import Image from "next/image";
import Link from "next/link";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

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

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(185% 140% at 50% 25%, #020617 40%, ${color})`;
    const border = useMotionTemplate`2px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="w-full px-4 pt-12 pb-16 md:pt-26 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {/* FIRST SECTION */}
                <div className="flex flex-col gap-8 px-6 md:px-20 py-14 md:py-20 items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden relative md:min-h-[80vh]">
                    <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-base md:text-lg text-center font-jetbrainsmono font-medium">{data.sub_1}</p>
                    <h1 className="text-4xl md:text-6xl text-center font-semibold text-neutral-100 font-montserrat">
                        Transform Your Business with<br/><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">AI Automation</span>
                    </h1>
                    <p className="text-neutral-100 text-base md:text-lg text-center font-jetbrainsmono font-medium max-w-[500px]">{data.sub_2}</p>

                    
                    <Link href={"/services"}>
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
                            className="cursor-pointer group relative flex w-fit items-center gap-2 rounded-full bg-gray-950/10 px-6 py-2 text-gray-50 font-semibold font-montserrat transition-colors hover:bg-gray-950/50"
                            >
                            Get Started
                            <FaArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                        </motion.button>
                    </Link>
                    
                </div>

                {/* SECOND SECTION */}
                <div className="flex flex-col gap-8 p-4 lg:p-6 rounded-2xl overflow-hidden border border-white/5 bg-white/3 backdrop-blur-md">
                    <div className="">
                        <ShuffleGrid />
                    </div>

                    {/* White rectangle with rounded top-right */}
                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="flex items-center">
                            {data.users.map((user, index) => (
                                <div
                                    key={index}
                                    className={`size-10 md:size-12 rounded-full overflow-hidden border-2 border-neutral-100 ${
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
                            <p className="font-poppins font-medium text-xs md:text-xl text-neutral-100">{data.percent_text}</p>
                        </div>
                    </div>


                </div>
            </div>
        </motion.section>
    );
}
