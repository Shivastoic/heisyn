import Container from "@/app/components/container";
import { WavePath } from "./wave-path";
import Numbers from "@/app/home/stats/numbers";

export default function Stats() {
    return (
        <section className="py-16 md:py-20">
            <Container>
                <div className="flex items-center justify-center flex-col gap-8">
                    <div className="flex flex-col justify-center gap-4">
                        {/* <Numbers /> */}
                    </div>
                    {/* <WavePath /> */}
                </div>
            </Container>
        </section>
    );
}
