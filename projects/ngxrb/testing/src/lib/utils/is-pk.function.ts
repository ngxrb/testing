import { Pk } from '../types/pk.type';

/**
 * Check if a value is a Pk.
 *
 * @param value The value to check.
 * @returns True if the value is a Pk. False otherwise.
 */
export function isPk(value: any): value is Pk {
  return typeof value === 'string' || typeof value === 'number';
}
