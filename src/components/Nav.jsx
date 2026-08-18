import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav({ onRegister }) {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="logo" to="/">
          <img src="/logo-dark.svg" alt="CQC MediSolutions" className="logo-img" />
        </Link>
        <button className="btn btn-teal btn-sm" onClick={() => onRegister('All six sessions — the full CQC mini-series')}>
          Get Registered
        </button>
      </div>
    </nav>
  )
}
