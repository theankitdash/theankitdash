import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Ankit Dash - AI/ML Engineer & Tech Enthusiast',
    description: 'AI/ML Engineer building intelligent automation solutions with Python, Next.js, and cutting-edge AI technologies',
    keywords: ['AI/ML Engineer', 'Automation', 'Python', 'Next.js', 'Machine Learning', 'Ankit Dash'],
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
