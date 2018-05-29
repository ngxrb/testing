import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { testBedConfig2, testModel, testString } from '../data/test.data';
import { TestModel } from '../models/test.model';
import { TestBedConfig } from '../models/testbed-config.model';
import { TestAngularAbstract } from './test-angular.abstract';

class TestAngularAbstractTest extends TestAngularAbstract<TestModel> {
  constructor(clazz: any, config?: TestBedConfig) {
    super(clazz, config);
  }
}

describe('TestAngularAbstract', () => {
  let testedClass: TestAngularAbstractTest | undefined;

  beforeEach(() => {
    testedClass = undefined;
  });

  it('with a basic config', () => {
    testedClass = new TestAngularAbstractTest(testModel);
    expect(testedClass.testBed).not.toBeUndefined();
    expect(testedClass.testBed.get(CommonModule)).toBeTruthy();
    expect(testedClass.testBed.get(HttpClientModule, testString)).toEqual(testString);
  });

  it('with a custom config', () => {
    testedClass = new TestAngularAbstractTest(testModel, testBedConfig2);
    expect(testedClass.testBed).not.toBeUndefined();
    expect(testedClass.testBed.get(CommonModule)).toBeTruthy();
    expect(testedClass.testBed.get(HttpClientModule)).toBeTruthy();
  });
});
