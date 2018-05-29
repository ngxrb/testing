import { toJS } from 'mobx';
import { isSubscribable } from './is-subscribable.function';

/**
 * Convert a value to plain string.
 *
 * This function returns the more clean and meaningful string version of the value, not the standard
 * [object Object] string or the package around an complex objects that holds a value, like the
 * Observables.
 * @param value The value to convert.
 * @returns An empty string if null or undefined. The value as string otherwise.
 */
export function asString<T>(value: T): string {
  if (value == null) {
    return '';
  }
  if (typeof value === 'object') {
    return objectAsString(value);
  }

  return (value as {}).toString();
}

/**
 * Convert an object to string.
 *
 * @param value The object to convert.
 * @returns The object as a meaningful string.
 */
function objectAsString<T>(value: T): string {
  let newString: string = '';
  if (isSubscribable(value)) {
    value.subscribe((next: {}) => {
      newString = asString(next);
    });
  } else {
    newString = value instanceof Date ? value.toString() : JSON.stringify(toJS(value));
  }

  return newString;
}
