import { testNumber, testString } from '../data/test.data';
import { HttpTestStatusArgs } from './http-test-status-args';

describe('HttpTestStatusArgs', () => {
  let model: HttpTestStatusArgs;

  beforeEach(() => {
    model = new HttpTestStatusArgs(testString, testString, testString, testString, testNumber);
  });

  it('.status exists', () => {
    expect(model.hasOwnProperty('status')).toBeTruthy();
  });

  it('.status is setted in the constructor', () => {
    expect(model.status).toEqual(testNumber);
  });
});
