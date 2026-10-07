import { useState } from 'react'
import Reveal from './Reveal'
import { profile } from '../data/portfolioData'
const rules = {
  name: v => v.trim().length < 2 && 'Please enter your name.',
  email: v => !/^\S+@\S+\.\S+$/.test(v) && 'Please enter a valid email.',
  subject: v => v.trim().length < 3 && 'Please add a subject.',
  message: v => v.trim().length < 10 && 'Tell me a little more (10+ characters).',
}
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = k => e => { setV({ ...v, [k]: e.target.value }); err[k] && setErr({ ...err, [k]: false }) }
  const submit = e => {
    e.preventDefault()
    const found = Object.fromEntries(Object.entries(rules).map(([k, f]) => [k, f(v[k])]))
    setErr(found)
    if (Object.values(found).some(Boolean)) return
    const body = `${v.message}\n\n${v.name} (${v.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <section id="contact" className="contact">
      <div className="wrap two">
        <Reveal>
          <h2>Let's Build Something Great Together</h2>
          <p className="lead">Have a project, idea, or business in mind? Let's discuss how I can turn it into a modern digital experience.</p>
          <ul className="plain info">
            <li><span>Phone</span><a className="ulink" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
            <li><span>Location</span>{profile.location}</li>
          </ul>
        </Reveal>
        <Reveal as="form" className="form" onSubmit={submit} noValidate>
          {[['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']].map(([k, l, t]) => (
            <label key={k}>{l}<input type={t} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={`e-${k}`} /><small id={`e-${k}`}>{err[k]}</small></label>
          ))}
          <label>Message<textarea rows="5" value={v.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby="e-message" /><small id="e-message">{err.message}</small></label>
          <button className="btn btn-light" type="submit">Send Message</button>
          <p role="status" className="ok">{sent && 'Opening your email app with the message ready to send.'}</p>
        </Reveal>
      </div>
    </section>
  )
}
