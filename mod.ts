// Narrow a type T to be an object type, but not a function or array.
type ExtractObject<T> = Exclude<Extract<T, object>, Function | readonly any[]>

/**
 * Ensure optional properties can be assigned an `undefined` value.
 * This type is recursive, so nested object types are also affected.
 *
 * Note: When using this type, you shouldn't manually add `undefined`
 * to your property types. This type does it for you!
 */
export type Options<T extends object> = {
  [K in keyof T]: T[K] extends infer TValue
    ?
        | (TValue extends ExtractObject<TValue> ? Options<TValue> : TValue)
        | (K extends OptionalKeys<T> ? undefined : never)
    : never
}

/**
 * Extract the keys of the object that are optional.
 */
export type OptionalKeys<T extends object> = keyof T extends infer K
  ? K extends keyof T
    ? Omit<T, K> extends T
      ? K
      : never
    : never
  : never

/**
 * Ensure a type can be assigned an `undefined` value. If an object
 * type is wrapped, its optional properties can also be assigned an
 * `undefined` value. This type is recursive.
 */
export type Option<T> =
  | (T extends ExtractObject<T> ? Options<T> : T)
  | undefined
