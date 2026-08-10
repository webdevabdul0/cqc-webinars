import { useEffect, useRef } from 'react'
import './Modal.css'

export default function Modal({ webinarLabel, onClose }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div className="overlay open" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="modal-head">
          <button className="close" onClick={onClose} aria-label="Close">×</button>
          <p className="kicker">Webinar registration</p>
          <h3 id="modalTitle">Reserve your place</h3>
          <p>{webinarLabel}</p>
        </div>

        <div className="modal-body modal-body--iframe">
          <iframe
            src="https://app.flossly.ai/lead-form/f39fac931095d88fb12e2f8062f6bbfb298c52e5aa458712c3e5275b2f7f5d8d"
            width="100%"
            height="650"
            frameBorder="0"
            title="Webinar registration form"
          />
        </div>
      </div>
    </div>
  )
}
