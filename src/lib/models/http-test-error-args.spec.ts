import { testString } from '../data/test.data';
import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestErrorArgs } from './http-test-error-args';

describe('HttpTestErrorArgs', () => {
  let model: HttpTestErrorArgs;

  beforeEach(() => {
    model = new HttpTestErrorArgs(testString, HttpVerb.GET, testString, testString);
  });

  it('.error exists', () => {
    expect(model.hasOwnProperty('error')).toBeFalsy();
    model.error = testString;
    expect(model.hasOwnProperty('error')).toBeTruthy();
  });
});
