import { DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { toJS } from 'mobx';
import { TestAngularAbstract } from './abstracts/test-angular.abstract';
import { DisplayValueArgs } from './models/display-value-args.model';
import { IsEmittedArgs } from './models/is-emitted-args.model';
import { TestBedConfig } from './models/testbed-config.model';

export class TestComponent<T> extends TestAngularAbstract<T> {
  public fixture: ComponentFixture<T>;

  constructor(clazz: any, config?: TestBedConfig) {
    super(clazz, config);
    this.fixture = this.testBed.createComponent(clazz);
    this.clazz = this.fixture.componentInstance;
  }

  protected setTestBed(clazz: any, config: TestBedConfig): typeof TestBed {
    config.declarations.push(clazz);

    return super.setTestBed(clazz, config);
  }

  public isEmitted(args: IsEmittedArgs): void {
    this.isInstanceOf(args.output, EventEmitter);
    spyOn(this.clazz[args.output], 'emit');
    expect(this.clazz[args.output].emit).not.toHaveBeenCalled();
    if (args.onMethod === undefined) {
      args.onMethod = 'ngOnInit';
    }
    this.clazz[args.onMethod](...args.onMethodArgs);
    this.fixture
      .whenStable()
      .then(() => expect(this.clazz[args.output].emit).toHaveBeenCalledWith(args.value))
      .catch();
  }

  public displayValue(args: DisplayValueArgs<any>): void {
    const element: DebugElement | undefined = this.selectorExist(args.selector);
    expect(toJS(this.clazz[args.property])).toEqual(args.propertyValue);
    expect((element as DebugElement).nativeElement.textContent).toContain(args.selectorValue);
  }

  public eventCalls(event: string, selector: string, method: keyof T): void {
    const element: DebugElement | undefined = this.selectorExist(selector);
    spyOn(this.clazz, method);
    expect(this.clazz[method]).not.toHaveBeenCalled();
    (element as DebugElement).triggerEventHandler(event, new MouseEvent(event));
    this.fixture
      .whenStable()
      .then(() => expect(this.clazz[method]).toHaveBeenCalled())
      .catch();
  }

  public selectorExist(selector: string): DebugElement | undefined {
    const element: DebugElement | undefined = this.fixture.debugElement.query(By.css(selector));
    expect(element).not.toBeNull(`Selector ${selector} do not exist`);

    return element;
  }
}
