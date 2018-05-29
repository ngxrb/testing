import { UpperCasePipe } from '@angular/common';
import { testModel, testString, testStringArray } from '../data/test.data';
import { DisplayValue } from './display-value.model';
import { TestModel } from './test.model';

describe('IsEmittedArgs', () => {
  let model: DisplayValue<TestModel>;

  beforeEach(() => {
    model = new DisplayValue(testString, testModel, testString);
  });

  it('.property exists', () => {
    expect(model.hasOwnProperty('property')).toBeTruthy();
  });

  it('.property is setted in the constructor', () => {
    expect(model.property).toEqual(testString);
  });

  it('.propertyValue exists', () => {
    expect(model.hasOwnProperty('propertyValue')).toBeTruthy();
  });

  it('.propertyValue is setted in the constructor', () => {
    expect(model.propertyValue).toEqual(testModel);
  });

  it('.selector exists', () => {
    expect(model.hasOwnProperty('selector')).toBeTruthy();
  });

  it('.selector is setted in the constructor', () => {
    expect(model.selector).toEqual(testString);
  });

  it('.pipe exists', () => {
    expect(model.hasOwnProperty('pipe')).toBeFalsy();
    model.pipe = new UpperCasePipe();
    expect(model.hasOwnProperty('pipe')).toBeTruthy();
  });

  it('.pipeArgs exists', () => {
    expect(model.hasOwnProperty('pipeArgs')).toBeFalsy();
    model.pipeArgs = testStringArray;
    expect(model.hasOwnProperty('pipeArgs')).toBeTruthy();
  });

  it('.pipeArgs is an array', () => {
    model.pipeArgs = testStringArray;
    expect(model.pipeArgs instanceof Array).toBeTruthy();
  });
});
