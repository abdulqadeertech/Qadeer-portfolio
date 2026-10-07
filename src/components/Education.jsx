import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { education } from '../data/portfolioData'
export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="wrap">
        <SectionHeading label="Education" title="Where I learned" />
        {education.length ? (
          <ol className="plain timeline">
            {education.map(e => (
              <Reveal as="li" key={e.title}><h3>{e.title}</h3><p className="muted">{e.place}{e.period && ` · ${e.period}`}</p>{e.note && <p>{e.note}</p>}</Reveal>
            ))}
          </ol>
        ) : <Reveal className="placeholder"><p>Education details will be added here.</p></Reveal>}
      </div>
    </section>
  )
}
