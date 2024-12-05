import { Entity } from '../entites/entity'

export interface RepositoryInterface<E extends Entity> {
  findAll(): Promise<E[]>
  findById(id: string): Promise<E>
  insert(entity: E): Promise<void>
  update(entity: E): Promise<void>
  delete(id: string): Promise<void>
}
