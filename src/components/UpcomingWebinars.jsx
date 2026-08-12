import { useState } from 'react'
import { upcomingWebinars, stageNames, filterLabels, stageKeys } from '../data/webinars'
import './UpcomingWebinars.css'

export default function UpcomingWebinars({ onRegister }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? upcomingWebinars
      : upcomingWebinars.filter(w => w.stage === activeFilter)

  return (
    <section id="upcoming" className="upcoming-section">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">The full series</p>
          <h2>Six sessions, one a month</h2>
          <p>
            Thursday lunchtimes at 1pm. Follow the series in order for the whole process end
            to end, or book the single session you need.
          </p>
        </div>


        <div className="grid">
          {filtered.map(w => (
            <WebinarCard key={w.ep} webinar={w} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WebinarCard({ webinar: w, onRegister }) {
  return (
    <article className={`card${w.full ? ' full' : ''}`}>
      <div className="card-date">
        <b>{w.day}</b>
        <span>{w.month} {w.year}</span>
        <em className="ep">Part {w.ep}</em>
      </div>
      <span className={`topic t-${w.stage}`}>{stageNames[w.stage]}</span>
      <h3>{w.title}</h3>
      <p>{w.blurb}</p>
      <div className="card-foot">
        <small>
          Thu 1:00pm · 30 min<br />
          {w.spaces}
        </small>
        <button
          className="btn btn-teal btn-sm"
          onClick={() => onRegister(`Part ${w.ep} — ${w.title}, Thu ${w.day} ${w.month} ${w.year}`)}
        >
          Register
        </button>
      </div>
    </article>
  )
}
