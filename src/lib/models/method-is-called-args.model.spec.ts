import { testModel, testString } from '../data/test.data';
import { MethodIsCalledArgs } from './method-is-called-args.model';

describe('MethodIsCalledArgs', () => {
  let model: MethodIsCalledArgs;

  beforeEach(() => {
    model = {
      method: testString,
      onMethod: testString,
      object: testModel,
      methodArgs: [],
      onMethodArgs: []
    };
  });

  it('.method exists', () => {
    expect(model.hasOwnProperty('method')).toBeTruthy();
  });

  it('.onMethod exists', () => {
    expect(model.hasOwnProperty('onMethod')).toBeTruthy();
  });

  it('.object exists', () => {
    expect(model.hasOwnProperty('object')).toBeTruthy();
  });

  it('.methodArgs exists', () => {
    expect(model.hasOwnProperty('methodArgs')).toBeTruthy();
  });

  it('.onMethodArgs exists', () => {
    expect(model.hasOwnProperty('onMethodArgs')).toBeTruthy();
  });
});
