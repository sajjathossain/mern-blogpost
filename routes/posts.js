// external imports
import * as postsControllers from '../controllers/postsControllers.js'

import express from 'express'

const router = express.Router()


// routers
router.get('/', postsControllers.index)
router.post('/create', postsControllers.createPost)

export default router