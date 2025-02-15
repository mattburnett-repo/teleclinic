// const { PrismaClient } = require('@prisma/client')
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create test doctor
  const doctor = await prisma.doctor.create({
    data: {
      name: 'Dr. Smith',
      speciality: 'Neurology',
      availability: ['2024-03-20T10:00:00Z']
    }
  });

  // Create test inquiry
  await prisma.healthInquiry.create({
    data: {
      patientName: 'Anna Mueller',
      symptoms: 'Headache',
      status: 'pending'
    }
  });
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 