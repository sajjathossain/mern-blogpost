// external imports
import * as postsControllers from '../controllers/postsControllers.js'

import express from 'express'

const router = express.Router()


// routers
router.get('/', postsControllers.index)
router.post('/create', postsControllers.createPost)
router.patch('/create/:id', postsControllers.updatePost)
router.get('/getPost', postsControllers.getPost)

export default router