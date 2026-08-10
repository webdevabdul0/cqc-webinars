import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'

const benefits = [
  { icon: '💸', title: 'Revenue share', body: 'Earn a commission on every client you refer who completes a service with us. Paid monthly, no cap.' },
  { icon: '🎓', title: 'CPD resources', body: 'Access our library of CQC guides, checklists and template packs to add value to your own clients.' },
  { icon: '🤝', title: 'Co-branded materials', body: 'Joint webinars, email templates and content you can put your name on and send to your audience.' },
  { icon: '📞', title: 'Priority support line', body: 'A direct line to our team when your clients have urgent CQC questions. No waiting in a queue.' },
  { icon: '📊', title: 'Partner dashboard', body: 'Track referrals, see commission status and access resources — all in one place.' },
  { icon: '🏆', title: 'Listed as a partner', body: 'Get featured on our website as a recommended partner, with a link back to your practice or consultancy.' },
]

const partnerTypes = [
  { title: 'Healthcare Consultants', desc: 'Independent consultants advising providers on setup, compliance or business development.' },
  { title: 'Accountants & Finance Advisers', desc: 'Firms supporting healthcare businesses with financial planning who encounter CQC questions regularly.' },
  { title: 'Solicitors & Legal Advisers', desc: 'Healthcare law practices whose clients often need CQC guidance alongside legal advice.' },
  { title: 'Business Coaches', desc: 'Coaches working with clinic owners, practice managers and healthcare entrepreneurs.' },
  { title: 'Training Providers', desc: 'Organisations delivering mandatory and specialist training to regulated healthcare providers.' },
  { title: 'Industry Associations', desc: 'Trade bodies and sector groups whose members include CQC-regulated providers.' },
]

export default function AffiliationPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="page-eyebrow">Affiliation & Partnership</p>
          <h1>Refer a client. Earn every time they succeed.</h1>
          <p className="page-lede">
            If you work with healthcare providers who need CQC registration, we'd like to work with you. Our partner programme is simple: you refer, we deliver, you earn a commission — and your clients get the outcome they need.
          </p>
          <div className="hero-cta-row">
            <a href="#apply" className="btn btn-teal">Apply to partner</a>
            <Link to="/resources/demo" className="btn btn-ghost">Talk to us first</Link>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <section className="page-section">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">What's in it for you</p>
            <h2>Partner benefits</h2>
            <p>We keep the programme simple. No targets, no tiers, no complicated terms.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map(b => (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="page-section on-purple">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Who we partner with</p>
            <h2>Is this you?</h2>
            <p>We work with a wide range of professionals who regularly encounter clients with CQC needs.</p>
          </div>
          <div className="partner-types-grid">
            {partnerTypes.map(p => (
              <div className="partner-type" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply form */}
      <section className="page-section" id="apply" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="form-wrap">
            <div className="sec-head">
              <p className="kicker">Get started</p>
              <h2>Apply to become a partner</h2>
              <p>We review every application and come back within two working days.</p>
            </div>

            {!submitted ? (
              <div className="partner-form">
                <div className="two">
                  <div className="field"><label>First name <i>*</i></label><input type="text" placeholder="Jane" /></div>
                  <div className="field"><label>Last name <i>*</i></label><input type="text" placeholder="Smith" /></div>
                </div>
                <div className="two">
                  <div className="field"><label>Email <i>*</i></label><input type="email" placeholder="jane@consultancy.co.uk" /></div>
                  <div className="field"><label>Phone</label><input type="tel" placeholder="07700 900123" /></div>
                </div>
                <div className="field"><label>Organisation <i>*</i></label><input type="text" placeholder="Your company or practice name" /></div>
                <div className="field">
                  <label>What type of partner are you? <i>*</i></label>
                  <select>
                    <option value="">Select…</option>
                    {partnerTypes.map(p => <option key={p.title}>{p.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>How many clients a year might benefit from CQC support?</label>
                  <select>
                    <option value="">Select…</option>
                    <option>1–5</option>
                    <option>6–20</option>
                    <option>21–50</option>
                    <option>50+</option>
                  </select>
                </div>
                <div className="field">
                  <label>Anything else you'd like us to know?</label>
                  <textarea rows="3" placeholder="Tell us about your audience or client base…" />
                </div>
                <button className="btn btn-teal btn-full" onClick={() => setSubmitted(true)}>Submit application</button>
                <p className="form-note">We never share your details with third parties.</p>
              </div>
            ) : (
              <div className="success-block">
                <div className="tick">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M4 12.5l5.5 5.5L20 7" stroke="#10C79A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Application received</h3>
                <p>We'll review your application and come back to you within two working days.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
