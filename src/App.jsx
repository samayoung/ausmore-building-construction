import { useEffect, useRef, useState } from 'react'
import { company as C, projects, services, steps, values } from './data.js'
import MoreWork from './MoreWork.jsx'

const nav = [
  ['Home', '#home'],
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

/* Image with architectural placeholder; hides itself if the file is missing */
function Img({ src, alt, className = '', eager }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`ph ${className}`}>
      {ok && <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setOk(false)} />}
    </div>
  )
}

function Logo() {
  const [ok, setOk] = useState(true)
  return (
    <a href="#home" className="logo" aria-label="Ausmore, home">
      {ok ? (
        <img src="/images/logo/ausmore-logo.png" alt="Ausmore" height="34" onError={() => setOk(false)} />
      ) : (
        <>
          <span className="lm" />
          AUSMORE
        </>
      )}
    </a>
  )
}

function Preloader() {
  const [s, setS] = useState('in')
  useEffect(() => {
    const a = setTimeout(() => setS('out'), 1300)
    const b = setTimeout(() => setS('gone'), 2100)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [])
  if (s === 'gone') return null
  return (
    <div className={`pre ${s === 'out' ? 'out' : ''}`} aria-hidden="true">
      <div>
        <div className="pw">AUSMORE</div>
        <div className="bar"><i /></div>
        <p className="eyebrow">Building &amp; Construction Services Limited</p>
      </div>
    </div>
  )
}

function Header() {
  const [sc, setSc] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setSc(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  const close = () => setOpen(false)
  return (
    <header className={`hd ${sc || open ? 'sc' : ''}`}>
      <div className="wrap">
        <Logo />
        <nav className="dnav" aria-label="Primary">
          {nav.map(([l, h]) => (
            <a key={h} href={h}>{l}</a>
          ))}
        </nav>
        <a className="btn sm dcta" href="#contact">Start a project <i>↗</i></a>
        <button className={`burger ${open ? 'x' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
      <div className={`mnav ${open ? 'open' : ''}`}>
        {nav.map(([l, h]) => (
          <a key={h} href={h} onClick={close}>{l}</a>
        ))}
        <a href="#contact" onClick={close} className="mc">Start a project ↗</a>
      </div>
    </header>
  )
}

function Hero() {
  const bg = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let r
    const f = () => {
      cancelAnimationFrame(r)
      r = requestAnimationFrame(() => {
        if (bg.current && window.scrollY < window.innerHeight * 1.2) bg.current.style.transform = `translate3d(0,${window.scrollY * 0.18}px,0)`
      })
    }
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <section id="home" className="hero dark">
      <div className="hbg" ref={bg}>
        <Img src="/images/hero/hero-main.jpg" alt="Architectural render of an Ausmore project" eager />
      </div>
      <div className="shade" />
      <div className="wrap hin">
        <p className="eyebrow fade">Architecture · Construction · Project Management</p>
        <h1 className="h1" aria-label="We design. We build. We deliver.">
          <span className="l" style={{ '--d': 0 }}><span>WE DESIGN.</span></span>
          <span className="l" style={{ '--d': 1 }}><em>We build.</em></span>
          <span className="l" style={{ '--d': 2 }}><span>WE DELIVER.</span></span>
        </h1>
        <div className="hrow fade">
          <p className="lead">Thoughtful architectural design and disciplined construction, brought together under one reliable team.</p>
          <a className="btn" href="#projects">Explore projects <i>↗</i></a>
        </div>
        <div className="hfoot fade eyebrow">
          <span>Scroll to explore ↓</span>
          <span>Uyo · Akwa Ibom · Nigeria</span>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section id="about-approach">
      <div className="wrap">
        <p className="eyebrow rv">01 / The Ausmore approach</p>
        <div className="two">
          <h2 className="rv">Building with <em>intent.</em></h2>
          <div className="rv body">
            <p>Ausmore brings architecture, construction and project management together to turn ideas into carefully executed spaces.</p>
            <p>Our work is guided by trust, transparency, professionalism and excellence, with a focus on speed and reliability throughout the project journey.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p, i }) {
  return (
    <a href={`#/project/${p.slug}`} className={`pc pc${i + 1} rv`}>
      <Img src={p.image} alt={`${p.title}, ${p.category}`} className="pimg" />
      <div className="pmeta">
        <span className="eyebrow">0{i + 1}</span>
        <span className="eyebrow">{p.category} · {p.status}</span>
      </div>
      <h3>{p.title}</h3>
      <span className="vp eyebrow">View project <i>↗</i></span>
    </a>
  )
}

function Projects() {
  return (
    <section id="projects" className="neu">
      <div className="wrap">
        <p className="eyebrow rv">02 / Selected work</p>
        <h2 className="rv">Projects that <em>speak for us.</em></h2>
        <div className="pgrid">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [o, setO] = useState(0)
  return (
    <section id="services">
      <div className="wrap">
        <p className="eyebrow rv">03 / What we do</p>
        <h2 className="rv">Design. <em>Build.</em> Manage.</h2>
        <div className="svl rv">
          {services.map((s, i) => (
            <div className={`sv ${o === i ? 'open' : ''}`} key={s.n}>
              <button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>
                <span className="eyebrow">{s.n}</span>
                <h3>{s.title}</h3>
                <i>↗</i>
              </button>
              <div className="svp">
                <div>
                  <div className="svb">
                    <p>{s.text}</p>
                    <ul>{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="dark">
      <div className="wrap">
        <p className="eyebrow rv">04 / Our process</p>
        <h2 className="rv">One vision. <em>Five stages.</em></h2>
        <ol className="steps">
          {steps.map(([n, t, d]) => (
            <li key={n} className="rv">
              <span className="eyebrow">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section id="values">
      <div className="wrap">
        <p className="eyebrow rv">Our values</p>
        <h2 className="rv">What we <em>stand for.</em></h2>
        <div className="vals">
          {values.map(([t, d], i) => (
            <div className="val rv" key={t}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="neu">
      <div className="wrap two">
        <Img src="/images/about/about-main.jpg" alt="Ausmore project detail" className="aimg rv" />
        <div>
          <h2 className="rv">Built around <em>trust.</em></h2>
          <div className="body rv">
            <p>Ausmore Building &amp; Construction Services Limited is an architecture, construction and project management company focused on delivering thoughtfully designed and professionally executed projects.</p>
            <p>We combine design thinking with practical construction knowledge to help clients move from concept to completion with confidence.</p>
            <p className="tags">Trust. Transparency. Professionalism. Quality. Speed. Reliability.</p>
          </div>
          <address className="rv eyebrow">
            {C.address.map((l) => <span key={l}>{l}<br /></span>)}
          </address>
        </div>
      </div>
    </section>
  )
}

/* CEO only. Photo: public/images/team/ceo.jpg (the layout adapts if it is missing). */
function Leadership() {
  const [ok, setOk] = useState(true)
  return (
    <section id="leadership">
      <div className={`wrap ceo ${ok ? '' : 'nophoto'}`}>
        {ok && (
          <div className="ceo-ph rv">
            <img src="/images/team/ceo.jpg" alt={`${C.ceo}, CEO of Ausmore`} loading="lazy" decoding="async" onError={() => setOk(false)} />
          </div>
        )}
        <div className="ceo-tx rv">
          <p className="eyebrow">Leadership</p>
          <h2>{C.ceo}</h2>
          <p className="eyebrow ceo-role">CEO</p>
          <p className="eyebrow">Ausmore Building &amp; Construction Services Limited</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="dark">
      <div className="wrap">
        <p className="eyebrow rv">05 / Start a project</p>
        <h2 className="rv">Have a project <em>in mind?</em></h2>
        <p className="lead rv">Tell us what you are planning. Let's turn the idea into a space built with purpose.</p>
        <div className="cgrid rv">
          <div><span className="eyebrow">Call / WhatsApp</span><a href={C.tel}>{C.phone}</a></div>
          <div><span className="eyebrow">Email</span><a href={`mailto:${C.email}`}>{C.email}</a></div>
          <div><span className="eyebrow">Office</span><p>{C.address.map((l) => <span key={l}>{l}<br /></span>)}</p></div>
        </div>
        <a className="btn big rv" href={C.whatsapp} target="_blank" rel="noopener noreferrer">Start a conversation <i>↗</i></a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="pw">AUSMORE</div>
            <p className="eyebrow">Building &amp; Construction Services Limited</p>
            <p className="eyebrow">RC: {C.rc}</p>
            <p className="eyebrow">Architecture · Construction · Project Management</p>
          </div>
          <div className="fl">
            {nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
            <a href={C.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="fl">
            <span>{C.address.join(' ')}</span>
            <a href={C.tel}>{C.phone}</a>
            <a href={`mailto:${C.email}`}>{C.email}</a>
          </div>
        </div>
        <p className="copy eyebrow">© 2026 {C.name}</p>
      </div>
    </footer>
  )
}

function Detail({ slug }) {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i < 0) return <section className="wrap pd"><h2>Project not found.</h2><a className="btn" href="#projects">All projects</a></section>
  const p = projects[i]
  const next = projects[(i + 1) % projects.length]
  const meta = [['Category', p.category], ['Status', p.status], ['Location', p.location], ['Year', p.year]].filter((m) => m[1])
  return (
    <>
      <section className="dark dhero">
        <Img src={p.image} alt={p.title} eager />
        <div className="shade" />
        <div className="wrap">
          <a href="#projects" className="eyebrow back">← All projects</a>
          <p className="eyebrow">0{i + 1} / {p.category} · {p.status}</p>
          <h1 className="dt">{p.title}</h1>
        </div>
      </section>
      <section>
        <div className="wrap two">
          <dl className="meta">
            {meta.map(([k, v]) => <div key={k}><dt className="eyebrow">{k}</dt><dd>{v}</dd></div>)}
          </dl>
          <p className="lead2 rv">{p.description}</p>
        </div>
        <div className="wrap gal">
          {p.images.map((s, n) => <Img key={s} src={s} alt={`${p.title}, view ${n + 2}`} className="rv" />)}
        </div>
      </section>
      <a href={`#/project/${next.slug}`} className="dark nextp">
        <div className="wrap">
          <span className="eyebrow">Next project ↗</span>
          <h2>{next.title}</h2>
        </div>
      </a>
    </>
  )
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash)
  useEffect(() => {
    const f = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])

  const slug = route.startsWith('#/project/') ? route.slice(10) : null

  useEffect(() => {
    if (slug) window.scrollTo(0, 0)
    else if (route.length > 1) requestAnimationFrame(() => document.getElementById(route.slice(1))?.scrollIntoView())
    else window.scrollTo(0, 0)
  }, [route, slug])

  useEffect(() => {
    const els = document.querySelectorAll('.rv:not(.in)')
    if (!('IntersectionObserver' in window)) return els.forEach((e) => e.classList.add('in'))
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [slug])

  return (
    <>
      <Preloader />
      <Header />
      <main>
        {slug ? (
          <Detail slug={slug} />
        ) : (
          <>
            <Hero />
            <Intro />
            <Projects />
            <MoreWork />
            <Services />
            <Process />
            <Values />
            <About />
            <Leadership />
          </>
        )}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
