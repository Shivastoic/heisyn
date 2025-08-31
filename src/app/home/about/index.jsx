import Container from "@/app/components/container";

export default function About() {

    // DATA
    const data = {
        title: "AI Solutions that fit your Business Needs",
        subtitle: "From idea to implementation",
    }

    return (
        <section className="py-12 md:py-26">
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
                    <div>

                    </div>
                </div>
            </Container>
        </section>
    );
}
