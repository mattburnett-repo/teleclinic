import React from 'react'

type DoctorMatchPageProps = {
  inquiryId: string
}

export function DoctorMatchPage({ inquiryId }: DoctorMatchPageProps) {
  return (
    <div>
      <h2>Matching Doctors</h2>
      {/* DoctorCard will be rendered here */}
    </div>
  )
} 