import React from 'react'
import { DoctorCard } from '../components/DoctorCard'
import { useHealthInquiry } from '../context/HealthInquiryContext'
import { SYMPTOMS } from '../constants/symptoms'
import type { Doctor } from '../types/doctor'
import { MOCK_DOCTORS } from '../mocks/doctors'

export function DoctorMatchPage() {
  const { inquiry } = useHealthInquiry()
  const symptomSpeciality = inquiry.symptom ? SYMPTOMS[inquiry.symptom].speciality : ''
  
  const matchingDoctors = MOCK_DOCTORS.filter(
    doctor => doctor.speciality === symptomSpeciality
  )

  return (
    <div className="w-full max-w-4xl">
      <div className="text-center mb-8">
        <h2 
          data-testid="doctor-match-heading"
          className="text-3xl font-semibold text-gray-800 tracking-tight"
        >
          Matching Doctors
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          We found {matchingDoctors.length} doctors specializing in {symptomSpeciality}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matchingDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
} 