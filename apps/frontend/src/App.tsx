import React from 'react'
import { HealthInquiryForm } from './components/HealthInquiryForm'
import { DoctorMatchPage } from './pages/DoctorMatchPage'
import { HealthInquiryProvider, useHealthInquiry } from './context/HealthInquiryContext'

function AppContent() {
  const { inquiry } = useHealthInquiry()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-['Inter']">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-semibold text-blue-600 tracking-tight">TeleClinic</h1>
        </div>
      </header>
      <main className="container mx-auto py-16 px-4 flex flex-col items-center">
        {inquiry.status === 'draft' && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 tracking-tight">
                Online Health Consultation
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tell us about your symptoms and we'll match you with a qualified doctor.
              </p>
            </div>
            <HealthInquiryForm />
          </>
        )}
        {inquiry.status === 'submitted' && (
          <DoctorMatchPage inquiryId={inquiry.id} />
        )}
      </main>
    </div>
  )
}

export function App() {
  return (
    <HealthInquiryProvider>
      <AppContent />
    </HealthInquiryProvider>
  )
} 