import { test, expectTypeOf } from 'vitest'
import { Option, Options, OptionalKeys } from '../mod.js'

test('Option', () => {
  // Primitive type
  expectTypeOf<Option<string>>().toEqualTypeOf<string | undefined>()

  // Array type
  expectTypeOf<Option<string[]>>().toEqualTypeOf<string[] | undefined>()

  // Object type without optional key
  expectTypeOf<
    Option<{
      a: string
    }>
  >().toEqualTypeOf<
    | {
        a: string
      }
    | undefined
  >()

  // Object type with optional key
  expectTypeOf<
    Option<{
      a?: string
      b: string
    }>
  >().toEqualTypeOf<
    | {
        a?: string | undefined
        b: string
      }
    | undefined
  >()

  // Nested object type
  expectTypeOf<
    Option<{
      a: { b?: string; c: string }
    }>
  >().toEqualTypeOf<
    | {
        a: { b?: string | undefined; c: string }
      }
    | undefined
  >()
})

test('Options', () => {
  expectTypeOf<
    Options<{
      a?: string
      b: string
    }>
  >().toEqualTypeOf<{
    a?: string | undefined
    b: string
  }>()

  // Nested object type
  expectTypeOf<
    Options<{
      a: { b?: string; c: string }
    }>
  >().toEqualTypeOf<{
    a: { b?: string | undefined; c: string }
  }>()
})

test('OptionalKeys', () => {
  expectTypeOf<
    OptionalKeys<{
      a?: string
      b: string
      c: string | undefined
      d: never
    }>
  >().toEqualTypeOf<'a'>()
})
