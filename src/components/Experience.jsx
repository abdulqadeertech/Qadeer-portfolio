import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { experience } from '../data/portfolioData'
export default function Experience() {
  return (
    <section id="experience" className="section wrap">
      <SectionHeading label="Experience" title="What I've been working on" />
      <ol className="plain timeline">
        {experience.map(e => (
          <Reveal as="li" key={e.role}>
            <h3>{e.role}</h3><p className="muted">{[e.org, e.period].filter(Boolean).join(' · ')}</p>
            <ul className="plain tags">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
