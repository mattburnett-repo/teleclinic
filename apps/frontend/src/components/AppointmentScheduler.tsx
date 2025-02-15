import React from 'react'

type AppointmentSchedulerProps = {
  doctorId: string
  timeSlots: string[]
}

export function AppointmentScheduler({ doctorId, timeSlots }: AppointmentSchedulerProps) {
  return (
    <div>
      {timeSlots.map(slot => (
        <button key={slot}>
          {new Date(slot).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </button>
      ))}
      <button>Book Appointment</button>
    </div>
  )
} 