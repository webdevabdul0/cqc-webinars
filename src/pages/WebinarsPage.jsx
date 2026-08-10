import Hero from '../components/Hero'
import NextUp from '../components/NextUp'
import UpcomingWebinars from '../components/UpcomingWebinars'
import HowItWorks from '../components/HowItWorks'
import Replays from '../components/Replays'
import Band from '../components/Band'

export default function WebinarsPage({ onRegister }) {
  return (
    <>
      <Hero onRegister={onRegister} />
      <NextUp onRegister={onRegister} />
      <UpcomingWebinars onRegister={onRegister} />
      <HowItWorks />
      <Replays onRegister={onRegister} />
      <Band />
    </>
  )
}
