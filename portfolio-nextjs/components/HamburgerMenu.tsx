'use client'

interface HamburgerMenuProps {
    isOpen: boolean
    onClick: () => void
}

export default function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
    return (
        <button
            className="hamburger-menu"
            onClick={onClick}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
        >
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        </button>
    )
}
