import { testNumber, testString } from '../data/test.data';
import { TestModel } from './test.model';

describe('TestModel', () => {
  let model: TestModel;

  beforeEach(() => {
    model = new TestModel(testString);
  });

  it('.name exists', () => {
    expect(model.hasOwnProperty('name')).toBeTruthy();
  });

  it('.name is setted in the constructor', () => {
    expect(model.id).toBeUndefined();
    expect(model.name).toEqual(testString);
  });

  it('.id and .name are setted in the constructor', () => {
    model = new TestModel(testNumber, testString);
    expect(model.id).toEqual(testNumber);
    expect(model.name).toEqual(testString);
  });
});
