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

const squareData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?auto=format&fit=crop&w=687&q=80",
    },
];

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

export default function ShuffleGrid() {
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
