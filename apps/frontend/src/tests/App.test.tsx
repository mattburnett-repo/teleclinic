import { render, screen } from '@testing-library/react'
import { App } from '../App'

describe('App', () => {
  it('should render the HealthInquiryForm', () => {
    render(<App />)
    expect(screen.getByTestId('health-inquiry-form')).toBeInTheDocument()
  })
}) 