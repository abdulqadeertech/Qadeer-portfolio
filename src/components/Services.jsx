import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { services } from '../data/portfolioData'
export default function Services() {
  return (
    <section id="services" className="section alt">
      <div className="wrap">
        <SectionHeading label="Services" title="What I can build for you" />
        <ul className="plain cards three">
          {services.map(([t, d], i) => (
            <Reveal as="li" className="card service" key={t} delay={i * 50}><span className="num">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
