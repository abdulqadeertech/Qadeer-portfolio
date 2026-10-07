import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero /><About /><Skills /><Services /><Projects /><Experience /><Education /><WhyMe /><Contact />
      </main>
      <Footer />
    </>
  )
}
