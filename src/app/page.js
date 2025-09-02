import Hero from "@/app/home/hero";
import Services from "@/app/home/services";
import About from "@/app/home/about";
import Testimonial from "@/app/home/testimonial";


export default function Home() {
    return (
        <main>
			<Hero />
            <Services />
            <Testimonial />
            <About />
		</main>
    );
}
