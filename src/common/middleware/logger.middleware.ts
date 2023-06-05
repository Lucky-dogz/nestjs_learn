import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...')
    next()
  }
}

// 函数式中间件---没有成员，没有额外的方法，没有依赖关系
export function Logger(req, res, next) {
  console.log(`Request...`)
  next()
}
