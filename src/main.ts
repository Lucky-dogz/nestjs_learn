import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Cors } from './lib/Cors'
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter'
import { BadRequestException, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // 解决跨域
  new Cors(app)
  // 验证参数是否符合规范
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //保留不被装饰器装饰的属性
      forbidNonWhitelisted: true, // 对非白名单的属性抛出异常
    })
  )
  // 注册 HttpExceptionFilter 过滤器处理异常
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000)
}
bootstrap()
