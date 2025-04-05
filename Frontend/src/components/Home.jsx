import React from 'react'
import Hero from '../home/Hero'
import HackathonCarousel from '../home/HackathonCarousel'
import FeatureHighlight from '../home/FeatureHighlight'
import HowToParticipate from '../home/HowToParticipate'
import Testimonials from '../home/ParticipantTestimonials'
import FacilitiesSection from '../home/FacilitiesSection'

export default function Home() {
  return (
    <div>
      <Hero/>
      <FacilitiesSection/>
      <HackathonCarousel/>
      <HowToParticipate/>
      <FeatureHighlight/>
      <Testimonials/>
    </div>
  )
}
