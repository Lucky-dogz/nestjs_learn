import { Injectable } from '@nestjs/common'
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: 'tom',
      age: 12,
      breed: 'cat',
    },
  ]
  findAll(): Cat[] {
    return this.cats
  }
  findOne(name: string): Cat {
    return this.cats.find((c) => c.name === name) ?? null
  }
  create(cat: Cat) {
    if (this.cats.find((c) => c.name === cat.name)) {
      return '该猫已经存在'
    }
    this.cats.push(cat)
    return '添加成功'
  }
}
