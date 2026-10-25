import '../components/nav.css'
import '../components/colors.css'
import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

function Nav() {
    const [isOpen, setOpen] = useState(false)
    const menuRef = useRef(null)

    useGSAP(() => {
        if (!menuRef.current) return
        const items = menuRef.current.querySelectorAll('li')

        if (isOpen) {
            // Container: slide down + fade in
            gsap.fromTo(
                menuRef.current,
                { autoAlpha: 0, y: -16 },
                { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power3.out' }
            )
            // Each li: stagger in from left
            gsap.fromTo(
                items,
                { autoAlpha: 0, x: -20 },
                { autoAlpha: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.08, delay: 0.1 }
            )
        } else {
            // Slide up + fade out
            gsap.to(menuRef.current, {
                autoAlpha: 0,
                y: -10,
                duration: 0.2,
                ease: 'power2.in'
            })
        }
    }, { dependencies: [isOpen] })

    return (
        <nav className="nav">
            {/* Left: hamburger + SHOP */}
            <div className="nav__left">
                <button
                    className="nav__hamburger"
                    aria-label="Open menu"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a href="#" className="nav__shop">Shop</a>
            </div>

            {/* Dropdown — always mounted so GSAP can animate open AND close */}
            <ul className="nav__links" ref={menuRef}>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* Center: logo + tagline */}
            <div className="nav__center">
                <span className="nav__logo">Purify</span>
                <span className="nav__tagline">Wellness &amp; Fragrance</span>
            </div>

            {/* Right: search + user icons */}
            <div className="nav__right">
                <button className="nav__icon-btn" aria-label="Search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
                <button className="nav__icon-btn" aria-label="Account">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Nav
