import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav({ onRegister }) {
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="logo" to="/">
          <img src="/logo-dark.svg" alt="CQC MediSolutions" className="logo-img" />
        </Link>

        <div className="nav-links">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/sectors">Sectors</NavLink>
          <NavLink to="/prices">Prices</NavLink>

          <div
            className={`has-drop${dropOpen ? ' open' : ''}`}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button aria-expanded={dropOpen} onClick={() => setDropOpen(v => !v)}>
              Resources
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <div className="drop">
              <NavLink to="/resources/webinars" onClick={() => setDropOpen(false)}>
                Webinars <span className="tag-new">NEW</span>
              </NavLink>
            </div>
          </div>

          <button className="btn btn-teal btn-sm" onClick={() => onRegister('All six sessions — the full CQC mini-series')}>
            Get Registered
          </button>
        </div>
      </div>
    </nav>
  )
}
