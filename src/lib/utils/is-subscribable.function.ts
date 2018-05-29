import { Subscribable } from 'rxjs';

/**
 * Check if an object implements Subscribable.
 *
 * @param value The value to check.
 * @returns True if the object implements Subscribable. False otherwise.
 */
export function isSubscribable<T>(value: any): value is Subscribable<T> {
  return value.subscribe !== undefined;
}
