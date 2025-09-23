'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import GridBG from '@/app/components/gridbg';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const data = {
        title: "Frequently Asked Questions",
        subtitle: "Quick answers to your AI automation queries",
    }

    const faqData = [
        {
            question: "What is AI automation, and how can it benefit my business?",
            answer: "Most businesses lose hours every week to repetitive tasks that don’t drive revenue. AI automation eliminates that waste by handling routine work, reducing costs, and freeing your team to focus on growth. Instead of asking “How can we do more with less?” — automation makes it possible."
        },
        {
            question: "How long does it take to implement AI automation solutions?",
            answer: "It depends on the complexity of your workflows. Simple automations can go live in just 1–2 weeks, while more advanced systems may take 2–4. But here’s the key: we deliver in stages. That means you’ll see quick wins early, instead of waiting months for results."
        },
        {
            question: "What types of business processes can be automated with AI?",
            answer: "Think about where your team spends the most time on repetitive work. That could be customer support, data entry, invoicing, or lead qualification. AI can automate all of these — and more — so your people spend less time clicking buttons and more time growing the business."
        },
        {
            question: "Do I need technical expertise to use AI automation tools?",
            answer: "No. Our systems are designed for non-technical teams. With intuitive dashboards and step-by-step onboarding, your staff won’t need to “learn AI” — they’ll just use it. And we provide ongoing support so you’re never left guessing."
        },
        {
            question: "How do you ensure data security and privacy in AI systems?",
            answer: "We know your data is your business. That’s why we apply enterprise-grade encryption, GDPR/CCPA compliance, and regular audits. Put simply: your data is always protected and never shared. You stay in control, always."
        },
        {
            question: "What is the ROI of implementing AI automation?",
            answer: "Most of our clients recover their investment within 6–12 months. The biggest gains come from faster processing, fewer errors, lower costs, and happier customers. The real ROI? Your team gets time back to focus on revenue-driving activities instead of repetitive work."
        },
        {
            question: "Can AI automation integrate with our existing software systems?",
            answer: "Yes. We design automations to work with your current stack — whether that’s CRM, ERP, finance, or communication tools. Our APIs and connectors ensure a smooth flow of data, without forcing you to rip and replace what you already use."
        },
        {
            question: "What happens if the AI system makes a mistake?",
            answer: "No system is perfect — that’s why ours are built with safeguards. For critical tasks, we set thresholds and include “human-in-the-loop” checks. If the AI is uncertain, it flags the task for review. You’ll always have visibility and control."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative">
                <GridBG />
                <div className='py-16 max-w-[800px] mx-auto space-y-16'>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-base md:text-lg text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                            {data.title}
                        </h2>
                    </div>
                    
                    <div className="divide-y divide-white/15">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                className={`overflow-hidden ${openIndex === index ? 'bg-white/5 backdrop-blur-md rounded-lg shadow-sm' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.button
                                    className={`w-full px-6 py-6 flex justify-between items-center ${openIndex === index ? '' : 'hover:bg-white/5'}  rounded-lg cursor-pointer`}
                                    onClick={() => toggleAccordion(index)}
                                    whileTap={{ scale: 0.995 }}
                                >
                                    <h3 className="text-base md:text-lg font-montserrat font-medium text-neutral-100">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <IoIosArrowDown className="size-5 text-neutral-100 flex-shrink-0" />
                                    </motion.div>
                                </motion.button>
                                
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6">
                                                <motion.p
                                                    initial={{ y: -10 }}
                                                    animate={{ y: 0 }}
                                                    exit={{ y: -10 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="text-neutral-200/70 leading-relaxed font-poppins text-sm md:text-base"
                                                >
                                                    {faq.answer}
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
        </section>
    );
};
