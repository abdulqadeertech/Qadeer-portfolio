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
        <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-pressed={dark}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
        <Button href="#contact" className="nav-cta">Let's Talk</Button>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  )
}
