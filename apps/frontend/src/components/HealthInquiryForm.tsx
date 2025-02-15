import React from 'react'

export function HealthInquiryForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState<string[]>([])
  const [name, setName] = React.useState('')
  const [symptoms, setSymptoms] = React.useState('')

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const newErrors = []
    if (!name) newErrors.push('Name is required')
    if (!symptoms) newErrors.push('Symptoms are required')
    
    if (newErrors.length === 0) {
      setSubmitted(true)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" aria-label="name" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Symptoms:
        <input type="text" aria-label="symptoms" value={symptoms} onChange={e => setSymptoms(e.target.value)} />
      </label>
      <button type="button" onClick={handleSubmit}>Submit</button>
      {submitted && <div>Inquiry submitted</div>}
      {errors.map(error => <div key={error}>{error}</div>)}
    </form>
  )
} 