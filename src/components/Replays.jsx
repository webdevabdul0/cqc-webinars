import './Replays.css'

export default function Replays({ onRegister }) {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">On demand</p>
          <h2>Can't make it live?</h2>
          <p>Register anyway. Every session is recorded.</p>
        </div>
        <div className="catchup">
          <p>
            The recording and the slides go out the morning after each session to everyone
            who registered, whether you made it live or not. Past sessions will be listed here
            as the series runs.
          </p>
          <button
            className="btn btn-teal"
            onClick={() => onRegister('All six sessions — the full CQC mini-series')}
          >
            Register for the series
          </button>
        </div>
      </div>
    </section>
  )
}
