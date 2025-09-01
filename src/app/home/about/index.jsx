
import Container from "@/app/components/container/index";
import GlowCard from "@/app/components/glowcard";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function About() {
    // DATA
    const data = {
        title: "AI Solutions that fit your Business Needs",
        subtitle: "From idea to implementation",
    }

    return (
        <section
            className="py-12 px-4 md:py-26">
            <Container>
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-xl md:text-2xl text-center font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-4xl md:text-5xl font-bold font-montserrat text-center text-gray-100">
                            {data.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                        <GlowCard customSize className="!bg-white/3 h-96 col-span-3">
                            <div className="flex flex-col gap-4 p-6">
                                <h3 className="text-neutral-100 text-3xl font-bold font-montserrat mb-4">Our Mission</h3>
                                <p className="text-neutral-100 text-lg">To empower businesses with cutting-edge AI solutions that drive innovation, efficiency, and growth.</p>
                                <div className="w-full h-44">

                                </div>
                            </div>
                        </GlowCard>
                        <GlowCard customSize className="!bg-white/3 h-96">
                            
                        </GlowCard>
                        <GlowCard customSize className="!bg-white/3 h-96">
                            
                        </GlowCard>
                        <GlowCard customSize className="!bg-white/3 h-96 col-span-2">
                            
                        </GlowCard>
                        <GlowCard customSize className="!bg-white/3 h-96">
                            
                        </GlowCard>
                        
                    </div>
                </div>
            </Container>
        </section>
    );
}
