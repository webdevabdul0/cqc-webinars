import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'

export default function Nav({ onRegister }) {
  const [dropOpen, setDropOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="logo" to="/">
          <svg width="46" height="34" viewBox="0 0 46 34" fill="none">
            <defs>
              <linearGradient id="logo-g" x1="0" y1="34" x2="46" y2="0">
                <stop offset="0" stopColor="#10C79A" />
                <stop offset=".45" stopColor="#FFC63C" />
                <stop offset="1" stopColor="#FF7A45" />
              </linearGradient>
            </defs>
            <path
              d="M3 31V11c0-5 6-7 9-3l6 9c1.4 2 4 2 5.4 0l6-9c3-4 9-2 9 3v20"
              stroke="url(#logo-g)"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="logo-text">CQC MediSolutions</span>
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
