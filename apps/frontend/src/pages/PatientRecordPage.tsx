import React from 'react'

type PatientRecordPageProps = {
  patientName: string
}

export function PatientRecordPage({ patientName }: PatientRecordPageProps) {
  return (
    <div>
      <h2>Medical History</h2>
      <h3>Past Visits</h3>
      <div>Status: pending</div>
    </div>
  )
} 