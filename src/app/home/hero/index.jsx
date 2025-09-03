'use client';

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Aurora from '@/app/components/arora/index';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import OrbitingSkills from "@/app/components/orbit";
import Container from "@/app/components/container";
import FlowButton from "@/app/components/flow-button";

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

    const border = useMotionTemplate`2px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            className="w-full px-4 pt-12 pb-16 md:pt-26 md:pb-20 relative">
            <div className="hidden md:block absolute bottom-0 left-0 w-full h-full -z-1 overflow-hidden">
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            
            <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* FIRST SECTION */}
                <div className="flex flex-col gap-6 lg:gap-10 px-6 md:px-20 pt-14 pb-10 md:py-16 items-center overflow-hidden relative">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-base md:text-xl text-center font-jetbrainsmono font-medium">{data.sub_1}</p>
                        <h1 className="text-4xl md:text-6xl text-center font-semibold text-neutral-100 font-montserrat">
                            Transform Your Business with<br/><span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">AI Automation</span>
                        </h1>
                    </div>
                    <p className="text-neutral-100 text-base md:text-lg text-center font-jetbrainsmono font-medium max-w-[500px]">{data.sub_2}</p>
                    <Link href={"/services"}>
                        <FlowButton text="Get Started" />
                    </Link>
                    
                </div>

                {/* SECOND SECTION */}
                <div className="flex flex-col items-center justify-center gap-8 pb-4 overflow-hidden ">
                    <div className="">
                        <OrbitingSkills />
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
            </Container>
        </motion.section>
    );
}
