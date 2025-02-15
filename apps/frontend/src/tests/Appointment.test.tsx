import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AppointmentScheduler } from '../components/AppointmentScheduler'

describe('Appointment Scheduling', () => {
  const mockTimeSlots = [
    '2024-03-21T10:00:00Z',
    '2024-03-21T11:00:00Z'
  ]

  describe('AppointmentScheduler', () => {
    it('should display available time slots', () => {
      render(<AppointmentScheduler doctorId="doc-1" timeSlots={mockTimeSlots} />)
      
      expect(screen.getByText('10:00 AM')).toBeInTheDocument()
      expect(screen.getByText('11:00 AM')).toBeInTheDocument()
    })

    it('should book selected time slot', async () => {
      render(<AppointmentScheduler doctorId="doc-1" timeSlots={mockTimeSlots} />)
      
      fireEvent.click(screen.getByText('10:00 AM'))
      fireEvent.click(screen.getByRole('button', { name: /book appointment/i }))
      
      await waitFor(() => {
        expect(screen.getByText(/appointment confirmed/i)).toBeInTheDocument()
      })
    })
  })
}) 