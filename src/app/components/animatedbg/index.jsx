'use client';

import { useEffect } from "react";
import { motion, useMotionValue, animate, useMotionTemplate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function AnimatedBackground() {
  const color = useMotionValue(COLORS_TOP[0]);
  
  // Motion values for animated curve parameters
  const gradientSize = useMotionValue(180);
  const gradientEccentricity = useMotionValue(140);
  const positionX = useMotionValue(40);
  const positionY = useMotionValue(25);
  const gradientStop = useMotionValue(45);

  useEffect(() => {
    // Animate the color
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Animate gradient size with a subtle wavy motion
    animate(gradientSize, [180, 200, 170, 190, 180], {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Animate gradient eccentricity for gentle shape changes
    animate(gradientEccentricity, [140, 160, 130, 150, 140], {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Animate horizontal position with smaller range
    animate(positionX, [40, 50, 30, 45, 40], {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Animate vertical position with smaller range
    animate(positionY, [25, 35, 20, 30, 25], {
      ease: "easeInOut",
      duration: 18,
      repeat: Infinity,
      repeatType: "mirror",
    });

    // Animate the gradient stop point subtly
    animate(gradientStop, [45, 50, 40, 47, 45], {
      ease: "easeInOut",
      duration: 9,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(${gradientSize}% ${gradientEccentricity}% at ${positionX}% ${positionY}%, #020617 ${gradientStop}%, ${color})`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="fixed inset-0 z-[-1] w-full h-full"
    />
  );
}
