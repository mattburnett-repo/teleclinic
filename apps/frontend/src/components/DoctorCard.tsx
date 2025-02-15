import React from 'react'

type DoctorCardProps = {
  doctor: {
    name: string
    specialty: string
    availability: string[]
  }
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      {doctor.availability.map(slot => (
        <div key={slot}>{new Date(slot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      ))}
    </div>
  )
} 