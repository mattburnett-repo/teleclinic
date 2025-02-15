import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { HealthInquiryForm } from '../components/HealthInquiryForm'

describe('Health Inquiry Flow', () => {
  describe('HealthInquiryForm', () => {
    it('should submit patient symptoms', async () => {
      render(<HealthInquiryForm />)
      
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' }
      })
      
      fireEvent.change(screen.getByLabelText(/symptoms/i), {
        target: { value: 'Headache' }
      })
      
      fireEvent.click(screen.getByRole('button', { name: /submit/i }))
      
      await waitFor(() => {
        expect(screen.getByText(/inquiry submitted/i)).toBeInTheDocument()
      })
    })

    it('should show validation errors', () => {
      render(<HealthInquiryForm />)
      
      fireEvent.click(screen.getByRole('button', { name: /submit/i }))
      
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/symptoms are required/i)).toBeInTheDocument()
    })
  })
}) 