"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TestimonialCard from "@/app/home/testimonial/testimonialcard";
import GridBG from "@/app/components/gridbg";

export default function TestimonialCarousel() {

    // DATA
    const data = {
        title: "What Our Clients Say",
        subtitle: "Testimonials from Satisfied Customers",
    }

    const cards = [
        {
            id: 1,
            cardData: {
                name: "Amit Sharma",
                designation: "Founder, TechNova Solutions",
                testimonial: "Heisyn transformed our customer support with their AI Customer Care Agent. Response times dropped drastically, and our customers are happier than ever.",
                image: "/images/testimonials/user-1.jpg"
            }
        },
        {
            id: 2,
            cardData: {
                name: "Priya Verma",
                designation: "Marketing Head, BrightWave Media",
                testimonial: "The AI Social Media Marketing Agent boosted our engagement by 3x. Campaigns are now data-driven, automated, and deliver consistent results.",
                image: "/images/testimonials/user-2.jpg"
            }
        },
        {
            id: 3,
            cardData: {
                name: "Rahul Mehta",
                designation: "CEO, GreenMart",
                testimonial: "Their AI Sales Agent helped us close deals faster than ever. It feels like having a 24/7 sales team working tirelessly in the background.",
                image: "/images/testimonials/user-3.jpg"
            }
        },
        {
            id: 4,
            cardData: {
                name: "Sneha Kapoor",
                designation: "Operations Manager, FinEdge",
                testimonial: "Lead generation used to be a struggle, but Heisyn's AI Lead Gen Agent changed everything. Our pipeline is always full of qualified prospects now.",
                image: "/images/testimonials/user-1.jpg"
            }
        },
        {
            id: 5,
            cardData: {
                name: "Vikram Singh",
                designation: "Director, Horizon Travels",
                testimonial: "Automation from Heisyn helped us streamline bookings and customer inquiries. It saved us countless hours and improved overall efficiency.",
                image: "/images/testimonials/user-2.jpg"
            }
        },
        {
            id: 6,
            cardData: {
                name: "Neha Joshi",
                designation: "Entrepreneur, StyleNest",
                testimonial: "Thanks to Heisyn's AI solutions, I can now focus on growing my business while AI handles repetitive customer interactions seamlessly.",
                image: "/images/testimonials/user-3.jpg"
            }
        }
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

    return (
        <div ref={targetRef} className="relative h-[300vh]">
            <GridBG />
            
            <div className="sticky top-0 h-screen flex flex-col gap-10 pt-14 md:pt-20 items-center overflow-hidden z-10">
                {/* Header Section - Fixed at top */}
                <div className="flex flex-col items-center justify-center gap-2 flex-shrink-0">
                    <p className="text-base md:text-xl text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        {data.subtitle}
                    </p>
                    <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                        {data.title}
                    </h2>
                </div>
                
                {/* Carousel Section - Takes remaining space and centers content */}
                <div className="flex-1 flex items-center w-full overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-6">
                        {
                            cards.map((card) => {
                                return (
                                    <TestimonialCard 
                                        key={card.id}
                                        cardData={card.cardData}
                                    />
                                )
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
