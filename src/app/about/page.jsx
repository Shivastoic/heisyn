import AboutFounders from "@/app/about/about-founders";
import Container from "@/app/components/container";
import AboutIntro from "@/app/about/intro";
import { ReactLenis } from 'lenis/react';
import GridBG from "@/app/components/gridbg";
import AboutHero from "@/app/about/abouthero";
import AboutCTA from "@/app/about/aboutcta";

export default function About() {

    return (

        <ReactLenis root>
            <main className="relative">
                <GridBG />
                <Container>
                    <div className="flex flex-col gap-10 pt-12 pb-16 md:pt-26 md:pb-20">
                        <AboutHero />
                        <AboutIntro />
                        <AboutFounders />
                        <AboutCTA />
                    </div>
                </Container>
            </main>
        </ReactLenis>

    )

}
