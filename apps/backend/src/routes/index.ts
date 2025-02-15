import { Router } from 'express'
import healthInquiryRoutes from './healthInquiry'
import doctorRoutes from './doctor'
import appointmentRoutes from './appointment'
import patientRecordRoutes from './patientRecord'
import { errorHandler } from '../middleware/errorHandler'

const router = Router()

router.use('/api/inquiries', healthInquiryRoutes)
router.use('/api/doctors', doctorRoutes)
router.use('/api/appointments', appointmentRoutes)
router.use('/api/patients', patientRecordRoutes)

// Error handling middleware
router.use(errorHandler)

export default router 