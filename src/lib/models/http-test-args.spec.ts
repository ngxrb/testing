import { testString } from '../data/test.data';
import { HttpTestArgs } from './http-test-args';

describe('HttpTestArgs', () => {
  let model: HttpTestArgs;

  beforeEach(() => {
    model = new HttpTestArgs(testString, testString, testString, testString);
  });

  it('.url exists', () => {
    expect(model.hasOwnProperty('url')).toBeTruthy();
  });

  it('.url is setted in the constructor', () => {
    expect(model.url).toEqual(testString);
  });
});
