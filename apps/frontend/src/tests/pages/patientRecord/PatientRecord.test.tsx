import { render, screen, waitFor } from '@testing-library/react'
import { PatientRecordPage } from '../../../pages/PatientRecordPage'
import { HealthInquiryProvider } from '../../../context/HealthInquiryContext'
import type { SymptomKey } from '../../../constants/symptoms'

describe('Patient Record', () => {
  describe('PatientRecordPage', () => {
    it('should display patient history', async () => {
      const mockInquiry = {
        patientName: 'John Doe',
        symptom: 'HEADACHE' as SymptomKey,
        status: 'completed' as const,
        appointment: {
          doctorId: 'doc-1',
          timeSlot: '2024-03-21T09:00:00Z'
        }
      }
      
      render(
        <HealthInquiryProvider initialState={mockInquiry}>
          <PatientRecordPage />
        </HealthInquiryProvider>
      )
      
      await waitFor(() => {
        expect(screen.getByText('Past Visits')).toBeInTheDocument()
        expect(screen.getByText('Dr. Emily Parker')).toBeInTheDocument()
        expect(screen.getByText('Dr. Michael Chen')).toBeInTheDocument()
      })
    })
  })
}) 