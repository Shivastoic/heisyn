import Container from "@/app/components/container";

export default function About() {

    // DATA
    const data = {
        title: "Solutions for your Business That Works",
        subtitle: "From idea to implementation",
    }

    return (
        <section className="bg-white py-20">
            <Container>
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-2xl font-jetbrainsmono font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            {data.subtitle}
                        </p>
                        <h2 className="max-w-[800px] leading-tight text-5xl font-bold font-montserrat text-center text-gray-800">
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
