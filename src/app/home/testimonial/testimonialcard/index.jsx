import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialCard({ cardData }) {
    return (
        <div className="p-6 md:p-8 bg-white/5 border border-white/10 flex flex-col gap-6 justify-between aspect-square w-80 md:w-[380px] rounded-xl">
            <div className="flex flex-col gap-6">
                <FaQuoteLeft className="text-4xl text-white/40"/>
                <p className="text-base font-montserrat text-neutral-300">{ cardData.testimonial }</p>
            </div>

            <div className="flex items-center gap-4">
                <Image 
                    src={ cardData.image }
                    alt={ cardData.name }
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <h3 className="text-white font-semibold font-montserrat">{ cardData.name }</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-poppins">{ cardData.designation }</p>
                </div>
            </div>
        </div>
    );
}
