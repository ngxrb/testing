import { testString } from '../data/test.data';
import { HttpTestHeaderArgs } from './http-test-header-args';

describe('HttpTestHeaderArgs', () => {
  let model: HttpTestHeaderArgs;

  beforeEach(() => {
    model = new HttpTestHeaderArgs(testString, testString, testString, testString, testString);
  });

  it('.name exists', () => {
    expect(model.hasOwnProperty('name')).toBeTruthy();
  });

  it('.name is setted in the constructor', () => {
    expect(model.name).toEqual(testString);
  });
});
