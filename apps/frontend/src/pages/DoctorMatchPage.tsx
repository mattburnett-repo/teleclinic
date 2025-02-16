import React from 'react'
import { DoctorCard } from '../components/DoctorCard'

interface DoctorMatchPageProps {
  inquiryId?: string
}

export function DoctorMatchPage({ inquiryId }: DoctorMatchPageProps) {
  const mockDoctor = {
    id: 'doc-1',
    name: 'Dr. Smith',
    specialty: 'General Practice',
    availability: ['2024-03-21T12:00:00Z']
  }

  return (
    <div>
      <h2>Matching Doctors</h2>
      <DoctorCard doctor={mockDoctor} />
    </div>
  )
} 