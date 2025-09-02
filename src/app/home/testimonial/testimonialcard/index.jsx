import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ cardData }) {
    return (
        <div className="p-6 md:p-8 bg-white/5 shadow space-y-6 aspect-square w-80 md:w-[400px] rounded-xl">
            <div className="text-4xl text-white/40">
                <FaQuoteLeft />
            </div>
            
            <p className="text-base md:text-lg font-poppins text-neutral-200">{ cardData.content }</p>
        </div>
    );
}
