import Countdown from './Countdown'
import { nextWebinar } from '../data/webinars'
import './NextUp.css'

export default function NextUp({ onRegister }) {
  const w = nextWebinar
  const pct = Math.round(((w.seatsTotal - w.seatsLeft) / w.seatsTotal) * 100)

  return (
    <section id="next">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">What's up next</p>
          <h2>The next 30 minutes that will save you weeks</h2>
          <p>
            One topic, half an hour, no filler. Registration closes 24 hours before the
            session, or as soon as places run out.
          </p>
        </div>

        <div className="next-card">
          <div className="next-main">
            <span className="live-pill">
              <i className="dot" />
              Part {w.part} of {w.total} · Live on Zoom
            </span>
            <h3>{w.title}</h3>
            <p className="desc">{w.description}</p>

            <div className="meta-row">
              <span className="meta">
                <CalIcon />
                {w.date}
              </span>
              <span className="meta">
                <ClockIcon />
                {w.time}
              </span>
              <span className="meta">
                <VideoIcon />
                {w.format}
              </span>
            </div>

            <div className="host">
              <div className="host-avatar">{w.host.initials}</div>
              <div>
                <b>{w.host.name}</b>
                <small>{w.host.org}</small>
              </div>
            </div>
          </div>

          <div className="next-side">
            <p className="count-label">Doors open in</p>
            <Countdown isoDate={w.isoDate} />

            <div className="seats">
              <div className="seats-top">
                <span>Places remaining</span>
                <b>{w.seatsLeft} of {w.seatsTotal}</b>
              </div>
              <div className="bar">
                <i style={{ width: `${pct}%` }} />
              </div>
            </div>

            <button
              className="btn btn-teal btn-full"
              onClick={() => onRegister(w.registerLabel)}
            >
              Register for this session
            </button>

            <p className="note">
              Free to attend. Zoom link sent once we confirm your place.<br />
              <button
                className="all-link-btn"
                onClick={() => onRegister('All six sessions — the full CQC mini-series')}
              >
                Or register for all six →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="3" width="13" height="11.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M1.5 6.5h13M5 1.5v3M11 1.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="4" width="9.5" height="8" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 7.5l3.5-2v5l-3.5-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}
