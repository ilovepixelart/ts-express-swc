import { Router } from 'express'

import type { Request, Response, NextFunction } from 'express'

const router = Router()

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource')
})

export default router
