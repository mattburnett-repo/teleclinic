import React from 'react'
import type { Doctor } from '../types/doctor'

interface DoctorCardProps {
  doctor: Doctor
  onSelect?: () => void
}

export function DoctorCard({ doctor, onSelect }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        {doctor.imageUrl && (
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.speciality}</p>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-yellow-400">★</span>
            <span className="text-gray-600">{doctor.rating}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{doctor.experience} years experience</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900">Available Times</h4>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {doctor.availability.map(slot => (
            <button
              key={slot}
              onClick={onSelect}
              className="px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {new Date(slot).toLocaleTimeString('en-US', { 
                hour: '2-digit',
                minute: '2-digit'
              })}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 