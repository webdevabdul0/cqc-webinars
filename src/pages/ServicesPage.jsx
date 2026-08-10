import { Link } from 'react-router-dom'
import './Page.css'

const services = [
  {
    icon: '📋',
    title: 'Full CQC Registration',
    tag: 'Most popular',
    tagColor: 'teal',
    desc: 'End-to-end support from your Statement of Purpose to your certificate. We handle the paperwork, you handle your patients.',
    bullets: [
      'Statement of Purpose — written and reviewed',
      'Schedule 3 file build and evidence pack',
      'Application form completion and submission',
      'Interview preparation for Registered Manager and Nominated Individual',
      'Post-submission liaison with CQC on your behalf',
    ],
  },
  {
    icon: '🔍',
    title: 'Pre-Submission Review',
    tag: 'Fastest result',
    tagColor: 'magenta',
    desc: 'Already written your application? We audit it before it goes in. One round of changes is cheaper than a rejection.',
    bullets: [
      'Line-by-line review of your SOP and application form',
      "Evidence gap analysis against CQC's current standards",
      'Written report with prioritised fixes',
      'Optional one-hour debrief call',
      'Turnaround within five working days',
    ],
  },
  {
    icon: '🏥',
    title: 'Mock Inspection',
    tag: 'Post-registration',
    tagColor: 'orange',
    desc: 'A realistic walk-through of what an unannounced CQC inspection looks like, conducted by someone who has been through dozens of them.',
    bullets: [
      'On-site or remote inspection simulation',
      'Inspection against current Key Lines of Enquiry (KLOEs)',
      'Verbal debrief on the day',
      'Written action plan within three days',
      'Follow-up call one month later',
    ],
  },
  {
    icon: '📁',
    title: 'Document Pack Build',
    tag: 'Standalone',
    tagColor: 'purple',
    desc: 'The right policies, the right evidence, in the right format. Built around your service type so nothing is generic.',
    bullets: [
      'Policies and procedures tailored to your regulated activity',
      'IPC documentation and risk assessments',
      'Staff training records template and tracker',
      'Complaints policy and log',
      'Format approved by our CQC-experienced team',
    ],
  },
  {
    icon: '🎓',
    title: 'Interview Coaching',
    tag: 'One-to-one',
    tagColor: 'teal',
    desc: 'The CQC interview trips up even well-prepared candidates. We run realistic practice sessions so you know what to expect and how to answer.',
    bullets: [
      'Two-hour live coaching session via Zoom',
      'Common interview questions with model answers',
      'Feedback on your answers in real time',
      'Recording sent after the session',
      'Unlimited email support in the week before your interview',
    ],
  },
  {
    icon: '🔄',
    title: 'Ongoing Compliance Support',
    tag: 'Retainer',
    tagColor: 'magenta',
    desc: 'Registered is not compliant. A monthly retainer keeps your records, policies and evidence up to date as CQC guidance evolves.',
    bullets: [
      'Monthly compliance review call',
      'Policy updates as CQC guidance changes',
      'Notification of relevant CQC announcements',
      'Priority access to our team by email and phone',
      'Discounted mock inspection every 12 months',
    ],
  },
]

const tagColors = {
  teal: 'rgba(16,199,154,.14)',
  magenta: 'rgba(214,63,168,.12)',
  orange: 'rgba(255,122,69,.15)',
  purple: 'rgba(74,10,110,.1)',
}

const tagText = {
  teal: '#0A8A6B',
  magenta: '#B32B87',
  orange: '#C2521F',
  purple: '#4A0A6E',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="wrap">
          <p className="page-eyebrow">What we do</p>
          <h1>CQC registration, start to finish</h1>
          <p className="page-lede">
            From a blank page to a CQC certificate — or a single piece of the puzzle if you're already partway through. Every service is delivered by people who have worked through the CQC process many times over.
          </p>
          <div className="hero-cta-row">
            <Link to="/prices" className="btn btn-teal">See pricing</Link>
            <Link to="/resources/demo" className="btn btn-ghost">Book a demo</Link>
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="page-section">
        <div className="wrap">
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <div
                  className="service-tag"
                  style={{ background: tagColors[s.tagColor], color: tagText[s.tagColor] }}
                >
                  {s.tag}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-bullets">
                  {s.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        <div className="wrap trust-inner">
          <div><span>500+</span><small>Applications supported</small></div>
          <div><span>98%</span><small>First-time approval rate</small></div>
          <div><span>14 days</span><small>Average turnaround</small></div>
          <div><span>All sectors</span><small>Dental · Domiciliary · GP · Aesthetics</small></div>
        </div>
      </div>

      {/* CTA */}
      <div className="band">
        <div className="wrap">
          <h2>Not sure which service you need?</h2>
          <p>Book a free 15-minute call and we'll tell you exactly where you are in the process and what it takes to get to the other side.</p>
          <Link to="/resources/demo" className="btn btn-teal">Book a free call</Link>
        </div>
      </div>
    </>
  )
}
