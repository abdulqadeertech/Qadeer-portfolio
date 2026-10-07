import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/portfolioData'
export default function Skills() {
  return (
    <section id="skills" className="section wrap">
      <SectionHeading label="Skills" title="Tools I build with" />
      <div className="skill-groups">
        {Object.entries(skills).map(([g, items]) => (
          <Reveal key={g}>
            <h3>{g}</h3>
            <ul className="plain cards">
              {items.map(([n, d]) => (
                <li className="card skill" key={n}><span className="mono" aria-hidden="true">{n.slice(0, 2)}</span><div><b>{n}</b><p>{d}</p></div></li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
