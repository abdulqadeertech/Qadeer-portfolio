import { profile } from '../data/portfolioData'
import Socials from './Socials'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot">
        <div><strong>{profile.name}</strong><p>{profile.role}</p></div>
        <Socials className="light col" />
      </div>
      <div className="wrap copy">© 2026 {profile.name}. All rights reserved.</div>
    </footer>
  )
}
