import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { testString } from './data/test.data';
import { TestService } from './test.service';

@Injectable()
export class TestServiceService {}

describe('TestAngularAbstract', () => {
  let test: TestService<TestServiceService>;

  beforeEach(() => {
    test = new TestService(TestServiceService);
  });

  it('.clazz is setted', () => {
    expect(test.clazz).not.toBeUndefined();
    expect(test.clazz instanceof TestServiceService).toBeTruthy();
  });

  it('.testbed is setted', () => {
    expect(test.testBed).not.toBeUndefined();
    expect(test.testBed.get(TestServiceService)).toBeTruthy();
    expect(test.testBed.get(HttpClientModule, testString)).toEqual(testString);
  });
});
