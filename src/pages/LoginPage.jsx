import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'

export default function LoginPage() {
  const [view, setView] = useState('login') // login | reset | reset-sent

  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="login-brand">
          <svg width="38" height="28" viewBox="0 0 46 34" fill="none">
            <defs>
              <linearGradient id="ll" x1="0" y1="34" x2="46" y2="0">
                <stop offset="0" stopColor="#10C79A" />
                <stop offset=".45" stopColor="#FFC63C" />
                <stop offset="1" stopColor="#FF7A45" />
              </linearGradient>
            </defs>
            <path d="M3 31V11c0-5 6-7 9-3l6 9c1.4 2 4 2 5.4 0l6-9c3-4 9-2 9 3v20"
              stroke="url(#ll)" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
          <span>CQC MediSolutions</span>
        </div>

        {view === 'login' && (
          <>
            <h2>Welcome back</h2>
            <p className="login-sub">Log in to access your application, documents and support.</p>
            <div className="field"><label>Email</label><input type="email" placeholder="you@yourclinic.co.uk" /></div>
            <div className="field">
              <div className="pw-row">
                <label>Password</label>
                <button className="link-btn" onClick={() => setView('reset')}>Forgot password?</button>
              </div>
              <input type="password" placeholder="••••••••" />
            </div>
            <button className="btn btn-teal btn-full" style={{ marginTop: 8 }}>Log in</button>
            <p className="login-footer">
              Don't have an account?{' '}
              <Link to="/resources/demo">Book a free call</Link> to get started.
            </p>
          </>
        )}

        {view === 'reset' && (
          <>
            <h2>Reset your password</h2>
            <p className="login-sub">Enter your email and we'll send a reset link within a few minutes.</p>
            <div className="field"><label>Email</label><input type="email" placeholder="you@yourclinic.co.uk" /></div>
            <button className="btn btn-teal btn-full" style={{ marginTop: 8 }} onClick={() => setView('reset-sent')}>
              Send reset link
            </button>
            <p className="login-footer">
              <button className="link-btn" onClick={() => setView('login')}>← Back to login</button>
            </p>
          </>
        )}

        {view === 'reset-sent' && (
          <div style={{ textAlign: 'center', padding: '8px 0' }}>
            <div className="tick" style={{ margin: '0 auto 20px' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M4 12.5l5.5 5.5L20 7" stroke="#10C79A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Check your inbox</h3>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 24 }}>
              If that email is in our system, a reset link is on its way.
            </p>
            <button className="link-btn" onClick={() => setView('login')}>Back to login</button>
          </div>
        )}
      </div>
    </div>
  )
}
