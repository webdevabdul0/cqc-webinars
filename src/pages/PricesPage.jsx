import { Link } from 'react-router-dom'
import './Page.css'

const plans = [
  {
    name: 'Document Pack',
    price: '£495',
    period: 'one-off',
    desc: 'The right policies and evidence, built for your service type. No generic templates.',
    color: 'var(--purple-mid)',
    features: [
      'Policies and procedures (tailored)',
      'IPC documentation and risk assessments',
      'Complaints policy and log template',
      'Staff training records tracker',
      'Delivery within 5 working days',
    ],
    cta: 'Get the pack',
    highlight: false,
  },
  {
    name: 'Pre-Submission Review',
    price: '£750',
    period: 'one-off',
    desc: 'Already written your application? We audit it before it goes in.',
    color: 'var(--teal)',
    features: [
      'Full review of SOP and application form',
      'Evidence gap analysis',
      'Written report with prioritised fixes',
      'One-hour debrief call included',
      'Turnaround within 5 working days',
    ],
    cta: 'Book a review',
    highlight: false,
  },
  {
    name: 'Full Registration',
    price: '£2,400',
    period: 'one-off',
    desc: 'End-to-end support from blank page to certificate. The most popular option.',
    color: 'var(--magenta)',
    features: [
      'Statement of Purpose — written and reviewed',
      'Application form completion & submission',
      'Schedule 3 file and full evidence pack',
      'Interview prep for RM and NI',
      'Post-submission CQC liaison',
      'Webinar series access included',
    ],
    cta: 'Get started',
    highlight: true,
  },
  {
    name: 'Interview Coaching',
    price: '£350',
    period: 'per session',
    desc: 'Two hours of live mock interview practice with written feedback.',
    color: 'var(--yellow)',
    features: [
      'Two-hour live Zoom session',
      'RM and NI interview questions',
      'Real-time feedback on your answers',
      'Session recording sent after',
      'Unlimited email support pre-interview',
    ],
    cta: 'Book coaching',
    highlight: false,
  },
  {
    name: 'Mock Inspection',
    price: '£995',
    period: 'one-off',
    desc: 'A realistic on-site or remote inspection walkthrough before CQC arrives.',
    color: 'var(--orange)',
    features: [
      'Full KLOE-based inspection simulation',
      'On-site or remote (your choice)',
      'Verbal debrief on the day',
      'Written action plan within 3 days',
      'Follow-up call after one month',
    ],
    cta: 'Book inspection',
    highlight: false,
  },
  {
    name: 'Compliance Retainer',
    price: '£195',
    period: 'per month',
    desc: 'Stay compliant as CQC guidance evolves. Cancel any time.',
    color: 'var(--teal)',
    features: [
      'Monthly compliance review call',
      'Policy updates as guidance changes',
      'CQC announcement alerts',
      'Priority email and phone access',
      'Discounted mock inspection annually',
    ],
    cta: 'Start retainer',
    highlight: false,
  },
]

const faqs = [
  {
    q: 'Do you guarantee registration?',
    a: 'We can\'t guarantee CQC\'s decision — no one can. What we guarantee is that your application will be as strong as it can possibly be. Our first-time approval rate is 98% across all clients.',
  },
  {
    q: 'How long does registration take?',
    a: 'CQC is currently taking 12–16 weeks from submission to decision on most applications. Our preparation work typically takes 2–4 weeks before submission, depending on how much is already in place.',
  },
  {
    q: 'Can I pay in instalments?',
    a: 'Yes. For the Full Registration package we offer a 50/50 split: half on engagement, half on submission. Get in touch and we\'ll set this up.',
  },
  {
    q: 'What if my application gets rejected?',
    a: 'It\'s rare, but it happens. If your application is rejected after we\'ve provided Full Registration support, we\'ll work with you on the resubmission at no additional charge.',
  },
  {
    q: 'Do prices include VAT?',
    a: 'All prices shown are exclusive of VAT. VAT is added at the standard rate of 20% where applicable.',
  },
]

export default function PricesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="page-eyebrow">Transparent pricing</p>
          <h1>No hidden fees. No surprises.</h1>
          <p className="page-lede">
            Every service is fixed-price. You'll know exactly what you're paying before we start, and there are no add-ons you didn't ask for.
          </p>
        </div>
      </div>

      <section className="page-section">
        <div className="wrap">
          <div className="plans-grid">
            {plans.map(p => (
              <div className={`plan-card${p.highlight ? ' plan-highlight' : ''}`} key={p.name}>
                {p.highlight && <div className="plan-badge">Most popular</div>}
                <div className="plan-color-bar" style={{ background: p.color }} />
                <div className="plan-body">
                  <h3>{p.name}</h3>
                  <p className="plan-desc">{p.desc}</p>
                  <div className="plan-price">
                    <b>{p.price}</b>
                    <span>{p.period}</span>
                  </div>
                  <ul className="plan-features">
                    {p.features.map(f => (
                      <li key={f}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                          <circle cx="7.5" cy="7.5" r="7.5" fill="rgba(16,199,154,.15)" />
                          <path d="M4.5 7.5l2 2 4-4" stroke="#10C79A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/resources/demo" className={`btn btn-full ${p.highlight ? 'btn-teal' : 'btn-outline-purple'}`}>
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="page-section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Common questions</p>
            <h2>Before you decide</h2>
          </div>
          <div className="faqs">
            {faqs.map(f => (
              <div className="faq" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="band">
        <div className="wrap">
          <h2>Still not sure which to pick?</h2>
          <p>Book a free 15-minute call. We'll tell you exactly what you need — and what you don't.</p>
          <Link to="/resources/demo" className="btn btn-teal">Book a free call</Link>
        </div>
      </div>
    </>
  )
}
