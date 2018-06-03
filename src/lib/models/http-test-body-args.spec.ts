import { testString } from '../data/test.data';
import { HttpTestBodyArgs } from './http-test-body-args';

describe('HttpTestBodyArgs', () => {
  let model: HttpTestBodyArgs;

  beforeEach(() => {
    model = new HttpTestBodyArgs(testString, testString, testString, testString, testString);
  });

  it('.body exists', () => {
    expect(model.hasOwnProperty('body')).toBeTruthy();
  });

  it('.body is setted in the constructor', () => {
    expect(model.body).toEqual(testString);
  });
});
