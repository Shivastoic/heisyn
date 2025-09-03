import { Montserrat, Poppins, JetBrains_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
import AnimatedBackground from "./components/animatedbg";

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
		default: 'Web, App, & AI Solutions | HeiSyn',
		template: `%s | HeiSyn`,
	},
	description: 'We build high-performance websites, mobile apps, and intelligent AI agents. Supercharge your business with custom AI workflows and automation. Get your free consultation today!',
	
	// New in Next.js 13.3+ for setting a base URL
	metadataBase: new URL('https://www.heisyn.com'),

	// Keywords (Less important for Google now, but still good practice)
	keywords: ['web development', 'app development', 'ai agents', 'ai workflows', 'custom software', 'automation services', 'saas development', 'machine learning solutions'],
	
	// Author and Creator
	authors: [{ name: 'HeiSyn', url: 'https://www.heisyn.com' }],
	creator: 'HeiSyn',

	// Canonical URL
	alternates: {
		canonical: '/',
	},

	// Open Graph (OG) for Social Media Sharing (Facebook, LinkedIn, etc.)
	openGraph: {
		title: 'Custom Web, App, & AI Solutions | HeiSyn',
		description: 'We build high-performance websites, mobile apps, and intelligent AI agents. Supercharge your business with custom AI workflows and automation.',
		url: 'https://www.heisyn.com',
		siteName: 'HeiSyn',
		images: [
			{
				url: '/og-image.png', // Must be an absolute URL. `metadataBase` will handle this.
				width: 1200,
				height: 630,
				alt: 'Web Development, App Development, and AI Solutions by HeiSyn',
			},
		],
		locale: 'en_US',
		type: 'website',
	},

	// Twitter Card for Sharing on X (formerly Twitter)
	twitter: {
		card: 'summary_large_image',
		title: 'Custom Web, App, & AI Solutions | HeiSyn',
		description: 'We build high-performance websites, mobile apps, and intelligent AI agents. Supercharge your business with custom AI workflows and automation.',
		creator: '@heisyn', // Your Twitter handle
		images: ['/og-image.png'], // Must be an absolute URL. `metadataBase` will handle this.
	},

	// Robots file configuration
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
	
	// Icons and Favicons
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.variable} ${poppins.variable} ${jetbrainsmono.variable} ${roboto_flex.variable} antialiased bg-bg-color`}
			>
				<AnimatedBackground />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
