import Button from './Button'
import Socials from './Socials'
import { asset } from '../data/assets'
import whatsappPortrait from '../WhatsApp Image 2026-10-06 at 11.57.07 PM.jpeg'
import { useState } from 'react'
import { profile, marquee } from '../data/portfolioData'
export default function Hero() {
  const photo = asset('profile') || whatsappPortrait
  const [photoError, setPhotoError] = useState(false)
  return (
    <>
      <section id="home" className="hero wrap">
        <div className="hero-text">
          <span className="pill">{profile.role}</span>
          <h1>{profile.name}</h1>
          <p className="lead">Innovative Web Developer with experience in building responsive and modern websites using HTML, CSS, JavaScript and React.</p>
          <p className="hero-contact"><a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          <div className="actions"><Button href="#projects">View My Work</Button><Button href="/abdul-qadeer-cv.html" download="Abdul-Qadeer-CV.html" variant="ghost">Download CV</Button><Button href="#contact" variant="ghost">Let's Work Together</Button></div>
          <Socials />
        </div>
        <div className="portrait">
          {photo && !photoError ? <img src={photo} alt={`Portrait of ${profile.name}`} onError={() => setPhotoError(true)} /> : <span aria-hidden="true">AQ</span>}
          <p className="tag"><i />{profile.location}</p>
        </div>
      </section>
      <div className="marquee" aria-hidden="true"><div>{[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}</div></div>
    </>
  )
}
