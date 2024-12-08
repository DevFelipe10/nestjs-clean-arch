import { Entity } from '../entites/entity'
import { InMemoryRepository } from './in-memory.repository'
import {
  SearchableRepositoryInterface,
  SearchParams,
  SearchResult,
} from './searchable-repository-contracts'

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SearchableRepositoryInterface<E, any, any>
{
  async search(props: SearchParams): Promise<SearchResult<E>> {
    throw new Error('Method not implemented.')
  }

  protected abstract applyFilter(item: E[], filter: string | null): Promise<E[]>

  protected async applSort(
    item: E[],
    filter: string | null,
    sortDir: string | null,
  ): Promise<E[]> {}

  protected async applPaginate(
    item: E[],
    page: SearchParams['page'],
    perPage: SearchParams['perPage'],
  ): Promise<E[]> {}
}
