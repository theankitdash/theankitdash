'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path ? 'active' : ''
    }

    return (
        <nav className="nav">
            <div className="nav-container">
                <a
                    href="https://drive.google.com/file/d/11FlbGpp1NmTIeSQvAo1AhNVHJsHIgZwW/view?usp=drive_link"
                    className="nav-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ankit Dash
                </a>
                <ul className="nav-links">
                    <li>
                        <Link href="/" className={isActive('/')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/work" className={isActive('/work')}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/creative" className={isActive('/creative')}>
                            Creative
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={isActive('/about')}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
