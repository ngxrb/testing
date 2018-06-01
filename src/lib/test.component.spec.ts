import { AsyncPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TestClass } from './abstracts/test-base.abstract.spec';
import { testModel, testObservable, testString } from './data/test.data';
import { MockChangeDetectorRef } from './mocks/mock-change-detector-ref.model';
import { DisplayValueArgs } from './models/display-value-args.model';
import { IsEmittedArgs } from './models/is-emitted-args.model';
import { PipeModel } from './models/pipe.model';
import { TestModel } from './models/test.model';
import { TestComponent } from './test.component';

const modelSelector: string = '#bindModel';
const stringSelector: string = '.bindString';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngxrb-test',
  template: `
    <div>
      <button (click)="emit()" class="bindString">{{ bindString }}</button>
      <button (mouseover)="emit()" id="bindModel">{{ bindModel }}</button>
      <button id="bindModelJson">{{ bindModel | json }}</button>
      <button id="bindModelJsonUppercase">{{ bindModel | json | uppercase }}</button>
      <button id="bindObservable">{{ bindObservable | async }}</button>
    </div>
    `
})
class TestComponentComponent extends TestClass implements OnInit {
  public bindString: string = testString;
  public bindModel: TestModel = testModel;
  public bindObservable: Observable<string> = testObservable;
  @Output() public output: EventEmitter<any> = new EventEmitter();

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.stringMethod();
    this.emit();
  }

  public firesEmit(arg?: string): void {
    if (arg === undefined) {
      this.emit();
    } else {
      this.emitModel();
    }
  }

  public emit(): void {
    this.output.emit(testString);
  }

  public emitModel(): void {
    this.output.emit(testModel);
  }
}

describe('TestComponent', () => {
  let test: TestComponent<TestComponentComponent>;

  beforeEach(() => {
    test = new TestComponent(TestComponentComponent);
  });

  it('.clazz is setted', () => {
    expect(test.clazz).not.toBeUndefined();
    expect(test.clazz).not.toBeNull();
    expect(test.clazz).not.toEqual(new TestModel(testString));
    expect(test.clazz).toEqual(new TestComponentComponent());
  });

  it('.fixture is setted', () => {
    expect(test.fixture).not.toBeUndefined();
  });

  it('isEmitted', () => {
    test.isEmitted(new IsEmittedArgs('output', testString));
  });

  it('isEmitted with onMethod', () => {
    const args: IsEmittedArgs = new IsEmittedArgs('output', testString);
    args.onMethod = 'firesEmit';
    test.isEmitted(args);
  });

  it('isEmitted with onMethodArgs', () => {
    const args: IsEmittedArgs = new IsEmittedArgs('output', testModel);
    args.onMethod = 'firesEmit';
    args.onMethodArgs = [testString];
    test.isEmitted(args);
  });

  it('displayValue', () => {
    test.displayValue(new DisplayValueArgs('bindString', testString, stringSelector));
    test.displayValue(new DisplayValueArgs('bindModel', testModel, modelSelector));
  });

  it('displayValue with a pipe', () => {
    const model: DisplayValueArgs<TestModel> = new DisplayValueArgs(
      'bindModel',
      testModel,
      '#bindModelJson'
    );
    model.pipeList = [new PipeModel(new JsonPipe())];
    test.displayValue(model);
  });

  it('displayValue with multiple pipes', () => {
    const model: DisplayValueArgs<TestModel> = new DisplayValueArgs(
      'bindModel',
      testModel,
      '#bindModelJsonUppercase'
    );
    model.pipeList = [new PipeModel(new JsonPipe()), new PipeModel(new UpperCasePipe())];
    test.displayValue(model);
  });

  it('displayValue with an Observable', () => {
    const model: DisplayValueArgs<Observable<string>> = new DisplayValueArgs(
      'bindObservable',
      testObservable,
      '#bindObservable'
    );
    model.pipeList = [new PipeModel(new AsyncPipe(new MockChangeDetectorRef()))];
    test.displayValue(model);
  });

  it('eventCalls on click', () => {
    test.eventCalls('click', stringSelector, 'emit');
  });

  it('eventCalls on mouseover', () => {
    test.eventCalls('mouseover', modelSelector, 'emit');
  });

  it('selectorExist', () => {
    const original: DebugElement = test.fixture.debugElement.query(By.css(modelSelector));
    const found: DebugElement = test.selectorExist(modelSelector) as DebugElement;
    expect(original).toEqual(found);
  });
});
