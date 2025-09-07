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
            question: "What is AI automation and how can it benefit my business?",
            answer: "AI automation uses artificial intelligence to perform repetitive tasks, analyze data, and make decisions without human intervention. It can increase efficiency by up to 40%, reduce operational costs, minimize human errors, and free up your team to focus on strategic work that drives growth."
        },
        {
            question: "How long does it take to implement AI automation solutions?",
            answer: "Implementation timelines vary based on complexity and scope. Simple automation solutions can be deployed in 1-2 weeks, while comprehensive AI systems typically take 2-4 weeks. We follow an agile approach with regular milestones, so you'll see results throughout the process rather than waiting until the end."
        },
        {
            question: "What types of business processes can be automated with AI?",
            answer: "AI can automate a wide range of processes including customer service chatbots, document processing, data entry, inventory management, lead qualification, invoice processing, quality control, predictive maintenance, email marketing, and financial reporting. We assess your specific workflows to identify the best automation opportunities."
        },
        {
            question: "Do I need technical expertise to use AI automation tools?",
            answer: "No technical expertise is required. We design user-friendly interfaces and provide comprehensive training for your team. Our solutions include intuitive dashboards, simple controls, and 24/7 support. We also offer ongoing maintenance and updates to ensure smooth operations."
        },
        {
            question: "How do you ensure data security and privacy in AI systems?",
            answer: "We implement enterprise-grade security measures including end-to-end encryption, secure API connections, role-based access controls, and compliance with regulations like GDPR and CCPA. Your data is processed securely and never shared with third parties. We conduct regular security audits and provide detailed compliance reports."
        },
        {
            question: "What is the ROI of implementing AI automation?",
            answer: "Most clients see ROI within 6-12 months. Typical benefits include 30-50% reduction in processing time, 60-80% decrease in manual errors, 25-40% cost savings on operational tasks, and improved customer satisfaction scores. We provide detailed ROI projections and track metrics throughout implementation."
        },
        {
            question: "Can AI automation integrate with our existing software systems?",
            answer: "Yes, our AI solutions are designed to integrate seamlessly with popular business tools like CRM systems, ERP software, accounting platforms, and communication tools. We use APIs and custom connectors to ensure smooth data flow between systems without disrupting your current workflows."
        },
        {
            question: "What happens if the AI system makes a mistake?",
            answer: "We implement multiple safeguards including confidence thresholds, human-in-the-loop validation for critical decisions, audit trails, and fallback procedures. Our systems are designed to flag uncertain situations for human review, and we provide monitoring dashboards to track performance and quickly address any issues."
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
