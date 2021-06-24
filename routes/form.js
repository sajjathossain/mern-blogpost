import * as formControllers from '../controllers/formControllers.js'

import express from 'express'

const router = express.Router()

router.get('/create', formControllers.createPost)

export default router