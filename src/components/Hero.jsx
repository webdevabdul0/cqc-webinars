import './Hero.css'

export default function Hero({ onRegister }) {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">CQC Resources</p>
          <h1>Webinar mini-series</h1>
          <p className="lede">
            One 30-minute session a month, Thursday lunchtimes, to keep you up to date,
            informed, and clear on how the CQC process actually works. Six parts, start to
            finish — and short enough to take at your desk.
          </p>
          <div className="hero-cta">
            <a href="#next" className="btn btn-teal">See what's next</a>
          </div>
          <div className="hero-stats">
            <div>
              <span>30 min</span>
              <small>one topic per session</small>
            </div>
            <div>
              <span>Monthly</span>
              <small>Thursdays, 1pm</small>
            </div>
            <div>
              <span>Free</span>
              <small>live and on demand</small>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.pexels.com/photos/5214963/pexels-photo-5214963.jpeg?auto=compress&cs=tinysrgb&w=900&h=675&dpr=1"
            alt="Healthcare professional"
          />
        </div>
      </div>
    </header>
  )
}
