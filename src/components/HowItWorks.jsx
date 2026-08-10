import './HowItWorks.css'

const steps = [
  {
    num: 1,
    title: 'Fill in the form',
    body: 'Tell us who you are, your service type and which session you want. It takes about a minute.',
  },
  {
    num: 2,
    title: 'We confirm your place',
    body: 'Your enquiry lands with our team. We check capacity and confirm by email, usually within one working day.',
  },
  {
    num: 3,
    title: 'Zoom link lands in your inbox',
    body: 'You get the joining link plus a calendar invite, then a reminder the morning of the session.',
  },
]

export default function HowItWorks() {
  return (
    <section className="on-purple">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Registering</p>
          <h2>How you get your Zoom link</h2>
          <p>Places are checked by hand so we can keep the sessions small enough for real questions.</p>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.num}>
              <b className="num">{s.num}</b>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
