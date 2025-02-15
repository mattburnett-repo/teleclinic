import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { HealthInquiryForm } from '../../components/HealthInquiryForm'
import { SYMPTOMS, type SymptomKey } from '../../constants/symptoms'
import { HealthInquiryProvider } from '../../context/HealthInquiryContext'

describe('HealthInquiryForm', () => {
  const renderWithProvider = () => {
    render(
      <HealthInquiryProvider>
        <HealthInquiryForm />
      </HealthInquiryProvider>
    )
  }

  it('should render all symptoms in dropdown', () => {
    renderWithProvider()
    
    // Open dropdown
    const dropdown = screen.getByLabelText(/symptoms/i)
    fireEvent.click(dropdown)
    
    // Verify all symptoms are present
    Object.values(SYMPTOMS).forEach(symptom => {
      expect(screen.getByText(symptom.label)).toBeInTheDocument()
    })
  })

  it('should submit form with selected symptom', async () => {
    renderWithProvider()
    
    // Fill name
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    })
    
    // Select symptom
    fireEvent.change(screen.getByLabelText(/symptoms/i), {
      target: { value: SYMPTOMS.HEADACHE.value }
    })
    
    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/inquiry submitted/i)).toBeInTheDocument()
    })
  })

  it('should show validation error for empty symptom selection', () => {
    renderWithProvider()
    
    // Fill only name
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    })
    
    // Submit without selecting symptom
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))
    
    expect(screen.getByText(/symptoms are required/i)).toBeInTheDocument()
  })

  it('should update selected symptom when choosing from dropdown', () => {
    renderWithProvider()
    
    const dropdown = screen.getByLabelText(/symptoms/i)
    
    // Select a symptom
    fireEvent.change(dropdown, {
      target: { value: SYMPTOMS.HEADACHE.value }
    })
    
    // Verify the dropdown shows the selected symptom
    expect(dropdown).toHaveValue(SYMPTOMS.HEADACHE.value)
  })
}) 