import { Component } from '@angular/core';
import { componentMeta } from './data/component-meta.data';
import { testString } from './data/test.data';
import { TestModel } from './models/test.model';
import { TestComponent } from './test.component';

@Component(componentMeta)
class TestComponentComponent {}

describe('TestComponent', () => {
  let test: TestComponent<TestComponentComponent>;

  beforeEach(() => {
    test = new TestComponent(TestComponentComponent);
  });

  it('clazz is setted', () => {
    expect(test.clazz).not.toBeUndefined();
    expect(test.clazz).not.toBeNull();
    expect(test.clazz).not.toEqual(new TestModel(testString));
    expect(test.clazz).toEqual(new TestComponentComponent());
  });

  it('fixture is setted', () => {
    expect(test.fixture).not.toBeUndefined();
  });
});
