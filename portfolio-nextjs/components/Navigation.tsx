'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HamburgerMenu from './HamburgerMenu'

export default function Navigation() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Memoize the isActive function to prevent re-renders
    const isActive = useCallback((path: string) => {
        return pathname === path ? 'active' : ''
    }, [pathname])

    // Memoize toggle handler
    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev)
    }, [])

    // Memoize close handler
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

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
        <nav className="nav" aria-label="Main navigation">
            <div className="nav-container">
                <a
                    href="https://drive.google.com/file/d/11FlbGpp1NmTIeSQvAo1AhNVHJsHIgZwW/view?usp=drive_link"
                    className="nav-brand"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Ankit Dash's resume"
                >
                    Ankit Dash
                </a>

                {/* Desktop Navigation */}
                <ul className="nav-links nav-links-desktop" role="list">
                    <li>
                        <Link
                            href="/"
                            className={isActive('/')}
                            aria-current={pathname === '/' ? 'page' : undefined}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/work"
                            className={isActive('/work')}
                            aria-current={pathname === '/work' ? 'page' : undefined}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/creative"
                            className={isActive('/creative')}
                            aria-current={pathname === '/creative' ? 'page' : undefined}
                        >
                            Creative
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={isActive('/about')}
                            aria-current={pathname === '/about' ? 'page' : undefined}
                        >
                            About
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Menu Button */}
                <HamburgerMenu
                    isOpen={isMenuOpen}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <ul className="mobile-menu-links" role="list">
                    <li>
                        <Link
                            href="/"
                            className={isActive('/')}
                            onClick={closeMenu}
                            aria-current={pathname === '/' ? 'page' : undefined}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/work"
                            className={isActive('/work')}
                            onClick={closeMenu}
                            aria-current={pathname === '/work' ? 'page' : undefined}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/creative"
                            className={isActive('/creative')}
                            onClick={closeMenu}
                            aria-current={pathname === '/creative' ? 'page' : undefined}
                        >
                            Creative
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={isActive('/about')}
                            onClick={closeMenu}
                            aria-current={pathname === '/about' ? 'page' : undefined}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
