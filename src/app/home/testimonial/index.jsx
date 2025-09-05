import TestimonialCarousel from "@/app/home/testimonial/testimonialcarousel";
import FadingTestimonials from "@/app/home/testimonial/fadingtestimonial";
import Container from "@/app/components/container";
import GridBG from "@/app/components/gridbg";

export default function Testimonial () {

    return (
        <section className="">
                <div className="relative">
                    <GridBG />
                    <Container>
                        <FadingTestimonials />
                    </Container>
                    {/* <TestimonialCarousel /> */}
                </div>
        </section>
    );
};
