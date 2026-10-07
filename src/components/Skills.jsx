import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { skills } from '../data/portfolioData'
import { FaCode, FaDatabase } from 'react-icons/fa'
import { SiCss, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiJsonwebtokens, SiMongodb, SiNodedotjs, SiPostman, SiReact, SiTailwindcss } from 'react-icons/si'

const skillIcons = {
  'HTML & CSS': <><SiHtml5 /><SiCss /></>,
  JavaScript: <SiJavascript />,
  React: <SiReact />,
  'Tailwind CSS': <SiTailwindcss />,
  'Node.js': <SiNodedotjs />,
  'Express.js': <SiExpress />,
  JWT: <SiJsonwebtokens />,
  'REST APIs': <FaCode />,
  Postman: <SiPostman />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  'Database Design': <FaDatabase />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
}

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
                <li className="card skill" key={n}><span className="mono" aria-hidden="true">{skillIcons[n] || <FaCode />}</span><div><b>{n}</b><p>{d}</p></div></li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
