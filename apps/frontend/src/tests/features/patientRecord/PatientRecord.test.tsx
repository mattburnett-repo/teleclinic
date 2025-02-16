import { render, screen, waitFor } from '@testing-library/react'
import { PatientRecordPage } from '../../../pages/PatientRecordPage'

describe('Patient Record', () => {
  describe('PatientRecordPage', () => {
    it('should display patient history', async () => {
      render(<PatientRecordPage patientName="John Doe" />)
      
      await waitFor(() => {
        expect(screen.getByText(/medical history/i)).toBeInTheDocument()
        expect(screen.getByText(/past visits/i)).toBeInTheDocument()
      })
    })

    it('should show inquiry status', async () => {
      render(<PatientRecordPage patientName="John Doe" />)
      
      await waitFor(() => {
        expect(screen.getByText(/pending/i)).toBeInTheDocument()
      })
    })
  })
}) 