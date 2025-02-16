# Reusable Patterns from TeleClinic Project

## Table of Contents
1. Frontend API Layer
2. React Context Pattern
3. API Integration Pattern
4. Test Setup Pattern
5. Component Test Pattern

## 1. Frontend API Layer
\```typescript
// api/client.ts - Base API Client
const API_BASE = '/api'  // Simple, consistent base URL

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

// Type-safe request handlers
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new ApiError(response.status, error.message || 'An error occurred')
  }
  return response.json()
}

// ... rest of the content ...
\```

[Rest of the content as shown above] 