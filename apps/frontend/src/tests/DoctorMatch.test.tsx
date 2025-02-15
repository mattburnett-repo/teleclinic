import { render, screen, waitFor } from '@testing-library/react'
import { DoctorCard } from '../components/DoctorCard'
import { DoctorMatchPage } from '../pages/DoctorMatchPage'

describe('Doctor Matching', () => {
  const mockDoctor = {
    id: 'doc-1',
    name: 'Dr. Smith',
    specialty: 'General Practice',
    availability: ['2024-03-21T10:00:00Z']
  }

  describe('DoctorCard', () => {
    it('should display doctor information', () => {
      render(<DoctorCard doctor={mockDoctor} />)
      
      expect(screen.getByText('Dr. Smith')).toBeInTheDocument()
      expect(screen.getByText('General Practice')).toBeInTheDocument()
    })

    it('should show available time slots', () => {
      render(<DoctorCard doctor={mockDoctor} />)
      
      expect(screen.getByText('10:00 AM')).toBeInTheDocument()
    })
  })

  describe('DoctorMatchPage', () => {
    it('should show matching doctors for symptoms', async () => {
      render(<DoctorMatchPage inquiryId="inq-1" />)
      
      await waitFor(() => {
        expect(screen.getByText('Dr. Smith')).toBeInTheDocument()
      })
    })
  })
}) 