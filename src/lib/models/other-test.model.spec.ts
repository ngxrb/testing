import { testNumber, testString } from '../data/test.data';
import { OtherTestModel } from './other-test.model';

describe('OtherTestModel', () => {
  let model: OtherTestModel;

  beforeEach(() => {
    model = new OtherTestModel(testString);
  });

  it('.surname exists', () => {
    expect(model.hasOwnProperty('surname')).toBeTruthy();
  });

  it('.surname is setted in the constructor', () => {
    expect(model.id).toBeUndefined();
    expect(model.surname).toEqual(testString);
  });

  it('.id and .surname are setted in the constructor', () => {
    model = new OtherTestModel(testNumber, testString);
    expect(model.id).toEqual(testNumber);
    expect(model.surname).toEqual(testString);
  });
});
