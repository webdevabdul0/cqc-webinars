import Hero from '../components/Hero'
import UpcomingWebinars from '../components/UpcomingWebinars'

export default function WebinarsPage({ onRegister }) {
  return (
    <>
      <Hero onRegister={onRegister} />
      <UpcomingWebinars onRegister={onRegister} />
    </>
  )
}
