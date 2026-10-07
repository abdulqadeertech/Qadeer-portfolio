import { useEffect, useState } from 'react'
import { nav, profile } from '../data/portfolioData'
import Button from './Button'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const [active, setActive] = useState('#home')
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light')
  }, [dark])
  useEffect(() => {
    const on = () => setStuck(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive('#' + e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([, h]) => { const el = document.querySelector(h); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', on); io.disconnect() }
  }, [])
  return (
    <header className={`nav ${stuck ? 'stuck' : ''}`}>
      <div className="wrap nav-in">
        <a href="#home" className="logo">{profile.name}</a>
        <nav aria-label="Main" className={open ? 'open' : ''}>
          <ul>{nav.map(([l, h]) => <li key={h}><a href={h} aria-current={active === h ? 'true' : undefined} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark}>
          {dark ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /></svg>}
        </button>
        <Button href="#contact" className="nav-cta">Let's Talk</Button>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  )
}
