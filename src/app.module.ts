import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './Cat/cats.module'
import { LoggerMiddleware, Logger } from './common/middleware/logger.middleware'
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})

/* 中间件不能在 @Module() 装饰器中列出。我们必须使用模块类的 configure() 方法来设置它们。
包含中间件的模块必须实现 NestModule 接口。我们将 LoggerMiddleware 设置在 ApplicationModule 层上。 */
export class AppModule implements NestModule {
  /* MiddlewareConsumer 是一个帮助类。
  它提供了几种内置方法来管理中间件。他们都可以被简单地链接起来。 */
  configure(consumer: MiddlewareConsumer) {
    // 为CatsController中定义的/cats路由处理程序设置了LoggerMiddleware
    consumer.apply(Logger).forRoutes('cats')
  }
}
