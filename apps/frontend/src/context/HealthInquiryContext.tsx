import React from 'react'
import type { SymptomKey } from '../constants/symptoms'

interface HealthInquiry {
  id?: string
  patientName: string
  symptom: SymptomKey | ''
  status: 'draft' | 'submitted' | 'matched' | 'scheduled'
  submittedAt?: Date
}

interface HealthInquiryContextType {
  inquiry: HealthInquiry
  updateInquiry: (data: Partial<HealthInquiry>) => void
  submitInquiry: () => void
  resetInquiry: () => void
}

const defaultInquiry: HealthInquiry = {
  patientName: '',
  symptom: '',
  status: 'draft'
}

export const HealthInquiryContext = React.createContext<HealthInquiryContextType | null>(null)

export function HealthInquiryProvider({ children }: { children: React.ReactNode }) {
  const [inquiry, setInquiry] = React.useState<HealthInquiry>(defaultInquiry)

  const updateInquiry = (data: Partial<HealthInquiry>) => {
    setInquiry(prev => ({ ...prev, ...data }))
  }

  const submitInquiry = () => {
    setInquiry(prev => ({
      ...prev,
      status: 'submitted',
      id: Math.random().toString(36).slice(2),
      submittedAt: new Date()
    }))
  }

  const resetInquiry = () => {
    setInquiry(defaultInquiry)
  }

  return (
    <HealthInquiryContext.Provider value={{ inquiry, updateInquiry, submitInquiry, resetInquiry }}>
      {children}
    </HealthInquiryContext.Provider>
  )
}

export function useHealthInquiry() {
  const context = React.useContext(HealthInquiryContext)
  if (!context) {
    throw new Error('useHealthInquiry must be used within a HealthInquiryProvider')
  }
  return context
} 