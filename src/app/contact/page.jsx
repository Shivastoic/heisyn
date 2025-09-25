import GridBG from "@/app/components/gridbg";
import Container from "@/app/components/container";
import Socials from "@/app/contact/socials";
import { ReactLenis } from 'lenis/react';
import ContactForm from "./contactform";

export default function Contact(){

    return (

        <ReactLenis root>
            <main className="relative">
                <GridBG />
                <Container>
                    <div className="grid grid-cols-2 gap-14 pt-12 pb-16 md:pt-26 md:pb-20">
                        <div className="">
                            <ContactForm />
                        </div>
                        <Socials />
                    </div>
                </Container>
            </main>
        </ReactLenis>

    )

}
