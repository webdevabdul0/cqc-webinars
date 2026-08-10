import { Link } from 'react-router-dom'
import './Page.css'

const sectors = [
  {
    icon: '🦷',
    title: 'Dental Practices',
    slug: 'dental',
    desc: 'Independent dentists, specialist clinics and group practices registering as a new provider or adding regulated activities.',
    points: [
      'Regulated activity: Treatment of Disease, Disorder or Injury (TDDI)',
      'CQC expects an active IPC lead and up-to-date HTM 01-05 compliance',
      'Decontamination room layout must be documented before the inspection',
      'X-ray equipment requires separate IRR17 notification — we flag this early',
    ],
  },
  {
    icon: '🏠',
    title: 'Domiciliary Care',
    slug: 'domiciliary',
    desc: 'Care-at-home services for adults, including personal care, medication support and live-in care providers.',
    points: [
      'Regulated activity: Personal Care',
      'One of CQC\'s most scrutinised sectors — documentation must be watertight',
      'MAR charts, care plans and risk assessments reviewed at every inspection',
      'We\'ve supported providers from 1 to 300 service users through registration',
    ],
  },
  {
    icon: '🤝',
    title: 'Supported Living',
    slug: 'supported-living',
    desc: 'Providers supporting adults with learning disabilities, mental health needs or autism in their own homes.',
    points: [
      'Regulated activity: Personal Care (where physical assistance is provided)',
      'The line between support and personal care matters — we help you draw it clearly',
      'Tenancy agreements and support plans need to show separation of housing and care',
      'CQC will check staff training records and supervision logs at interview stage',
    ],
  },
  {
    icon: '✨',
    title: 'Aesthetics & IV Therapy',
    slug: 'aesthetics',
    desc: 'Clinics offering prescription-only treatments including Botox, dermal fillers and intravenous infusions.',
    points: [
      'Regulated activity: TDDI — triggered by use of prescription medicines',
      'A prescribing GP or independent prescriber must be named in the application',
      'Premises requirements are strict: CQC expects clinical-grade facilities',
      'One of the fastest-growing sectors in CQC registrations — and the most rejected',
    ],
  },
  {
    icon: '🩺',
    title: 'Private GP & Clinics',
    slug: 'private-gp',
    desc: 'Independent GP surgeries, urgent care centres, occupational health providers and specialist outpatient clinics.',
    points: [
      'Regulated activities: TDDI and/or Diagnostic and Screening Procedures',
      'Responsible Individual (RI) and Registered Manager can be the same person',
      'CQC will check prescribing governance, clinical oversight and safeguarding leads',
      'Telehealth and hybrid models need additional evidence of safe remote consulting',
    ],
  },
  {
    icon: '💇',
    title: 'Hair Transplant Clinics',
    slug: 'hair-transplant',
    desc: 'Surgical and non-surgical hair restoration clinics offering FUE, FUT and other procedures under medical supervision.',
    points: [
      'Regulated activity: Surgical Procedures',
      'A named surgeon must be credentialled and linked to the application',
      'Premises inspection is thorough — theatre-standard environments expected',
      'Post-operative care protocols and complication pathways must be documented',
    ],
  },
]

export default function SectorsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="page-eyebrow">Who we work with</p>
          <h1>Every regulated sector, covered</h1>
          <p className="page-lede">
            CQC registration looks different depending on what you do. We work across all the main regulated sectors — and we know the specific pitfalls in each one.
          </p>
          <div className="hero-cta-row">
            <Link to="/services" className="btn btn-teal">See our services</Link>
            <Link to="/resources/demo" className="btn btn-ghost">Talk to our team</Link>
          </div>
        </div>
      </div>

      <section className="page-section">
        <div className="wrap">
          <div className="sectors-grid">
            {sectors.map(s => (
              <div className="sector-card" key={s.slug}>
                <div className="sector-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="sector-points">
                  {s.points.map(p => (
                    <li key={p}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill="rgba(16,199,154,.15)" />
                        <path d="M4 7l2 2 4-4" stroke="#10C79A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="sector-callout">
        <div className="wrap">
          <div className="callout-inner">
            <div>
              <h3>Not seeing your sector?</h3>
              <p>If you're registering a regulated activity not listed here, we can still help. Book a free call and we'll tell you whether you need CQC registration at all — and if you do, exactly what it involves.</p>
            </div>
            <Link to="/resources/demo" className="btn btn-teal">Book a free call</Link>
          </div>
        </div>
      </div>

      <div className="band">
        <div className="wrap">
          <h2>Ready to get started?</h2>
          <p>Tell us your sector and where you're up to. We'll match you to the right service and give you a clear next step.</p>
          <Link to="/prices" className="btn btn-teal">View pricing</Link>
        </div>
      </div>
    </>
  )
}
