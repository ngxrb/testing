import { testString } from '../data/test.data';
import { HttpVerb } from '../enums/http-verb.enum';
import { HttpTestHeaderArgs } from './http-test-header-args';

describe('HttpTestHeaderArgs', () => {
  let model: HttpTestHeaderArgs;

  beforeEach(() => {
    model = new HttpTestHeaderArgs(testString, HttpVerb.GET, testString, testString, testString);
  });

  it('.name exists', () => {
    expect(model.hasOwnProperty('name')).toBeTruthy();
  });

  it('.name is setted in the constructor', () => {
    expect(model.name).toEqual(testString);
  });
});
