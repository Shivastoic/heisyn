'use client';

import { TestimonialsColumn } from "@/app/home/testimonial/fadingtestimonial/fadingtestimonialcolumns";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "The AI customer care agent has transformed how we handle queries. Our response time is down by 60%, and customer satisfaction has never been higher.",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
        name: "Ananya Sharma",
        role: "Customer Success Head",
    },
    {
        text: "The AI sales agent boosted our lead conversions by automating initial outreach and qualifying prospects. Our sales team can now focus on closing deals.",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        name: "Rohit Mehta",
        role: "Sales Director",
    },
    {
        text: "Managing social media was always time-consuming, but the AI marketing assistant now schedules posts, analyzes engagement, and even suggests winning campaigns.",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        name: "Fatima Khan",
        role: "Digital Marketing Lead",
    },
    {
        text: "The lead generation automation saved us weeks of manual work. We now get high-quality leads daily without lifting a finger.",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        name: "Arjun Patel",
        role: "Growth Manager",
    },
    {
        text: "Integrating AI workflows into our operations improved productivity across departments. From chatbots to reporting, everything runs smoother.",
        image: "https://randomuser.me/api/portraits/women/14.jpg",
        name: "Neha Verma",
        role: "Operations Manager",
    },
    {
        text: "The AI-driven analytics give us actionable insights in real time. We make faster, smarter decisions that directly improve our bottom line.",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        name: "Karan Singh",
        role: "Data Analyst",
    },
    {
        text: "The automation suite reduced manual errors and streamlined our workflow. It's like adding an extra team without the overhead.",
        image: "https://randomuser.me/api/portraits/women/16.jpg",
        name: "Ishita Joshi",
        role: "Project Manager",
    },
    {
        text: "Onboarding the AI support bot was seamless. It now resolves over 70% of tickets instantly, allowing our human agents to focus on complex cases.",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        name: "Siddharth Rao",
        role: "IT Support Lead",
    },
    {
        text: "The personalization features are incredible. Our AI marketing agent tailors campaigns for each customer, and engagement rates have doubled.",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
        name: "Riya Malhotra",
        role: "Marketing Director",
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
