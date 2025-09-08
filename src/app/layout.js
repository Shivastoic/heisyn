import { Montserrat, Poppins, JetBrains_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import AnimatedBackground from "./components/animatedbg";
import PageTransition from "./components/pagetransition";

// FONTS
const montserrat = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-montserrat",
	subsets: ["latin"],
});

const roboto_flex = Roboto_Flex({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-roboto-flex",
	subsets: ["latin"],
});

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
	subsets: ["latin"],
});

const jetbrainsmono = JetBrains_Mono({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsmono",
	subsets: ["latin"],
});

// METADATA
export const metadata = {
    // Essential Metadata
    title: {
        default: 'HeiSyn - AI Automations, Workflows & Intelligent Agents',
        template: `%s | HeiSyn`,
    },
    description:
        'HeiSyn specializes in AI-powered business automation, n8n workflows, intelligent chatbots, caller AI agents, and social media automations. We design custom AI solutions to streamline operations, boost efficiency, and accelerate business growth. Book your free consultation today.',

    // New in Next.js 13.3+ for setting a base URL
    metadataBase: new URL('https://www.heisyn.com'),

    // Keywords (SEO focus)
    keywords: [
        'AI automations',
        'business automation',
        'n8n workflows',
        'chatbots',
        'caller AI agents',
        'social media automation',
        'AI solutions',
        'automation services',
        'process automation',
        'intelligent agents',
    ],

    // Author and Creator
    authors: [{ name: 'HeiSyn', url: 'https://www.heisyn.com' }],
    creator: 'HeiSyn',

    // Canonical URL
    alternates: {
        canonical: '/',
    },

    // Open Graph (OG) for Social Media Sharing (Facebook, LinkedIn, etc.)
    openGraph: {
        title: 'AI Automations, Workflows & Business Solutions | HeiSyn',
        description:
            'Transform your business with AI-powered automation. HeiSyn builds custom n8n workflows, chatbots, caller AI agents, and social media automation solutions to drive efficiency and growth.',
        url: 'https://www.heisyn.com',
        siteName: 'HeiSyn',
        images: [
            {
                url: '/og-image.png', // Will be resolved with metadataBase
                width: 1200,
                height: 630,
                alt: 'HeiSyn - AI Automations, Workflows & Intelligent Agents',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // Twitter Card for Sharing on X (formerly Twitter)
    twitter: {
        card: 'summary_large_image',
        title: 'AI Automations, Workflows & Business Solutions | HeiSyn',
        description:
            'HeiSyn delivers AI automations, n8n workflows, chatbots, caller AI agents, and social media automation solutions to help businesses scale smarter.',
        creator: '@heisyn', // Update with your real handle
        images: ['/og-image.png'],
    },

    // Robots configuration
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

   icons: {
		icon: [
			{ url: '/favicon.ico', type: 'image/x-icon' },
			{ url: '/favicon.png', type: 'image/png' },
		],
		shortcut: [
			{ url: '/favicon.ico', type: 'image/x-icon' },
			{ url: '/favicon.png', type: 'image/png' },
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${poppins.variable} ${jetbrainsmono.variable} ${roboto_flex.variable} antialiased bg-bg-color`}
			>
				<PageTransition>
					<AnimatedBackground />
					<Header />
					{children}
					<Footer />
				</PageTransition>
			</body>
		</html>
	);
}
