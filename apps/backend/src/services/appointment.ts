import { PrismaClient } from '@prisma/client'
import type { Appointment, TimeSlot } from '../types'

const prisma = new PrismaClient()

export async function scheduleAppointment(doctorId: string, inquiryId: string): Promise<Appointment> {
  return await prisma.$transaction(async (tx) => {
    // First check if doctor exists and has availability
    const doctor = await tx.doctor.findUnique({
      where: { 
        id: doctorId
      },
      select: {
        id: true,
        availability: true
      }
    })
    
    if (!doctor || doctor.availability.length === 0) throw new Error('No available time slots')
    
    // Create appointment with first available time slot
    const appointment = await tx.appointment.create({
      data: {
        doctorId,
        inquiryId,
        time: doctor.availability[0],
        status: 'scheduled',
        confirmed: false
      }
    })
    
    // Remove used time slot from doctor's availability
    await tx.doctor.update({
      where: { id: doctorId },
      data: {
        availability: {
          set: doctor.availability.filter(slot => slot !== appointment.time)
        }
      }
    })
    
    return appointment as Appointment
  })
}

export async function getDoctorTimeSlots(doctorId: string): Promise<TimeSlot[]> {
  const doctor = await prisma.doctor.findUnique({
    where: { id: doctorId }
  })
  
  if (!doctor) throw new Error('Doctor not found')
  
  return doctor.availability.map(time => ({
    time,
    available: true
  }))
}

export async function confirmAppointment(appointmentId: string): Promise<Appointment> {
  const appointment = await prisma.appointment.update({
    where: { id: appointmentId },
    data: { confirmed: true }
  })
  
  return appointment as Appointment
}

export async function getAppointment(appointmentId: string): Promise<Appointment> {
  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId }
  })
  
  if (!appointment) throw new Error('Appointment not found')
  return appointment as Appointment
} 