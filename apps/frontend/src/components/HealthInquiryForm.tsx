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
    <form 
      className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
      data-testid="health-inquiry-form"
    >
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center tracking-tight">Submit Your Inquiry</h2>
      <label>
        <span className="block text-gray-600 text-sm font-medium mb-2">Name:</span>
        <input 
          type="text" 
          aria-label="name" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6 text-gray-700"
        />
      </label>
      <label>
        <span className="block text-gray-600 text-sm font-medium mb-2">Symptoms:</span>
        <input 
          type="text" 
          aria-label="symptoms" 
          value={symptoms} 
          onChange={e => setSymptoms(e.target.value)} 
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6 text-gray-700"
        />
      </label>
      <button 
        type="button" 
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Submit
      </button>
      {submitted && (
        <div className="mt-6 p-3 bg-green-50 text-green-700 rounded-lg text-center font-medium">
          Inquiry submitted
        </div>
      )}
      {errors.map(error => (
        <div key={error} className="mt-2 text-red-500 text-sm text-center">
          {error}
        </div>
      ))}
    </form>
  )
} 