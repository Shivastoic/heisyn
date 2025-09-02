"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TestimonialCard from "@/app/home/testimonial/testimonialcard";

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
                title: "Excellent Service!",
                content: "I had a fantastic experience with this company. Their service was top-notch and exceeded my expectations.",
            },
        },
        { 
            id: 2, 
            cardData: {
                title: "Highly Recommend",
                content: "The team was professional and attentive to my needs. I would definitely recommend them to others.",
            },
        },
        {  
            id: 3, 
            cardData: {
                title: "Great Quality",
                content: "The quality of their work is outstanding. I am extremely satisfied with the results and will be returning for future projects.",
            },
        },
        {  
            id: 4, 
            cardData: {
                title: "Fantastic Support",
                content: "Their customer support was prompt and helpful. They addressed all my concerns and made sure I was happy with the service.",
            },
        },
        {  
            id: 5, 
            cardData: {
                title: "Value for Money",
                content: "I found their pricing to be very reasonable for the quality of service provided. I got great value for my money.",
            },
        },
        {  
            id: 6, 
            cardData: {
                title: "User-Friendly Experience",
                content: "The entire process was smooth and user-friendly. I appreciated how easy it was to work with them from start to finish.",
            },
        },
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

    return (
        <div ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen flex flex-col gap-10 pt-14 md:pt-20 items-center overflow-hidden">
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
