import { testString } from '../data/test.data';
import { HttpTestErrorArgs } from './http-test-error-args';

describe('HttpTestErrorArgs', () => {
  let model: HttpTestErrorArgs;

  beforeEach(() => {
    model = new HttpTestErrorArgs(testString, testString, testString, testString);
  });

  it('.error exists', () => {
    expect(model.hasOwnProperty('error')).toBeFalsy();
    model.error = testString;
    expect(model.hasOwnProperty('error')).toBeTruthy();
  });
});
