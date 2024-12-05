import { Entity } from '../entites/entity'
import { RepositoryInterface } from './repository-contracts'

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  async findAll(): Promise<E[]> {
    return this.items
  }
  async findById(id: string): Promise<E> {
    const _id = `${id}`
    const entity = this.items.find(() => entity.id === _id)
    if (!entity) throw new Error('Entity not found')

    return entity
  }
  async insert(entity: E): Promise<void> {
    this.items.push(entity)
  }
  update(entity: E): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  items: E[] = []
}
