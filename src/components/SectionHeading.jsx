import Reveal from './Reveal'
export default function SectionHeading({ label, title, children }) {
  return <Reveal className="sh"><span className="pill">{label}</span><h2>{title}</h2>{children && <p className="lead">{children}</p>}</Reveal>
}
