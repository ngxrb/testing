import { testString } from '../../public_api';
import { testStringArray } from '../data/test.data';
import { IsEmittedArgs } from './is-emitted-args.model';

describe('IsEmittedArgs', () => {
  let model: IsEmittedArgs;

  beforeEach(() => {
    model = new IsEmittedArgs(testString, testString);
  });

  it('.output exists', () => {
    expect(model.hasOwnProperty('output')).toBeTruthy();
  });

  it('.output is setted in the constructor', () => {
    expect(model.output).toEqual(testString);
  });

  it('.value exists', () => {
    expect(model.hasOwnProperty('value')).toBeTruthy();
  });

  it('.value is setted in the constructor', () => {
    expect(model.value).toEqual(testString);
  });

  it('.onMethod exists', () => {
    expect(model.hasOwnProperty('onMethod')).toBeFalsy();
    model.onMethod = testString;
    expect(model.hasOwnProperty('onMethod')).toBeTruthy();
  });

  it('.onMethodArgs exists', () => {
    expect(model.hasOwnProperty('onMethodArgs')).toBeFalsy();
    model.onMethodArgs = testStringArray;
    expect(model.hasOwnProperty('onMethodArgs')).toBeTruthy();
  });

  it('.onMethodArgs is an array', () => {
    model.onMethodArgs = testStringArray;
    expect(model.onMethodArgs instanceof Array).toBeTruthy();
  });
});
