import { testNumber, testString } from './data/test.data';
import { TestModel } from './models/test.model';
import { TestBedConfig } from './models/testbed-config.model';
import { TestClass } from './test.class';

describe('TestClass', () => {
  let test: TestClass<any> | undefined;

  beforeEach(() => {
    test = undefined;
  });

  it('without args', () => {
    test = new TestClass(TestBedConfig);
    expect(test.clazz).toEqual(new TestBedConfig());
    expect(test.clazz).not.toEqual(new TestModel(testNumber, testString));
  });

  it('with args', () => {
    test = new TestClass(TestModel, testNumber, testString);
    expect(test.clazz).not.toEqual(new TestBedConfig());
    expect(test.clazz).toEqual(new TestModel(testNumber, testString));
  });
});
