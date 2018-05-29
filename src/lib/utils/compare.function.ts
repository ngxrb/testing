import { asString } from './as-string.function';

/**
 * Check if values are equals.
 *
 * @param first The first value to check.
 * @param second The second value to check.
 * @returns True if both values are equals. False otherwise.
 */
export function compare(first: any, second: any): boolean {
  return asString(first) === asString(second);
}
