import { testNumber, testNumber2, testObservable, testString } from '../data/test.data';
import { compare } from './compare.function';

describe('compare ', () => {
  it('return false if args are not equals', () => {
    expect(compare(testNumber, testNumber2)).toBeFalsy();
  });

  it('return true if args are equals', () => {
    expect(compare(testString, testString)).toBeTruthy();
  });

  it('return true if args values are equals', () => {
    expect(compare(testString, testObservable)).toBeTruthy();
  });
});
