import type { Doctor } from '../types/doctor'

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Sarah Wilson',
    speciality: 'Neurology',
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    availability: [
      '2024-03-21T09:00:00Z',
      '2024-03-21T10:00:00Z',
      '2024-03-21T14:00:00Z',
    ],
    rating: 4.8,
    experience: 12
  },
  {
    id: 'doc-2',
    name: 'Dr. Michael Chen',
    speciality: 'Neurology',
    imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    availability: [
      '2024-03-21T11:00:00Z',
      '2024-03-21T13:00:00Z',
      '2024-03-21T15:00:00Z',
    ],
    rating: 4.9,
    experience: 15
  }
]

export const TEST_DOCTOR = MOCK_DOCTORS[0] 