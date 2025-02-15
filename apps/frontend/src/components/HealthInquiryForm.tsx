import React from 'react'

export function HealthInquiryForm() {
  return (
    <form>
      <label>
        Name:
        <input type="text" aria-label="name" />
      </label>
      <label>
        Symptoms:
        <input type="text" aria-label="symptoms" />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
} 