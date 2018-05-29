import { Observable } from 'rxjs';
import { testModel, testObservable, testObservableError, testString } from '../data/test.data';
import { TestModel } from '../models/test.model';
import { TestBaseAbstract } from './test-base.abstract';

class TestClass {
  public property: string = testString;
  public propertyWithValue: any = { value: testString };
  public propertyModel: TestModel = testModel;
  public observableProperty: Observable<string> = testObservable;

  constructor() {
    this.protectedMethod();
  }

  public method(): void {
    this.protectedMethod();
    this.protectedMethodWithArgs(testString);
  }

  public eventMethod(event: Event): void {
    event.preventDefault();
  }

  public methodWithArgs(arg: string): void {
    this.protectedMethod();
  }

  public stringMethod(): string {
    return testString;
  }

  public stringMethodWithArgs(arg: string): string {
    return arg;
  }

  public observableMethod(): Observable<string> {
    return testObservable;
  }

  public errorObservableMethod(): Observable<string> {
    return testObservableError;
  }

  protected protectedMethod(): void {}

  protected protectedMethodWithArgs(agr: string): void {}
}

// tslint:disable-next-line:max-classes-per-file
class TestBaseAbstractTest extends TestBaseAbstract<TestClass> {}

describe('TestBaseAbstract', () => {
  let test: TestBaseAbstractTest;

  beforeEach(() => {
    test = new TestBaseAbstractTest();
    test.clazz = new TestClass();
  });

  it('is instantiable', () => {
    test.isInstantiable();
  });

  it('hasValue', () => {
    test.hasValue('property', testString);
  });

  it('hasValue Observable', () => {
    test.hasValue('observableProperty', testObservable);
  });

  it('hasFlatValue', () => {
    test.hasFlatValue('property', testString);
  });

  it('hasFlatValue Observable', () => {
    test.hasFlatValue('observableProperty', testString);
  });

  it('hasFlatValue with value', () => {
    test.hasFlatValue('propertyWithValue', testString);
  });

  it('isInstanceOf', () => {
    test.isInstanceOf('propertyModel', TestModel);
  });

  it('isTypeOf', () => {
    test.isTypeOf('property', 'string');
  });

  it('methodIsCalled', () => {
    test.methodIsCalled({ method: 'protectedMethod' });
  });

  it('methodIsCalled with onMethod', () => {
    test.methodIsCalled({ method: 'protectedMethod', onMethod: 'method' });
  });

  it('methodIsCalled with methodArgs', () => {
    test.methodIsCalled({
      method: 'protectedMethodWithArgs',
      onMethod: 'method',
      methodArgs: [testString]
    });
  });

  it('methodIsCalled with onMethodArgs', () => {
    test.methodIsCalled({
      method: 'protectedMethod',
      onMethod: 'methodWithArgs',
      onMethodArgs: [testString]
    });
  });

  it('methodIsCalled with object', () => {
    const event: Event = new Event('');
    test.methodIsCalled({
      object: event,
      method: 'preventDefault',
      onMethod: 'eventMethod',
      onMethodArgs: [event]
    });
  });

  it('methodReturns', () => {
    test.methodReturns('stringMethod', testString);
  });

  it('methodReturns Observable', () => {
    test.methodReturns('observableMethod', testObservable);
  });

  it('methodReturns Observable error', () => {
    test.methodReturns('errorObservableMethod', testObservableError);
  });

  it('methodReturns with args', () => {
    test.methodReturns('stringMethodWithArgs', testString, testString);
  });

  it('methodReturnsFlat Observable', () => {
    test.methodReturnsFlat('observableMethod', testString);
  });

  it('methodReturnsFlat with args', () => {
    test.methodReturnsFlat('stringMethodWithArgs', testString, testString);
  });

  it('memberExist with property', () => {
    test.memberExist('property');
  });

  it('memberExist with method', () => {
    test.memberExist('method');
  });
});
