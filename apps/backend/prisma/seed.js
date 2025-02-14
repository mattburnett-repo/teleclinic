// const { PrismaClient } = require('@prisma/client')
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.healthInquiry.create({
    data: {
      patientName: 'Anna Mueller',
      symptoms: 'Headache',
      status: 'pending'
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 