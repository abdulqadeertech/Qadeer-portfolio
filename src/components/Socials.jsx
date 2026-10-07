import { profile } from '../data/portfolioData'

const icons = {
  WhatsApp: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.7Z" /><path d="M9.1 8.2c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2 0 .4-.1.6l-.6.7c-.2.2-.2.4-.1.6.4.8 1.3 1.6 2.1 2 .2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3-.1.5-.5.7-.6.3-1.5.4-2.4.1-1-.3-2.4-1-3.8-2.4-1.4-1.4-2.1-2.8-2.4-3.8-.3-.9-.2-1.8.1-2.4Z" /></svg>,
  LinkedIn: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0Z" /></svg>,
  GitHub: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.69.83.57A12 12 0 0 0 12 .3Z" /></svg>,
}

export default function Socials({ className = '' }) {
  const items = [['WhatsApp', profile.whatsapp], ['LinkedIn', profile.linkedin], ['GitHub', profile.github]]
  return <ul className={`plain socials ${className}`}>{items.map(([name, url]) => <li key={name}>{url ? <a className="social-link" href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}>{icons[name]}</a> : <span className="social-link social-disabled" aria-label={`${name} profile link not set`} title={`${name} profile URL not set`}>{icons[name]}</span>}</li>)}</ul>
}
