import { DatePipe, UpperCasePipe } from '@angular/common';
import { testModel, testNumber, testString } from '../data/test.data';
import { DisplayValueArgs } from './display-value-args.model';
import { PipeModel } from './pipe.model';

const pipeUppercase: PipeModel = new PipeModel(new UpperCasePipe());
const datePipe: any = new DatePipe('en_US');
const pipeDate: PipeModel = new PipeModel(datePipe);
const date: Date = new Date();

describe('DisplayValueArgs', () => {
  let model: DisplayValueArgs<any>;

  beforeEach(() => {
    model = new DisplayValueArgs(testString, testString, testString);
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
    expect(model.propertyValue).toEqual(testString);
  });

  it('.selector exists', () => {
    expect(model.hasOwnProperty('selector')).toBeTruthy();
  });

  it('.selector is setted in the constructor', () => {
    expect(model.selector).toEqual(testString);
  });

  it('.pipeList exists', () => {
    expect(model.hasOwnProperty('pipeList')).toBeFalsy();
    model.pipeList = [pipeUppercase];
    expect(model.hasOwnProperty('pipeList')).toBeTruthy();
  });

  it('.pipeList is an array', () => {
    model.pipeList = [pipeUppercase];
    expect(model.pipeList instanceof Array).toBeTruthy();
  });

  it('.selectorValue return the value without pipe', () => {
    expect(model.selectorValue).toEqual(testString);
    model.propertyValue = testNumber;
    expect(model.selectorValue).toEqual(testNumber.toString());
    model.propertyValue = testModel;
    expect(model.selectorValue).toEqual(testModel.toString());
  });

  it('.selectorValue return the correct value with a pipe', () => {
    model.pipeList = [pipeUppercase];
    expect(model.selectorValue).toEqual(testString.toUpperCase());
  });

  it('.selectorValue return the correct value with a pipe and args', () => {
    model.propertyValue = date;
    pipeDate.args = ['fullDate'];
    model.pipeList = [pipeDate];
    const expected: string = datePipe.transform(date, 'fullDate');
    expect(model.selectorValue).toEqual(expected);
  });

  it('.selectorValue return the correct value with multiple pipes', () => {
    model.propertyValue = date;
    model.pipeList = [pipeDate, pipeUppercase];
    const expected: string = datePipe.transform(date, 'fullDate');
    expect(model.selectorValue).toEqual(expected.toUpperCase());
  });
});
