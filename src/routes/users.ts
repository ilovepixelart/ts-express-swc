import { Router } from 'express'

import type { Request, Response } from 'express'
import User from '../models/User'

const router = Router()

/* GET users listing. */
router.get('/', async function (req: Request, res: Response) {
  const users = await User.find().cache('1 minute').exec()
  res.json(users)
})

export default router
