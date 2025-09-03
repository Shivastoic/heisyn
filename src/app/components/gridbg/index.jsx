"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function GridBG() { 

    // Generate consistent particle positions
    const [particlePositions, setParticlePositions] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Generate consistent positions only on client
        const positions = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setParticlePositions(positions);
    }, []);

    return (

        <div className="absolute inset-0 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0"></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>
            
            {/* Floating Orbs */}
            <motion.div 
                className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>
            
            <motion.div 
                className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl"
                animate={{
                    y: [0, 15, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>
            
            <motion.div 
                className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500/6 rounded-full blur-3xl"
                animate={{
                    y: [0, -25, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            ></motion.div>
            
            {/* Subtle Particles - Only render on client */}
            {isClient && (
                <div className="absolute inset-0">
                    {particlePositions.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-white/30 rounded-full"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            )}
        </div>

    )
}
