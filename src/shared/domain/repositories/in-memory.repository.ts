import { Entity } from '../entites/entity'
import { NotFoundError } from '../errors/not-found-error'
import { RepositoryInterface } from './repository-contracts'

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  items: E[] = []

  async findAll(): Promise<E[]> {
    return this.items
  }
  async findById(id: string): Promise<E> {
    return this._get(id)
  }
  async insert(entity: E): Promise<void> {
    this.items.push(entity)
  }
  async update(entity: E): Promise<void> {
    await this._get(entity.id)

    const index = await this._getIndex(entity.id)

    this.items[index] = entity
  }

  async delete(id: string): Promise<void> {
    await this._get(id)

    const index = await this._getIndex(id)

    this.items.splice(index, 1)
  }

  protected async _get(id: string): Promise<E> {
    const _id = `${id}`
    const entity = this.items.find(entity => entity.id === _id)

    if (!entity) throw new NotFoundError('Entity not found')

    return entity
  }

  protected async _getIndex(id: string): Promise<number> {
    const _id = `${id}`
    const entityId = this.items.findIndex(entity => entity.id === _id)

    if (!entityId) throw new NotFoundError('Entity not found')

    return entityId
  }
}
