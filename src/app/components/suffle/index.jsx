"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const generateSquares = (data) => {
    return data.map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full rounded-xl"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        ></motion.div>
    ));
};

export default function ShuffleGrid({squareData}) {
    const timeoutRef = useRef(null);
    // Render deterministic order first (no shuffle → prevents hydration mismatch)
    const [squares, setSquares] = useState(generateSquares(squareData));

    useEffect(() => {
        const shuffleSquares = () => {
            setSquares(generateSquares(shuffle([...squareData])));
            timeoutRef.current = setTimeout(shuffleSquares, 2000);
        };

        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className="grid grid-cols-2 grid-rows-2 h-[300px] md:h-[500px] gap-4 md:gap-6">
            {squares}
        </div>
    );
}
