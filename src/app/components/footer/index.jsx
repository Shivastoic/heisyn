import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
        copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
    }

    const defaultSections = [
        {
            title: "Product",
            links: [
                { name: "Overview", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "Marketplace", href: "#" },
                { name: "Features", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "About", href: "#" },
                { name: "Team", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Careers", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Help", href: "#" },
                { name: "Sales", href: "#" },
                { name: "Advertise", href: "#" },
                { name: "Privacy", href: "#" },
            ],
        },
    ];

    const defaultSocialLinks = [
        { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
        { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
        { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
        { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
    ];

    const defaultLegalLinks = [
        { name: "Terms and Conditions", href: "#" },
        { name: "Privacy Policy", href: "#" },
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
                            <p className="max-w-[70%] text-neutral-200/60 text-sm font-poppins">
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
                        <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
                            {defaultSections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-4 text-neutral-200 font-semibold font-poppins">{section.title}</h3>
                                    <ul className="space-y-3">
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
