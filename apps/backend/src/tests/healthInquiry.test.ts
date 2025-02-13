import { utils, testData } from './shared';

describe('Health Inquiry', () => {
  it('should create a new health inquiry', async () => {
    const response = await utils.createTestInquiry();
    
    expect(response.id).toBeDefined();
    expect(response.patientName).toBe(testData.patient.name);
    expect(response.status).toBe('pending');
  });

  it('should match inquiry with available doctor', async () => {
    const inquiry = await utils.createTestInquiry();
    
    const match = await utils.matchDoctorToInquiry(inquiry.id);
    
    expect(match.doctorId).toBeDefined();
    expect(match.inquiryId).toBe(inquiry.id);
  });

  it('should list all inquiries for a patient', async () => {
    const patientName = testData.patient.name;
    const inquiries = await utils.getPatientInquiries(patientName);
    
    expect(Array.isArray(inquiries)).toBe(true);
    expect(inquiries[0].patientName).toBe(patientName);
  });

  it('should update inquiry status after doctor match', async () => {
    const inquiry = await utils.createTestInquiry();
    
    await utils.matchDoctorToInquiry(inquiry.id);
    const updated = await utils.getInquiry(inquiry.id);
    
    expect(updated.status).toBe('matched');
  });
}); 