import { EntityValidationError } from '@/shared/domain/errors/validation-error'
import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'

describe('UserEntity integration tests', () => {
  describe('Contructor method', () => {
    it('should throw an error when creating a user with invalid name', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        name: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        name: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        name: 'a'.repeat(256),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should throw an error when creating a user with invalid email', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        email: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        email: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should throw an error when creating a user with invalid password', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        password: '',
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        password: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        password: 'a'.repeat(101),
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should throw an error when creating a user with invalid createdAt', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        createdAt: '2024' as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)

      props = {
        ...UserDataBuilder({}),
        createdAt: 10 as any,
      }

      expect(() => new UserEntity(props)).toThrow(EntityValidationError)
    })

    it('should a valid user', () => {
      expect.assertions(0) // Não espero erros aqui

      const props: UserProps = {
        ...UserDataBuilder({}),
      }

      new UserEntity(props)
    })
  })

  describe('Update method', () => {
    it('should throw an error when update a user with invalid name', () => {
      const entity = new UserEntity(UserDataBuilder({}))
      expect(() => entity.update(null)).toThrow(EntityValidationError)
      expect(() => entity.update('')).toThrow(EntityValidationError)
      expect(() => entity.update(5 as any)).toThrow(EntityValidationError)
      expect(() => entity.update('a'.repeat(256))).toThrow(
        EntityValidationError,
      )
    })

    it('should a valid user', () => {
      expect.assertions(0) // Não espero erros aqui

      const props: UserProps = {
        ...UserDataBuilder({}),
      }

      const entity = new UserEntity(props)

      entity.update('another name')
    })
  })

  describe('UpdatePassword method', () => {
    it('should a invalid user using password field', () => {
      const entity = new UserEntity(UserDataBuilder({}))
      expect(() => entity.updatePassword(null)).toThrow(EntityValidationError)
      expect(() => entity.updatePassword('')).toThrow(EntityValidationError)
      expect(() => entity.updatePassword(5 as any)).toThrow(
        EntityValidationError,
      )
      expect(() => entity.updatePassword('a'.repeat(101))).toThrow(
        EntityValidationError,
      )
    })

    it('should a valid user', () => {
      expect.assertions(0) // Não espero erros aqui

      const props: UserProps = {
        ...UserDataBuilder({}),
      }

      const entity = new UserEntity(props)

      entity.updatePassword('another password')
    })
  })
})
