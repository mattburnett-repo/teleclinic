import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { HealthInquiryForm } from '../components/HealthInquiryForm'
import { SYMPTOMS, type SymptomKey } from '../constants/symptoms'
import { HealthInquiryProvider } from '../context/HealthInquiryContext'

describe('Health Inquiry Flow', () => {
  describe('HealthInquiryForm', () => {
    it('should submit patient symptoms', async () => {
      render(
        <HealthInquiryProvider>
          <HealthInquiryForm />
        </HealthInquiryProvider>
      )
      
      fireEvent.change(screen.getByLabelText(/name/i), {
        target: { value: 'John Doe' }
      })
      
      // Select symptom from dropdown
      fireEvent.change(screen.getByLabelText(/symptoms/i), {
        target: { value: SYMPTOMS.HEADACHE.value }
      })
      
      fireEvent.click(screen.getByRole('button', { name: /submit/i }))
      
      await waitFor(() => {
        expect(screen.getByText('Inquiry submitted')).toBeInTheDocument()
      })
    })

    it('should show validation errors', () => {
      render(
        <HealthInquiryProvider>
          <HealthInquiryForm />
        </HealthInquiryProvider>
      )
      
      fireEvent.click(screen.getByRole('button', { name: /submit/i }))
      
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/symptoms are required/i)).toBeInTheDocument()
    })
  })
}) 