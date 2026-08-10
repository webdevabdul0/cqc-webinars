import { useState, useEffect } from 'react'
import './Countdown.css'

export default function Countdown({ isoDate }) {
  const [time, setTime] = useState(calcTime(isoDate))

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime(isoDate)), 1000)
    return () => clearInterval(id)
  }, [isoDate])

  return (
    <div className="countdown">
      <Unit value={time.d} label="days" />
      <Unit value={pad(time.h)} label="hrs" />
      <Unit value={pad(time.m)} label="min" />
      <Unit value={pad(time.s)} label="sec" />
    </div>
  )
}

function Unit({ value, label }) {
  return (
    <div className="cd-unit">
      <b>{value}</b>
      <small>{label}</small>
    </div>
  )
}

function calcTime(isoDate) {
  let diff = new Date(isoDate).getTime() - Date.now()
  if (diff < 0) diff = 0
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { d, h, m, s }
}

function pad(n) {
  return String(n).padStart(2, '0')
}
