import type { HealthInquiry } from '../types';
import { mockData } from './mocks';

export const utils = {
  createTestInquiry: async (): Promise<HealthInquiry> => {
    return mockData.healthInquiry;
  },
  
  matchDoctorToInquiry: async (inquiryId: string) => {
    return {
      doctorId: mockData.doctor.id,
      inquiryId
    };
  },

  getPatientInquiries: async (patientName: string) => {
    return [mockData.healthInquiry];
  },

  getInquiry: async (id: string) => {
    return {
      ...mockData.healthInquiry,
      id,
      status: 'matched'
    };
  },

  getAvailableDoctors: async () => {
    return [mockData.doctor];
  },

  findMatchingDoctor: async (inquiry: HealthInquiry) => {
    return {
      doctorId: mockData.doctor.id,
      speciality: 'Neurology'
    };
  },

  bookTimeSlot: async (doctorId: string, timeSlot: string) => {
    // Update mock data to remove the booked slot
    mockData.doctor.availability = mockData.doctor.availability.filter(
      slot => slot !== timeSlot
    );
    
    return {
      doctorId,
      time: timeSlot,
      confirmed: true
    };
  },

  getDoctorAvailability: async (doctorId: string) => {
    return mockData.doctor.availability;
  },

  getPatientRecord: async (patientName: string) => {
    return {
      patientName,
      medicalHistory: [],
      lastVisit: null,
      inquiries: [mockData.healthInquiry]
    };
  },

  getPatientVisits: async (patientName: string) => {
    return [{
      doctorName: mockData.doctor.name,
      date: '2024-03-20T10:00:00Z',
      reason: 'Headache'
    }];
  },

  scheduleAppointment: async (doctorId: string, inquiryId: string) => {
    return {
      id: 'apt1',
      doctorId,
      inquiryId,
      time: '2024-03-20T10:00:00Z',
      status: 'scheduled',
      confirmed: true
    };
  },

  getDoctorTimeSlots: async (doctorId: string) => {
    return [{
      time: '2024-03-20T10:00:00Z',
      available: true
    }];
  }
};

export const testData = mockData; 