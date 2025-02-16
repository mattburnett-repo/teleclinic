import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { DoctorCard } from '../../../components/DoctorCard'
import { DoctorMatchPage } from '../../../pages/DoctorMatchPage'
import { HealthInquiryProvider } from '../../../context/HealthInquiryContext'
import type { SymptomKey } from '../../../constants/symptoms'
import { TEST_DOCTOR } from '../../../mocks/doctors'
import { App } from '../../../App'

describe('Doctor Matching', () => {
  describe('DoctorCard', () => {
    const mockSelectSlot = jest.fn()

    it('should display doctor information', () => {
      render(<DoctorCard doctor={TEST_DOCTOR} onSelectSlot={mockSelectSlot} />)
      
      expect(screen.getByText('Dr. Sarah Wilson')).toBeInTheDocument()
      expect(screen.getByText('Neurology')).toBeInTheDocument()
    })

    it('should show available time slots', () => {
      render(<DoctorCard doctor={TEST_DOCTOR} onSelectSlot={mockSelectSlot} />)
      
      expect(screen.getByText('10:00 AM')).toBeInTheDocument()
    })

    it('should display doctor image when provided', () => {
      render(<DoctorCard doctor={TEST_DOCTOR} onSelectSlot={mockSelectSlot} />)
    })
  })

  describe('DoctorMatchPage', () => {
    it('should show matching doctors for symptoms', async () => {
      const mockInquiry = {
        id: 'test-1',
        patientName: 'John Doe',
        symptom: 'HEADACHE' as SymptomKey,
        status: 'submitted' as const
      }

      render(
        <HealthInquiryProvider initialState={mockInquiry}>
          <DoctorMatchPage />
        </HealthInquiryProvider>
      )
      
      await waitFor(() => {
        expect(screen.getByText('Dr. Sarah Wilson')).toBeInTheDocument()
      })
    })
  })
}) 