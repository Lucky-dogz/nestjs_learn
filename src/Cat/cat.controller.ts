import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
  UseInterceptors,
} from '@nestjs/common'
import { CreateCatDto, UpdateCatDto } from './dto'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'
import { TransformInterceptor } from 'src/common/interceptor/transform.interceptor'

// 拦截器
@UseInterceptors(TransformInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}
  // 获取所有
  @Get('/all')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll()
  }
  // 查看一个
  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Cat> {
    return this.catsService.findOne(name)
  }
  // 增加
  @Post('add')
  async create(@Body() createCatDto: CreateCatDto, @Request() req): Promise<string> {
    return this.catsService.create(createCatDto)
  }
  // 修改
  @Put('/put/:name')
  update(@Param('name') name: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${name} cat`
  }
  // 删除
  @Delete('/del/:name')
  remove(@Param('name') name: string) {
    return `This action removes a #${name} cat`
  }
}
