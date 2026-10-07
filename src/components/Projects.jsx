import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import Button from './Button'
import { asset } from '../data/assets'
import { projects } from '../data/portfolioData'
const kinds = ['All', ...new Set(projects.map(p => p.kind))]
export default function Projects() {
  const [kind, setKind] = useState('All')
  const [selected, setSelected] = useState(null)
  const list = projects.filter(p => kind === 'All' || p.kind === kind)
  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = event => event.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])
  return (
    <section id="projects" className="section wrap">
      <SectionHeading label="Projects" title="Selected work" />
      <div className="tabs" role="tablist" aria-label="Filter projects">
        {kinds.map(k => <button key={k} role="tab" aria-selected={kind === k} onClick={() => setKind(k)}>{k}</button>)}
      </div>
      <div className="cards three">
        {list.map(p => {
          const img = asset(p.id), { live, github, caseStudy } = p.links
          return (
            <Reveal as="article" className="card project" key={p.id}>
              <div className="thumb">{img ? <img src={img} alt={`${p.title} screenshot`} loading="lazy" /> : <span aria-hidden="true">{p.title}</span>}</div>
              <div className="pbody">
                <span className="pill">{p.kind}</span>
                <h3>{p.title}</h3><p>{p.desc}</p>
                <ul className="plain tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
                <div className="plinks">
                  <button type="button" className="ulink project-view" onClick={() => setSelected(p)}>View Project</button>
                    {live && <a className="ulink" href={live} target="_blank" rel="noreferrer">Live Demo</a>}
                    {github && <a className="ulink" href={github} target="_blank" rel="noreferrer">GitHub</a>}
                    {caseStudy && <a className="ulink" href={caseStudy}>View Case Study</a>}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
      {selected && (
        <div className="project-overlay" role="presentation" onMouseDown={event => event.target === event.currentTarget && setSelected(null)}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <button className="dialog-close" type="button" onClick={() => setSelected(null)} aria-label="Close project details">Close</button>
            <span className="pill">{selected.kind}</span>
            <h3 id="project-dialog-title">{selected.title}</h3>
            <p>{selected.desc}</p>
            <ul className="plain tags">{selected.tech.map(t => <li key={t}>{t}</li>)}</ul>
            {(selected.links.live || selected.links.github) ? <div className="plinks">{selected.links.live && <a className="ulink" href={selected.links.live} target="_blank" rel="noreferrer">Live Demo</a>}{selected.links.github && <a className="ulink" href={selected.links.github} target="_blank" rel="noreferrer">GitHub</a>}</div> : <p className="muted">Project links will be added when available.</p>}
          </section>
        </div>
      )}
    </section>
  )
}
