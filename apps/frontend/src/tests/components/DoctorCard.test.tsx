import { render, screen, fireEvent } from '@testing-library/react'
import { DoctorCard } from '../../components/DoctorCard'
import { TEST_DOCTOR } from '../../mocks/doctors'

describe('DoctorCard', () => {
  it('should display doctor information', () => {
    render(<DoctorCard doctor={TEST_DOCTOR} />)
    
    expect(screen.getByText(TEST_DOCTOR.name)).toBeInTheDocument()
    expect(screen.getByText(TEST_DOCTOR.speciality)).toBeInTheDocument()
    expect(screen.getByText(`${TEST_DOCTOR.experience} years experience`)).toBeInTheDocument()
    expect(screen.getByText(TEST_DOCTOR.rating.toString())).toBeInTheDocument()
  })

  it('should display doctor image when provided', () => {
    render(<DoctorCard doctor={TEST_DOCTOR} />)
    
    const image = screen.getByAltText(TEST_DOCTOR.name)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', TEST_DOCTOR.imageUrl)
  })

  it('should show available time slots as buttons', () => {
    render(<DoctorCard doctor={TEST_DOCTOR} />)
    
    TEST_DOCTOR.availability.forEach(slot => {
      const time = new Date(slot).toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit'
      })
      expect(screen.getByRole('button', { name: time })).toBeInTheDocument()
    })
  })

  it('should call onSelect when time slot is clicked', () => {
    const handleSelect = jest.fn()
    render(<DoctorCard doctor={TEST_DOCTOR} onSelect={handleSelect} />)
    
    const firstTimeSlot = screen.getAllByRole('button')[0]
    fireEvent.click(firstTimeSlot)
    
    expect(handleSelect).toHaveBeenCalled()
  })
}) 