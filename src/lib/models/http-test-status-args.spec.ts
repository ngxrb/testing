import { testNumber, testString } from '../data/test.data';
import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestStatusArgs } from './http-test-status-args';

describe('HttpTestStatusArgs', () => {
  let model: HttpTestStatusArgs;

  beforeEach(() => {
    model = new HttpTestStatusArgs(testString, HttpVerb.GET, testString, testString, testNumber);
  });

  it('.status exists', () => {
    expect(model.hasOwnProperty('status')).toBeTruthy();
  });

  it('.status is setted in the constructor', () => {
    expect(model.status).toEqual(testNumber);
  });
});
