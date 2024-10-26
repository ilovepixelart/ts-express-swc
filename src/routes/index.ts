import { Router } from 'express'

import type { Request, Response } from 'express'

const router = Router()

/* GET home page. */
router.get('/', (_req: Request, res: Response) => {
  res.render('index', { title: 'Express' })
})

export default router
