import express from 'express'

import { postcomment,getcomment,deletcomment,editcomment } from '../Controllers/Comment.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.post('/post',auth,postcomment)
router.get('/get', getcomment);
router.delete('/delete/:id',auth,deletcomment)
router.patch('/edit/:id',auth,editcomment)

export default router;