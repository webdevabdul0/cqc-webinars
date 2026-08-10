import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'

const whatToExpect = [
  { num: '01', title: 'Where you are now', body: 'We start by understanding your service type, how far along you are and what\'s blocking you. No assumptions.' },
  { num: '02', title: 'What registration involves', body: 'A clear walkthrough of the CQC process for your specific regulated activity — not a generic overview.' },
  { num: '03', title: 'What we\'d do for you', body: 'We show you the exact services that match your situation, with honest advice on what you need and what you don\'t.' },
  { num: '04', title: 'Your questions', body: 'Time at the end for anything you want to ask — about the process, the timeline, the cost or anything else.' },
]

const slots = [
  'Monday 10am', 'Monday 2pm', 'Monday 4pm',
  'Tuesday 10am', 'Tuesday 12pm', 'Tuesday 3pm',
  'Wednesday 10am', 'Wednesday 1pm', 'Wednesday 4pm',
  'Thursday 11am', 'Thursday 2pm',
  'Friday 10am', 'Friday 12pm',
]

export default function VirtualDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState('')

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="page-eyebrow">Virtual Demo</p>
          <h1>15 minutes. Free. No sales pitch.</h1>
          <p className="page-lede">
            Book a call with our team and we'll show you exactly what CQC registration involves for your specific service type — and what it would take to get your application over the line.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="wrap demo-layout">

          {/* Left: what to expect */}
          <div className="demo-info">
            <h2>What happens on the call</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 36 }}>
              It's a conversation, not a presentation. 15 minutes, via Zoom, with someone who has been through the CQC process many times.
            </p>
            <div className="demo-steps">
              {whatToExpect.map(s => (
                <div className="demo-step" key={s.num}>
                  <div className="demo-num">{s.num}</div>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="demo-note">
              <p>Not ready to talk yet? Browse our <Link to="/resources/webinars">free webinar series</Link> or <Link to="/services">read about our services</Link> first.</p>
            </div>
          </div>

          {/* Right: booking form */}
          <div className="demo-form-wrap">
            {!submitted ? (
              <div className="demo-form">
                <h3>Book your call</h3>
                <p className="demo-form-sub">Pick a slot and we'll send a Zoom link to your inbox within the hour.</p>

                <div className="field">
                  <label>Name <i>*</i></label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div className="field">
                  <label>Email <i>*</i></label>
                  <input type="email" placeholder="you@yourclinic.co.uk" />
                </div>
                <div className="field">
                  <label>Mobile</label>
                  <input type="tel" placeholder="07700 900123" />
                </div>
                <div className="field">
                  <label>Service type <i>*</i></label>
                  <select>
                    <option value="">Select…</option>
                    <option>Dental practice</option>
                    <option>Domiciliary care</option>
                    <option>Supported living</option>
                    <option>Aesthetics / IV therapy</option>
                    <option>Private GP or clinic</option>
                    <option>Hair transplant clinic</option>
                    <option>Not decided yet</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>Preferred time slot <i>*</i></label>
                  <div className="slots">
                    {slots.map(s => (
                      <button
                        key={s}
                        className={`slot${selected === s ? ' selected' : ''}`}
                        onClick={() => setSelected(s)}
                        type="button"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label>Anything specific you want to cover?</label>
                  <textarea rows="2" placeholder="Optional — helps us prepare" />
                </div>
                <button className="btn btn-teal btn-full" onClick={() => setSubmitted(true)}>
                  Book my call
                </button>
                <p className="form-note">Free. No obligation. We'll never share your details.</p>
              </div>
            ) : (
              <div className="demo-success">
                <div className="tick">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5l5.5 5.5L20 7" stroke="#10C79A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>You're booked in</h3>
                {selected && <p className="booked-slot">{selected}</p>}
                <p>A Zoom link is on its way to your inbox. See you on the call.</p>
                <Link to="/" className="btn btn-ghost-purple">Back to home</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
