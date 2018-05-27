import { testModel, testNumber, testString } from '../data/test.data';
import { Pk } from '../types/pk.type';
import { isPk } from './is-pk.function';

describe('isPk', () => {
  it('return false for a non Pk', () => {
    expect(isPk(true)).toBeFalsy();
    expect(isPk(testModel)).toBeFalsy();
  });

  it('return true for a Pk', () => {
    const pk: Pk = testNumber;
    expect(isPk(pk)).toBeTruthy();
  });

  it('return true for a number', () => {
    expect(isPk(testString)).toBeTruthy();
  });

  it('return true for a string', () => {
    expect(isPk(testNumber)).toBeTruthy();
  });
});
