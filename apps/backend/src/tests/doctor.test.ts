import { utils, testData } from './shared';

describe('Doctor', () => {
  it('should list available doctors', async () => {
    const doctors = await utils.getAvailableDoctors();
    
    expect(Array.isArray(doctors)).toBe(true);
    expect(doctors[0]).toHaveProperty('id');
    expect(doctors[0]).toHaveProperty('speciality');
    expect(doctors[0]).toHaveProperty('availability');
  });

  it('should match doctor based on speciality', async () => {
    const inquiry = {
      symptoms: 'Migraine',
      specialityNeeded: 'Neurology'
    };
    
    const match = await utils.findMatchingDoctor(inquiry);
    
    expect(match.doctorId).toBeDefined();
    expect(match.speciality).toBe(inquiry.specialityNeeded);
  });

  it('should update doctor availability after booking', async () => {
    const doctorId = testData.doctor.id;
    const timeSlot = '2024-03-20T10:00:00Z';
    
    await utils.bookTimeSlot(doctorId, timeSlot);
    const availability = await utils.getDoctorAvailability(doctorId);
    
    expect(availability).not.toContain(timeSlot);
  });
}); 