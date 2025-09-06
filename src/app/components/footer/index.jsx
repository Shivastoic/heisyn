import { FaMailBulk, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "@/app/components/container";

export default function Footer() {

    // DATA
    const data = {
        logo: {
            url: "/",
            src: "/logos/logo-white.png",
            alt: "logo",
        },
        description: "A collection of components for your startup business or side project.",
        copyright: "© 2025 Heisyn.com All rights reserved.",
    }

    const defaultSections = [
        {
            title: "Services",
            links: [
                { name: "Overview", href: "/services" },
                { name: "Buy Workflows", href: "/workflows" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Careers", href: "/career" },
                { name: "Contact US", href: "/contact" },
            ],
        },
    ];

    const defaultSocialLinks = [
        { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/shiva-pandey-dev/", label: "LinkedIn" },
        { icon: <FaMailBulk className="size-5" />, href: "mailto:shivapandey9898@gmail.com", label: "Mail" },
        { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/918074730610", label: "Whatsapp" },
        { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/shiva_pandey_o/", label: "Instagram" },
    ];

    const defaultLegalLinks = [
        { name: "Terms and Conditions", href: "/career/terms-and-conditions" },
    ];

    return (
        <section className="pt-24 md:pt-32">
            <div className="border-t-2 border-white/10">
                <Container>
                    <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left py-10">
                        <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <a href={data.logo.url}>
                                    <img
                                        src={data.logo.src}
                                        alt={data.logo.alt}
                                        title={data.logo.title}
                                        className="h-8"
                                    />
                                </a>
                            </div>
                            <p className="text-neutral-200/60 text-sm font-poppins">
                                {data.description}
                            </p>
                            <ul className="flex items-center space-x-6">
                                {defaultSocialLinks.map((social, idx) => (
                                    <li key={idx} className="font-medium  text-neutral-200/60 hover:text-neutral-200 duration-150">
                                        <a href={social.href} aria-label={social.label}>
                                            {social.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2  lg:gap-20">
                            {defaultSections.map((section, sectionIdx) => (
                                <div key={sectionIdx} className="min-w-48">
                                    <h3 className="mb-4 text-neutral-200 font-semibold font-poppins">{section.title}</h3>
                                    <ul className="space-y-3 ">
                                        {section.links.map((link, linkIdx) => (
                                            <li
                                                key={linkIdx}
                                                className="font-medium font-poppins  text-neutral-200/60 hover:text-neutral-200 duration-150 text-sm"
                                            >
                                                <a href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-4 border-t-2 border-white/10 py-8 text-sm font-medium md:flex-row md:items-center md:text-left">
                        <p className="order-2 lg:order-1 text-neutral-200/60 hover:text-neutral-200 duration-150 font-medium font-poppins">{data.copyright}</p>
                        <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                            {defaultLegalLinks.map((link, idx) => (
                                <li key={idx} className="font-poppins text-neutral-200/60 hover:text-neutral-200 duration-150">
                                    <a href={link.href}> {link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </div>
            
        </section>
    );
}
