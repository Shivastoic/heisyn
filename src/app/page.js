import Hero from "@/app/home/hero";
import Services from "@/app/home/services";
import About from "@/app/home/about";
import Testimonial from "@/app/home/testimonial";
import Stats from "@/app/home/stats";

import { ReactLenis } from 'lenis/react';
import FAQ from "./home/faq";


export default function Home() {
    return (
        <ReactLenis root>
            <main>
                <Hero />
                <Services />
                <Testimonial />
                {/* <Stats /> */}
                <FAQ />
                <About />
            </main>
        </ReactLenis>
    );
}
