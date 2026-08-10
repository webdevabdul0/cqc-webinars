import { useState, useEffect, useRef } from 'react'
import './Modal.css'

export default function Modal({ webinarLabel, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div className="overlay open" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-head">
          <button className="close" onClick={onClose} aria-label="Close">×</button>
          <p className="kicker">Webinar registration</p>
          <h3 id="modalTitle">Reserve your place</h3>
          <p>{webinarLabel}</p>
        </div>

        {!submitted ? (
          <div className="modal-body">
            <div className="two">
              <div className="field">
                <label>First name <i>*</i></label>
                <input type="text" placeholder="Priya" />
              </div>
              <div className="field">
                <label>Last name <i>*</i></label>
                <input type="text" placeholder="Sharma" />
              </div>
            </div>
            <div className="two">
              <div className="field">
                <label>Email <i>*</i></label>
                <input type="email" placeholder="priya@yourclinic.co.uk" />
              </div>
              <div className="field">
                <label>Mobile <i>*</i></label>
                <input type="tel" placeholder="07700 900123" />
              </div>
            </div>
            <div className="field">
              <label>Organisation or practice name</label>
              <input type="text" placeholder="Leave blank if you haven't set up yet" />
            </div>
            <div className="two">
              <div className="field">
                <label>Your role <i>*</i></label>
                <select>
                  <option value="">Select…</option>
                  <option>Provider / owner</option>
                  <option>Nominated Individual</option>
                  <option>Registered Manager</option>
                  <option>Practice manager</option>
                  <option>Clinician</option>
                  <option>Consultant / adviser</option>
                  <option>Other</option>
                </select>
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
            </div>
            <div className="field">
              <label>Where are you up to? <i>*</i></label>
              <select>
                <option value="">Select…</option>
                <option>Just researching</option>
                <option>Preparing my application</option>
                <option>Application submitted, awaiting interview</option>
                <option>Registered, preparing for inspection</option>
                <option>Registered and inspected</option>
              </select>
            </div>
            <div className="field">
              <label>Anything you'd like covered on the day?</label>
              <textarea rows="3" placeholder="We read every one of these and work the common ones into the session." />
            </div>
            <div className="field">
              <label>How did you hear about us?</label>
              <select>
                <option value="">Select…</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Google</option>
                <option>Referred by a colleague</option>
                <option>Dream Squat</option>
                <option>Other</option>
              </select>
            </div>
            <label className="consent">
              <input type="checkbox" />
              <span>Email me the Zoom link, the recording and occasional CQC updates. You can unsubscribe any time.</span>
            </label>
            <button className="btn btn-teal btn-full" onClick={() => setSubmitted(true)}>
              Reserve my place
            </button>
            <p className="form-note">Free to attend. We never share your details with third parties.</p>
          </div>
        ) : (
          <div className="success">
            <div className="tick">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5.5 5.5L20 7" stroke="#10C79A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Request received</h3>
            <p>Thanks — your details are with our team now.</p>
            <ul className="next-list">
              <li><b>Within one working day</b> — we confirm your place by email.</li>
              <li><b>With the confirmation</b> — your Zoom link and a calendar invite.</li>
              <li><b>Morning of the session</b> — a reminder with the link again.</li>
            </ul>
            <button
              className="btn btn-full"
              style={{ borderColor: 'var(--purple)', color: 'var(--purple)', border: '2px solid var(--purple)' }}
              onClick={onClose}
            >
              Back to webinars
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
