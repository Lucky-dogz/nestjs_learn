/*
  create-cat.dto.ts
*/
import { CreateCatDto } from './create-cat.dto'
export class ListAllEntities {
  limit: number
  page: number
  catsList: Array<CreateCatDto>
}
