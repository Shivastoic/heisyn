import AboutFounders from "@/app/about/about-founders";
import Container from "@/app/components/container";
import AboutIntro from "@/app/about/intro";

export default function About() {

    return (

        <main className="pt-12 pb-16 md:pt-26 md:pb-20">
            <Container>
                <div className="flex flex-col gap-20">
                    <AboutIntro />
                    <AboutFounders />
                </div>
            </Container>
        </main>

    )

}
