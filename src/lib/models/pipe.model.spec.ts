import { UpperCasePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { testStringArray } from '../../public_api';
import { PipeModel } from './pipe.model';

const uppercase: PipeTransform = new UpperCasePipe();

describe('PipeModel', () => {
  let model: PipeModel;

  beforeEach(() => {
    model = new PipeModel(uppercase);
  });

  it('.name exists', () => {
    expect(model.hasOwnProperty('name')).toBeTruthy();
  });

  it('.name is setted in the constructor', () => {
    expect(model.name).toEqual(uppercase);
  });

  it('.args exists', () => {
    expect(model.hasOwnProperty('args')).toBeTruthy();
  });

  it('.args is an array', () => {
    expect(model.args instanceof Array).toBeTruthy();
    expect(model.args).toEqual([]);
  });

  it('.args is setted in the constructor', () => {
    model = new PipeModel(uppercase, testStringArray);
    expect(model.args).toEqual(testStringArray);
  });
});
