# option-types

Utility types for options-related TypeScript definitions.

This package doesn't have any runtime code. It only contains types.

### Motivation

Using [`exactOptionalPropertyTypes`](https://www.typescriptlang.org/tsconfig/#exactOptionalPropertyTypes) in TypeScript is great, except when you have a big object type with many optional properties. Manually adding `undefined` to every optional property type is annoying and error-prone.

Using conditional types and mapped types, we can automatically add `undefined` to every optional property type.

## Types

### `Option<T>`

Any type wrapped in `Option` can be assigned an `undefined` value. If the wrapped type is an object, its optional properties can also be assigned an `undefined` value. This type is recursive.

### `Options<T>`

When an object type is itself required, but it contains optional properties, this type can be used to ensure that the optional properties can be assigned an `undefined` value. This type is recursive, so nested object types are also affected.

### `OptionalKeys<T>`

Extract the keys of an object type that are optional. Note that a key is only considered “optional” if it was defined with a `?` in the type definition.

### `ShallowOptions<T>`

Ensure each optional property can be assigned an `undefined` value. Nested object types are not affected.
