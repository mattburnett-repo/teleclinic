import { post } from './client'
import type { Appointment } from '../types/appointment'

export async function createAppointment(data: { 
  doctorId: string
  patientId: string
  timeSlot: string 
}) {
  return post<Appointment>('/appointments', data)
} 