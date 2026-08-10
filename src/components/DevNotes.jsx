import { useState } from 'react'
import './DevNotes.css'

const notes = [
  { title: 'Menu', body: 'Add Webinars as a third item under the Resources dropdown, sitting under Virtual Demo. URL: /resources/webinars.' },
  { title: 'Webinar data', body: 'Cards render from a single array in the JS at the bottom of this file. Move it to the CMS so sessions can be added without a deploy — fields are part number, date, month, title, blurb, time, topic, spaces left, full (y/n).' },
  { title: 'Series numbering', body: '"Part 1 of 6" runs through the page. If we run a second series later, the part count needs to be a CMS field rather than typed into the template.' },
  { title: 'Speaker', body: 'Victoria Yannagas hosts every session. Add her job title under her name, and swap the initials block for a headshot before launch.' },
  { title: 'Cadence', body: 'One session a month, Thursdays at 1pm. Worth stating the pattern on the confirmation email too so people can diary the whole series in one go.' },
  { title: 'Countdown', body: "Reads the next session's date. Feed it from the CMS field, not hard-coded." },
  { title: 'Form submission', body: 'Posts to the existing enquiry inbox with the webinar title attached, so the team can see which session each person wants. Same routing as the demo enquiry form.' },
  { title: 'Zoom', body: "Links are sent manually after the team confirms capacity — no automatic Zoom registration in v1. If we later want it automated, Zoom's registration API can issue a unique join link per attendee." },
  { title: 'Capacity', body: '"Places remaining" is a manual number for now. Card shows a greyed-out Fully booked state when it hits zero.' },
  { title: 'Recordings', body: 'The on-demand block is a placeholder until Part 1 has aired. Once sessions start banking up, swap it for a card list of past parts, each opening the same form.' },
  { title: 'Register for all six', body: 'The form is the same — the webinar field just carries "All six sessions" so the team knows to send every link.' },
]

export default function DevNotes() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="notes-btn" onClick={() => setOpen(v => !v)}>
        Build notes
      </button>
      <div className={`notes${open ? ' open' : ''}`}>
        <h4>Notes for the build</h4>
        <ol>
          {notes.map(n => (
            <li key={n.title}>
              <b>{n.title}:</b> {n.body}
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
