'use client';

import { TestimonialsColumn } from "@/app/home/testimonial/fadingtestimonial/fadingtestimonialcolumns";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Before Heisyn, our support team was drowning in repetitive queries. We'd spend entire days just answering the same questions. Now our AI handles 80% of inquiries instantly, and our response time dropped from hours to minutes.",
        image: "https://images.unsplash.com/photo-1494790108755-2616c27cd7bb?w=150&h=150&fit=crop&crop=face",
        name: "Ananya Sharma",
        role: "Customer Support Manager",
    },
    {
        text: "Lead qualification used to eat up my entire morning. I'd manually sort through dozens of prospects, most of them unqualified. With automated lead scoring, I now focus only on hot prospects and close deals 45% faster.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        name: "Michael Johnson",
        role: "Senior Sales Executive",
    },
    {
        text: "Social media scheduling was a nightmare — posting manually, missing optimal times, zero analytics. Our AI assistant now schedules posts when our audience is most active and our engagement rates tripled in two months.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        name: "Fatima Khan",
        role: "Digital Marketing Specialist",
    },
    {
        text: "We used to spend weeks cold-calling prospects with terrible conversion rates. The lead generation automation now delivers 50+ qualified leads weekly, and our conversion rate jumped from 2% to 12%.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        name: "Arjun Patel",
        role: "Head of Business Development",
    },
    {
        text: "Before automation, our team was buried in manual data entry and reporting. We'd spend Fridays just creating weekly reports. Now everything updates in real-time, and we saved 25 hours per week across the department.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        name: "Neha Verma",
        role: "Operations Coordinator",
    },
    {
        text: "Data analysis used to take days — pulling reports from different systems, creating dashboards manually. Our AI now generates actionable insights in minutes, and we make decisions 60% faster than before.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        name: "James Wilson",
        role: "Senior Data Analyst",
    },
    {
        text: "Project coordination was chaos — endless email threads, missed deadlines, manual status updates. With workflow automation, our project delivery improved by 40% and team stress levels dropped significantly.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
        name: "Ishita Joshi",
        role: "Product Manager",
    },
    {
        text: "Our helpdesk was overwhelmed — tickets piling up, frustrated users, overtime every week. The AI support bot now resolves 75% of issues instantly, and our team can focus on complex technical problems.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
        name: "Siddharth Rao",
        role: "IT Support Specialist",
    },
    {
        text: "Generic campaigns were killing our engagement — same message to everyone, poor open rates, wasted ad spend. AI personalization now tailors every campaign, and our click-through rates increased by 180%.",
        image: "https://images.unsplash.com/photo-1494790108755-2616c27cd7bb?w=150&h=150&fit=crop&crop=face",
        name: "Sarah Martinez",
        role: "Head of Growth Marketing",
    },
];



// DATA
const data = {
	title: "What Our Clients Say",
	subtitle: "Testimonials from Satisfied Customers",
}

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const FadingTestimonials = () => {
	return (
		<section className="py-20 relative">
			<div className="flex flex-col gap-16 md:gap-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
				>
					<div className="flex flex-col items-center justify-center gap-2">
                        <p className="text-sm lg:text-base md:text-lg text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                            {data.title}
                        </h2>
                    </div>
				</motion.div>

				<div className="flex flex-col lg:flex-row justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={15} />
					<TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
					<TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
				</div>
			</div>
		</section>
	);
};

export default FadingTestimonials;
