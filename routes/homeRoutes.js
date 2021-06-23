// external imports
import * as homeControllers from '../controllers/homeControllers.js'

import express from 'express'

const router = express.Router()


// routers
router.get('/', homeControllers.index)

export default router