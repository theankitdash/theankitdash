import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Ankit Dash - Portfolio',
    description: 'A Tech Enthusiast with love for AI and Automation',
    keywords: ['Ankit Dash', 'AI Engineer', 'Automation Expert', 'Tech Enthusiast', 'Machine Learning', 'Python Developer', 'Next.js', 'n8n Workflows', 'Data Science', 'AI Automation', 'Web Development', 'React', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Ankit Dash' }],
    creator: 'Ankit Dash',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://theankitdash.netlify.app',
        title: 'Ankit Dash - AI/ML Engineer & Tech Enthusiast',
        description: 'A Tech Enthusiast with love for AI and Automation',
        siteName: 'Ankit Dash Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ankit Dash - AI/ML Engineer & Tech Enthusiast',
        description: 'A Tech Enthusiast with love for AI and Automation',
        creator: '@theankitdash',
    },
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
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <div className="page-wrapper">
                    <Navigation />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
