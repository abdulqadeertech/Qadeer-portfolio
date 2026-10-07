import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { why } from '../data/portfolioData'
export default function WhyMe() {
  return (
    <section className="section wrap">
      <SectionHeading label="Why me" title="Why work with me" />
      <ul className="plain cards four">{why.map((w, i) => <Reveal as="li" className="card why" key={w} delay={i * 40}>{w}</Reveal>)}</ul>
    </section>
  )
}
