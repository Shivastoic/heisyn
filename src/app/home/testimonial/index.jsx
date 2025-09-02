import TestimonialCarousel from "@/app/home/testimonial/testimonialcarousel";

export default function Testimonial () {

    // DATA
    const data = {
        title: "What Our Clients Say",
        subtitle: "Testimonials from Satisfied Customers",
    }

    return (
        <section className="">
                <div className="">
                    {/* <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-base md:text-xl text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-semibold font-montserrat text-center text-gray-100">
                            {data.title}
                        </h2>
                    </div> */}
                    <TestimonialCarousel />
                </div>
        </section>
    );
};
