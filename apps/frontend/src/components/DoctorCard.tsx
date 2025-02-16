import React from 'react'

interface DoctorCardProps {
  doctor: {
    name: string
    speciality: string
    availability: string[]
  }
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div>
      <h3>{doctor.name}</h3>
      <p>{doctor.speciality}</p>
      {doctor.availability.map(slot => (
        <div key={slot}>{new Date(slot).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
      ))}
    </div>
  )
} 