import GridBG from "@/app/components/gridbg";
import Container from "@/app/components/container";
import Socials from "@/app/contact/socials";

export default function Contact(){

    return (

        <main className="relative">
            <GridBG />
            <Container>
                <div className="flex flex-col gap-20 justify-center pt-12 pb-16 md:pt-26 md:pb-20 min-h-screen">
                    <Socials />

                </div>
            </Container>
        </main>

    )

}
