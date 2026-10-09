import { useState } from 'react'
import { otherWork } from './data.js'

/* Shows only the photos that exist in public/images/other/. Hidden entirely until at least one is uploaded. */
export default function MoreWork() {
  const [ok, setOk] = useState({})
  const any = Object.values(ok).some(Boolean)
  return (
    <section id="more-work" hidden={!any}>
      <div className="wrap">
        <p className="eyebrow rv">More work</p>
        <h2 className="rv">Other <em>projects.</em></h2>
        <div className="ow-grid">
          {otherWork.map((w, i) => (
            <figure className="ow" key={w.src} hidden={!ok[i]}>
              <img
                src={w.src}
                alt={w.title || `Ausmore project photo ${i + 1}`}
                decoding="async"
                onLoad={() => setOk((o) => ({ ...o, [i]: true }))}
                onError={() => setOk((o) => ({ ...o, [i]: false }))}
              />
              {(w.title || w.location) && (
                <figcaption className="eyebrow">{[w.title, w.location].filter(Boolean).join(' · ')}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
