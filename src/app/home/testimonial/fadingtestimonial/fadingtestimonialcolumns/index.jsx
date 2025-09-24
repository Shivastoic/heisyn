"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const TestimonialsColumn = (props) => {
	return (
		<div className="">
			<motion.div
				animate={{
					translateY: "-50%",
				}}
				transition={{
					duration: props.duration || 10,
					repeat: Infinity,
					ease: "linear",
					repeatType: "loop",
				}}
				className="flex flex-col gap-6 pb-6 bg-background"
			>
				{[
					...new Array(2).fill(0).map((_, index) => (
						<React.Fragment key={index}>
							{props.testimonials.map(({ text, image, name, role }, i) => (
								<div
									className="flex flex-col gap-4 justify-between p-8 rounded-3xl border border-white/7 bg-white/5 shadow-lg shadow-primary/10 max-w-lg aspect-[5/3]"
									key={i}
								>
									<p className="text-neutral-400 font-poppins text-sm md:text-base">
										{text}
									</p>
									<div className="flex items-center gap-2 mt-5">
										<img
											width={40}
											height={40}
											src={image}
											alt={name}
											className="h-10 w-10 rounded-full"
										/>
										<div className="flex flex-col">
											<p className="text-neutral-300 font-medium tracking-tight leading-5 font-montserrat">
												{name}
											</p>
											<p className="text-neutral-100 leading-5 opacity-60 tracking-tight font-montserrat text-sm">
												{role}
											</p>
										</div>
									</div>
								</div>
							))}
						</React.Fragment>
					)),
				]}
			</motion.div>
		</div>
	);
};
