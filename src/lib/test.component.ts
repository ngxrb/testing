import { DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { toJS } from 'mobx';
import { TestAngularAbstract } from './abstracts/test-angular.abstract';
import { DisplayValue } from './models/display-value.model';
import { IsEmittedArgs } from './models/is-emitted-args.model';
import { MethodIsCalledArgs } from './models/method-is-called-args.model';
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

  public methodIsCalled(args: MethodIsCalledArgs): void {
    if (!args.onMethod) {
      args.onMethod = 'onInit';
    }
    super.methodIsCalled(args);
  }

  public isEmitted(args: IsEmittedArgs): void {
    if (this.isInstanceOf(args.output, EventEmitter)) {
      spyOn(this.clazz[args.output], 'emit');
      expect(this.clazz[args.output].emit).not.toHaveBeenCalled();
      if (args.onMethod !== undefined) {
        const onMethodArgs: any[] = args.onMethodArgs !== undefined ? args.onMethodArgs : [];
        this.clazz[args.onMethod](...onMethodArgs);
      }
      this.fixture
        .whenStable()
        .then(() => expect(this.clazz[args.output].emit).toHaveBeenCalledWith(args.value))
        .catch();
    }
  }

  public displayValue(args: DisplayValue<any>): void {
    const element: DebugElement | undefined = this.selectorExist(args.selector);
    if (element !== undefined) {
      expect(toJS(this.clazz[args.property])).toEqual(args.propertyValue);
      expect(element.nativeElement.textContent).toContain(args.selectorValue);
    }
  }

  public clickSelectorCalls(selector: string, method: keyof T): void {
    const element: DebugElement | undefined = this.selectorExist(selector);
    if (element !== undefined) {
      spyOn(this.clazz, method);
      expect(this.clazz[method]).not.toHaveBeenCalled();
      element.nativeElement.click();
      this.fixture
        .whenStable()
        .then(() => expect(this.clazz[method]).toHaveBeenCalled())
        .catch();
    }
  }

  public selectorExist(selector: string): DebugElement | undefined {
    const element: DebugElement | undefined = this.fixture.debugElement.query(By.css(selector));
    expect(element).not.toBeNull(`Selector ${selector} do not exist`);

    return element;
  }
}
