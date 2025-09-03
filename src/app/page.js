import Hero from "@/app/home/hero";
import Services from "@/app/home/services";
import About from "@/app/home/about";
import Testimonial from "@/app/home/testimonial";
import Stats from "@/app/home/stats";


export default function Home() {
    return (
        <main>
			<Hero />
            <Services />
            <Testimonial />
            <Stats />
            <About />
		</main>
    );
}
