import { IsString, IsInt } from 'class-validator'
/*
  create-cat.dto.ts
*/
export class CreateCatDto {
  @IsString()
  name: string
  @IsInt()
  age: number
  @IsString()
  breed: string
}
