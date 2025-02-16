import { DoctorCard } from '../components/DoctorCard'
import { useHealthInquiry } from '../context/HealthInquiryContext'
import { SYMPTOMS } from '../constants/symptoms'
import { MOCK_DOCTORS } from '../mocks/doctors'
import React from 'react'

export function DoctorMatchPage() {
  const { inquiry, updateInquiry } = useHealthInquiry()
  const [selectedSlot, setSelectedSlot] = React.useState<string | undefined>(() => inquiry.appointment?.timeSlot)
  const [selectedDoctor, setSelectedDoctor] = React.useState<string | undefined>(() => inquiry.appointment?.doctorId)

  const symptomSpeciality = inquiry.symptom ? SYMPTOMS[inquiry.symptom].speciality : ''
  
  const matchingDoctors = MOCK_DOCTORS.filter(
    doctor => doctor.speciality === symptomSpeciality
  )

  const handleSelectSlot = (doctorId: string, slot: string) => {
    setSelectedDoctor(doctorId)
    setSelectedSlot(slot)
  }

  const handleScheduling = () => {
    if (selectedDoctor && selectedSlot) {
      updateInquiry({
        status: 'confirmed',
        appointment: {
          doctorId: selectedDoctor,
          timeSlot: selectedSlot
        }
      })
    }
  }

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
          <DoctorCard 
            key={doctor.id} 
            doctor={doctor}
            selectedSlot={doctor.id === selectedDoctor ? selectedSlot : undefined}
            onSelectSlot={(slot) => handleSelectSlot(doctor.id, slot)}
          />
        ))}
      </div>

      {selectedSlot && (
        <div className="mt-8 text-center">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleScheduling}
          >
            Continue to Scheduling
          </button>
        </div>
      )}
    </div>
  )
} 