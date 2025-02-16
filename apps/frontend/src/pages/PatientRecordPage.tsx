import React from 'react'
import { useHealthInquiry } from '../context/HealthInquiryContext'
import { MOCK_DOCTORS } from '../mocks/doctors'

export function PatientRecordPage() {
  const { inquiry, resetInquiry } = useHealthInquiry()
  const doctor = MOCK_DOCTORS.find(d => d.id === inquiry.appointment?.doctorId)

  const pastVisits = [
    {
      date: '2024-02-15',
      doctor: 'Dr. Emily Parker',
      speciality: 'Internal Medicine',
      reason: 'FEVER'
    },
    {
      date: '2024-01-03',
      doctor: 'Dr. Michael Chen',
      speciality: 'Neurology',
      reason: 'MIGRAINE'
    }
  ]

  if (!doctor || !inquiry.appointment) {
    return null
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 tracking-tight">
            Patient Record
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Recent Appointment</h3>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{doctor.name}</p>
                  <p className="text-gray-600">{doctor.speciality}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">Reason: {inquiry.symptom}</p>
                <p className="text-gray-600">
                  Date: {new Date(inquiry.appointment.timeSlot).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Past Visits</h3>
          {pastVisits.map(visit => (
            <div key={visit.date} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{visit.doctor}</p>
                  <p className="text-gray-600">{visit.speciality}</p>
                </div>
                <p className="text-gray-600">{visit.date}</p>
              </div>
              <p className="mt-2 text-gray-600">Reason: {visit.reason}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => resetInquiry()}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Start New Consultation
          </button>
        </div>
      </div>
    </div>
  )
} 