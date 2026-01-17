'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HamburgerMenu from './HamburgerMenu'

export default function Navigation() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (path: string) => {
        return pathname === path ? 'active' : ''
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

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

                {/* Desktop Navigation */}
                <ul className="nav-links nav-links-desktop">
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

                {/* Hamburger Menu Button */}
                <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-menu-links">
                    <li>
                        <Link href="/" className={isActive('/')} onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/work" className={isActive('/work')} onClick={closeMenu}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link href="/creative" className={isActive('/creative')} onClick={closeMenu}>
                            Creative
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={isActive('/about')} onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
