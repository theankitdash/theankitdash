'use client'

import { useEffect, useRef } from 'react'

export default function MagneticCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const cursorDotRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorDot = cursorDotRef.current
        if (!cursor || !cursorDot) return

        let mouseX = 0
        let mouseY = 0
        let cursorX = 0
        let cursorY = 0
        let dotX = 0
        let dotY = 0

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
        }

        const animate = () => {
            // Smooth follow effect for main cursor
            const dx = mouseX - cursorX
            const dy = mouseY - cursorY
            cursorX += dx * 0.1
            cursorY += dy * 0.1

            // Faster follow for dot
            const dotDx = mouseX - dotX
            const dotDy = mouseY - dotY
            dotX += dotDx * 0.25
            dotY += dotDy * 0.25

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`

            requestAnimationFrame(animate)
        }

        const handleMouseEnter = () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.5)`
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) scale(0.5)`
        }

        const handleMouseLeave = () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) scale(1)`
        }

        window.addEventListener('mousemove', handleMouseMove)

        // Add hover effect to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .bento-item, .skill-tag, .bento-skill-tag')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter)
            el.addEventListener('mouseleave', handleMouseLeave)
        })

        animate()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter)
                el.removeEventListener('mouseleave', handleMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="magnetic-cursor"
                style={{
                    position: 'fixed',
                    width: '40px',
                    height: '40px',
                    border: '2px solid rgba(187, 134, 252, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '-20px',
                    top: '-20px',
                    transition: 'transform 0.2s ease-out',
                    mixBlendMode: 'difference'
                }}
            />
            <div
                ref={cursorDotRef}
                className="magnetic-cursor-dot"
                style={{
                    position: 'fixed',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'rgba(187, 134, 252, 0.8)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '-4px',
                    top: '-4px',
                    transition: 'transform 0.15s ease-out',
                    mixBlendMode: 'difference'
                }}
            />
        </>
    )
}
