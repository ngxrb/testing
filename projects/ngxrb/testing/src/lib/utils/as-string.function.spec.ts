import { testModel, testNumber, testObservable, testString } from '../data/test.data';
import { asString } from './as-string.function';

describe('asString', () => {
  it('return a string as string', () => {
    expect(asString(testString)).toEqual(testString);
  });

  it('return a number as string', () => {
    expect(asString(testNumber)).toEqual(testNumber.toString());
  });

  it('return a boolean as string', () => {
    expect(asString(true)).toEqual('true');
  });

  it('return an object as string', () => {
    expect(asString(testModel)).toEqual(JSON.stringify(testModel));
  });

  it('return an Date as string', () => {
    const date: Date = new Date();
    expect(asString(date)).toEqual(date.toString());
  });

  it('return an observable value as string', () => {
    expect(asString(testObservable)).toEqual(testString);
  });

  it('return undefined as empty string', () => {
    expect(asString(undefined)).toEqual('');
  });

  it('return null as empty string', () => {
    expect(asString(null)).toEqual('');
  });
});
