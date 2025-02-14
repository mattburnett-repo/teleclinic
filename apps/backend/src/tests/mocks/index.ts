// Single source of mock data
export const mockData = {
  healthInquiry: {
    id: '123',
    patientName: 'Anna Mueller',
    symptoms: 'Headache',
    status: 'pending' as const
  },
  doctor: {
    id: 'd1',
    name: 'Dr. Smith',
    speciality: 'Neurology',
    availability: ['2024-03-20T10:00:00Z']
  }
};

// Service mocks
export const mockServices = {
  createInquiry: jest.fn().mockResolvedValue(mockData.healthInquiry),
  matchDoctorToInquiry: jest.fn().mockResolvedValue({
    doctorId: mockData.doctor.id,
    inquiryId: mockData.healthInquiry.id
  })
}; 