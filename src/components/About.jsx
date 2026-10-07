import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { stats } from '../data/portfolioData'
export default function About() {
  return (
    <section id="about" className="section wrap">
      <SectionHeading label="About me" title="Ideas into clean, working products." />
      <Reveal className="two">
        <div className="prose">
          <p>I'm Abdul Qadeer, a Full Stack Web Developer focused on modern, responsive and scalable web applications. I work across frontend and backend, so one person can carry an idea from the first screen to the database.</p>
          <p>I care about maintainable code, strong user experience, solid REST APIs and well-structured data. I keep learning, and I pay attention to the small details that make a product feel finished.</p>
          <p>My approach is simple: understand the problem, plan the structure, build it cleanly, then test it properly before it ships.</p>
        </div>
        <ul className="plain stats">{stats.map(([n, l]) => <li key={l}><b>{n}</b><span>{l}</span></li>)}</ul>
      </Reveal>
    </section>
  )
}
